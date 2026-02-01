<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js'
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js'
import URDFLoader from 'urdf-loader'
import type { URDFNode } from '../types/urdf'

interface Props {
  selectedNode?: URDFNode | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'urdf-loaded': [root: URDFNode]
  'node-selected': [node: URDFNode | null]
}>()

const canvasContainer = ref<HTMLDivElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let animationId: number
let robot: any = null
let raycaster = new THREE.Raycaster()
let mouse = new THREE.Vector2()
let outlineObjects: THREE.Object3D[] = []
let mouseDownPos: { x: number; y: number } | null = null

// Threshold for distinguishing clicks from drags (in pixels)
const DRAG_THRESHOLD_PIXELS = 5

const initThreeJS = () => {
  if (!canvasContainer.value) return

  // Scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x263238)

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    canvasContainer.value.clientWidth / canvasContainer.value.clientHeight,
    0.1,
    1000
  )
  // Position camera for Z-up view (robotics standard)
  camera.position.set(3, -3, 3)
  camera.up.set(0, 0, 1)
  camera.lookAt(0, 0, 0)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  canvasContainer.value.appendChild(renderer.domElement)

  // Controls
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, -5, 10)
  scene.add(directionalLight)

  // Grid on XY plane (Z-up orientation) - rotate grid to lie flat
  const gridHelper = new THREE.GridHelper(10, 10)
  gridHelper.rotation.x = Math.PI / 2
  scene.add(gridHelper)

  // Axes helper (X=red, Y=green, Z=blue pointing up)
  const axesHelper = new THREE.AxesHelper(2)
  scene.add(axesHelper)

  // Handle window resize
  window.addEventListener('resize', handleResize)
  
  // Handle mouse events to distinguish clicks from drags
  renderer.domElement.addEventListener('mousedown', handleMouseDown)
  renderer.domElement.addEventListener('click', handleClick)

  // Don't load sample robot - start with empty scene

  // Animation loop
  animate()
}

const handleResize = () => {
  if (!canvasContainer.value) return

  camera.aspect = canvasContainer.value.clientWidth / canvasContainer.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

const handleMouseDown = (event: MouseEvent) => {
  // Record mouse position on mouse down
  mouseDownPos = { x: event.clientX, y: event.clientY }
}

const handleClick = (event: MouseEvent) => {
  if (!canvasContainer.value || !robot) return

  // Check if this was a drag (mouse moved significantly)
  if (mouseDownPos) {
    const deltaX = Math.abs(event.clientX - mouseDownPos.x)
    const deltaY = Math.abs(event.clientY - mouseDownPos.y)
    
    if (deltaX > DRAG_THRESHOLD_PIXELS || deltaY > DRAG_THRESHOLD_PIXELS) {
      // This was a drag, not a click - ignore it
      mouseDownPos = null
      return
    }
  }
  mouseDownPos = null

  // Calculate mouse position in normalized device coordinates
  const rect = canvasContainer.value.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  // Update the raycaster
  raycaster.setFromCamera(mouse, camera)

  // Find intersections with robot parts
  const intersects = raycaster.intersectObject(robot, true)

  if (intersects.length > 0) {
    const intersection = intersects[0]
    if (intersection && intersection.object) {
      // Find the clicked URDF component
      const clickedObject = intersection.object
      const node = findNodeByObject3D(clickedObject)
      if (node) {
        emit('node-selected', node)
        return
      }
    }
  }
  
  // Clicked on empty space or no valid node - clear selection
  emit('node-selected', null)
}

const findNodeByObject3D = (object: THREE.Object3D): URDFNode | null => {
  // Traverse up to find a URDF link or joint
  let current: THREE.Object3D | null = object
  while (current) {
    if (current.userData.urdfNode) {
      return current.userData.urdfNode
    }
    current = current.parent
  }
  return null
}

const clearHighlighting = () => {
  // Remove all outline objects from scene
  outlineObjects.forEach(outline => {
    scene.remove(outline)
  })
  outlineObjects = []
}

const highlightNode = (node: URDFNode | null) => {
  clearHighlighting()

  if (!node || !node.object3D) return

  // Create green outline for the selected object only (not child links/joints)
  // We need to find all meshes within this node, but stop at child URDF elements
  const obj3D = node.object3D
  
  // Helper function to find meshes, stopping at child URDF links/joints
  const findMeshesInNode = (obj: any, meshes: any[] = []): any[] => {
    // If this is a child URDF link or joint (not the root we're highlighting), stop here
    if (obj !== obj3D && (obj.isURDFLink || obj.isURDFJoint)) {
      return meshes
    }
    
    // If this object is a mesh, add it
    if (obj.isMesh && obj.geometry) {
      meshes.push(obj)
    }
    
    // Recursively check children (but will stop at URDF boundaries)
    if (obj.children) {
      obj.children.forEach((child: any) => {
        findMeshesInNode(child, meshes)
      })
    }
    
    return meshes
  }
  
  const meshes = findMeshesInNode(obj3D)
  
  // Create outlines for all found meshes
  meshes.forEach((mesh: any) => {
    const edges = new THREE.EdgesGeometry(mesh.geometry)
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x00ff00
    })
    const outline = new THREE.LineSegments(edges, lineMaterial)
    
    // Match the world transform of the original mesh
    mesh.getWorldPosition(outline.position)
    mesh.getWorldQuaternion(outline.quaternion)
    mesh.getWorldScale(outline.scale)
    
    scene.add(outline)
    outlineObjects.push(outline)
  })
}

