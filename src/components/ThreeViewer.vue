<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
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
let raycaster: THREE.Raycaster
let mouse: THREE.Vector2
let outlineObjects: THREE.Object3D[] = []

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

  // Raycaster for click detection
  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  // Handle window resize
  window.addEventListener('resize', handleResize)
  
  // Handle mouse clicks
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

const handleClick = (event: MouseEvent) => {
  if (!canvasContainer.value || !robot) return

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

  // Create green outline for the selected object
  node.object3D.traverse((child: any) => {
    if (child.isMesh && child.geometry) {
      // Create edges geometry for outline effect
      const edges = new THREE.EdgesGeometry(child.geometry)
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x00ff00, 
        linewidth: 2 
      })
      const outline = new THREE.LineSegments(edges, lineMaterial)
      
      // Match the world transform of the original mesh
      child.getWorldPosition(outline.position)
      child.getWorldQuaternion(outline.quaternion)
      child.getWorldScale(outline.scale)
      
      scene.add(outline)
      outlineObjects.push(outline)
    }
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

const loadURDFContent = (content: string, filename: string) => {
  // Clear existing robot from scene
  if (robot) {
    scene.remove(robot)
    robot = null
  }

  // Use urdf-loader to load and visualize the URDF
  const loader = new URDFLoader()
  
  // Configure loader
  loader.loadMeshCb = (path: string, manager: any, onComplete: (obj: any) => void) => {
    // For now, create default geometry if no mesh file is provided
    // This allows URDF files without external meshes to still visualize
    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
    const material = new THREE.MeshPhongMaterial({ color: 0xcccccc })
    const mesh = new THREE.Mesh(geometry, material)
    onComplete(mesh)
  }

  // Parse the URDF content
  robot = loader.parse(content)
  
  // Add robot to scene
  scene.add(robot)

  // Convert to node structure for hierarchy display
  const robotNode = convertURDFToNodeStructure(robot)
  
  // Emit the loaded robot structure
  emit('urdf-loaded', robotNode)
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