// Watch for selection changes from parent
watch(() => props.selectedNode, (newNode) => {
  highlightNode(newNode ?? null)
})

const convertURDFToNodeStructure = (urdfRobot: any): URDFNode => {
  // Recursively convert URDF loader structure to our node structure
  const convert = (obj: any): URDFNode => {
    const node: URDFNode = {
      name: obj.name || 'unnamed',
      type: obj.isURDFRobot ? 'robot' : obj.isURDFLink ? 'link' : obj.isURDFJoint ? 'joint' : 'link',
      children: [],
      properties: {},
      object3D: obj // Store reference to Three.js object
    }

    // Store URDFNode reference in the Three.js object for reverse lookup
    obj.userData = obj.userData || {}
    obj.userData.urdfNode = node

    // Add joint-specific properties
    if (obj.isURDFJoint && obj.jointType) {
      node.properties!.type = obj.jointType
      if (obj.axis) {
        node.properties!.axis = [obj.axis.x, obj.axis.y, obj.axis.z]
      }
    }

    // Add link/visual properties
    if (obj.position) {
      node.properties!.position = [obj.position.x, obj.position.y, obj.position.z]
    }
    if (obj.rotation) {
      node.properties!.rotation = [obj.rotation.x, obj.rotation.y, obj.rotation.z]
    }

    // Process children
    if (obj.children) {
      obj.children.forEach((child: any) => {
        if (child.isURDFLink || child.isURDFJoint) {
          node.children.push(convert(child))
        }
      })
    }

    return node
  }

  return convert(urdfRobot)
}

const createFallbackBillboard = (): THREE.Object3D => {
  // Create a red exclamation mark billboard for missing meshes
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 128
  const context = canvas.getContext('2d')
  
  if (context) {
    // Red background
    context.fillStyle = '#ff0000'
    context.fillRect(0, 0, 128, 128)
    
    // White exclamation mark
    context.fillStyle = '#ffffff'
    context.font = 'bold 100px Arial'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText('!', 64, 64)
  }
  
  const texture = new THREE.CanvasTexture(canvas)
  const material = new THREE.SpriteMaterial({ map: texture })
  const sprite = new THREE.Sprite(material)
  sprite.scale.set(0.5, 0.5, 0.5)
  
  return sprite
}

const loadURDFContent = (contentOrUrl: string, filename: string, packagePath: string = '') => {
  // Clear existing robot from scene
  if (robot) {
    scene.remove(robot)
    robot = null
  }

  // Use urdf-loader to load and visualize the URDF
  const loader = new URDFLoader()
  
  // Configure package path for resolving package:// URLs
  if (packagePath) {
    // Set packages to resolve package:// URLs to the provided base path
    // Note: Currently all packages resolve to the same base path
    // This works for URDFs where all meshes are in the same repository
    // For URDFs with multiple package references, a package mapping would be needed
    loader.packages = (packageName: string) => {
      return packagePath
    }
  }
  
  // Configure fallback mesh loader for unsupported formats or errors
  loader.loadMeshCb = (path: string, manager: any, onComplete: (obj: any) => void) => {
    // Determine file extension
    const extension = path.split('.').pop()?.toLowerCase()
    
    console.log(`Loading mesh: ${path} (${extension})`)
    
    const onError = (error: any) => {
      console.warn(`Failed to load mesh ${path}:`, error)
      // Return fallback billboard on error
      onComplete(createFallbackBillboard())
    }
    
    // Let urdf-loader handle STL and DAE with default loaders
    // Only handle additional formats or provide fallback
    try {
      switch (extension) {
        case 'obj':
          new OBJLoader(manager).load(
            path,
            (obj) => {
              // Apply default material only to meshes without materials
              obj.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                  const mesh = child as THREE.Mesh
                  // Only apply default material if no material exists
                  if (!mesh.material || (Array.isArray(mesh.material) && mesh.material.length === 0)) {
                    mesh.material = new THREE.MeshPhongMaterial({ color: 0xcccccc })
                  }
                }
              })
              onComplete(obj)
            },
            undefined,
            onError
          )
          break
          
        case 'ply':
          new PLYLoader(manager).load(
            path,
            (geometry) => {
              const material = new THREE.MeshPhongMaterial({ color: 0xcccccc })
              const mesh = new THREE.Mesh(geometry, material)
              onComplete(mesh)
            },
            undefined,
            onError
          )
          break
        
        case 'stl':
        case 'dae':
          // Let urdf-loader's default mesh loader handle these
          // If we reach here, the default loader should have been called
          // Fall through to default handler which will create fallback
          console.warn(`Unexpected: STL/DAE should be handled by default loader`)
          onComplete(createFallbackBillboard())
          break
          
        default:
          console.warn(`Unsupported mesh format: ${extension}`)
          onComplete(createFallbackBillboard())
          break
      }
    } catch (error) {
      console.error(`Error loading mesh ${path}:`, error)
      onComplete(createFallbackBillboard())
    }
  }

  // Check if this is a URL or content string
  const isUrl = contentOrUrl.startsWith('http://') || contentOrUrl.startsWith('https://')
  
  if (isUrl) {
    // Use loader.load() for URLs - it handles fetching and mesh loading better
    loader.load(
      contentOrUrl,
      (loadedRobot) => {
        robot = loadedRobot
        scene.add(robot)
        
        // Convert to node structure for hierarchy display
        const robotNode = convertURDFToNodeStructure(robot)
        
        // Emit the loaded robot structure
        emit('urdf-loaded', robotNode)
      },
      undefined,
      (error) => {
        console.error('Error loading URDF:', error)
        alert(`Failed to load URDF: ${error}`)
      }
    )
  } else {
    // Use loader.parse() for content strings
    robot = loader.parse(contentOrUrl)
    
    // Add robot to scene
    scene.add(robot)

    // Convert to node structure for hierarchy display
    const robotNode = convertURDFToNodeStructure(robot)
    
    // Emit the loaded robot structure
    emit('urdf-loaded', robotNode)
  }
}

// Expose loadURDFContent to parent component
defineExpose({
  loadURDFContent
})

const cleanup = () => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  
  window.removeEventListener('resize', handleResize)
  
  if (renderer && renderer.domElement) {
    renderer.domElement.removeEventListener('mousedown', handleMouseDown)
    renderer.domElement.removeEventListener('click', handleClick)
  }
  
  clearHighlighting()
  
  if (renderer) {
    renderer.dispose()
  }
  
  if (canvasContainer.value && renderer) {
    canvasContainer.value.removeChild(renderer.domElement)
  }
}

onMounted(() => {
  initThreeJS()
})

onBeforeUnmount(() => {
  cleanup()
})
</script>

<template>
  <div ref="canvasContainer" class="three-viewer"></div>
</template>

<style scoped>
.three-viewer {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #263238;
}
</style>
