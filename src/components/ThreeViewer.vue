<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, reactive, computed } from 'vue'
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

// Visibility controls state
const visibilityControls = reactive({
  links: true,
  joints: true,
  collisions: true,
  sensors: true
})

// Computed property for show/hide all button state
const allVisibilityState = computed(() => {
  const visibleCount = Object.values(visibilityControls).filter(Boolean).length
  const totalCount = Object.keys(visibilityControls).length
  
  if (visibleCount === 0) return 'none'
  if (visibleCount === totalCount) return 'all'
  return 'mixed'
})

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

// Reusable collision material to avoid creating new materials on each load
const collisionMaterial = new THREE.MeshBasicMaterial({
  color: 0xffbe38,  // Yellow/orange color
  transparent: true,
  opacity: 0.35,
  depthWrite: false  // Ensure transparency works correctly
})

// Sensor type keywords for detection in object names
const SENSOR_TYPE_KEYWORDS = ['sensor', 'camera', 'lidar', 'imu']

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

const applyCollisionMaterials = (object: any) => {
  // Collect all meshes that need material changes first
  const meshesToUpdate: any [] = []

  object.traverse((child: any) => {
    if (child.isMesh && child.userData?.isCollisionMesh) {
      meshesToUpdate.push(child)
    }
    
    // Also make colliders visible
    if (child.isURDFCollider) {
      child.visible = true
      // If the collider itself is a mesh, also mark it for material update
      if (child.isMesh) {
        meshesToUpdate.push(child)
      }
    }
  })
  
  // Apply material changes outside of traverse
  meshesToUpdate.forEach((mesh, index) => {    
    // Dispose of old material if it exists and is not shared or original
    if (mesh.material && mesh.material !== collisionMaterial && mesh.material !== mesh.userData.originalMaterial && mesh.material.dispose) {
      mesh.material.dispose()
    }
    
    mesh.material = collisionMaterial
    mesh.visible = true
  })
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
  
  // Create outlines for all found meshes, but only if their component type is visible
  meshes.forEach((mesh: any) => {
    // Check if this mesh should be highlighted based on visibility controls
    // Priority order: collision > sensor > joint > link
    let shouldHighlight = false
    
    if (mesh.userData?.isCollisionMesh) {
      // Collision meshes are only controlled by collision visibility
      shouldHighlight = visibilityControls.collisions
    } else if (mesh.userData?.isSensor) {
      // Sensor meshes are only controlled by sensor visibility
      shouldHighlight = visibilityControls.sensors
    } else if (mesh.userData?.isJointMesh) {
      // Joint meshes are only controlled by joint visibility
      shouldHighlight = visibilityControls.joints
    } else if (mesh.userData?.isLinkMesh) {
      // Link meshes are only controlled by link visibility
      shouldHighlight = visibilityControls.links
    }
    
    // Only create outline if the mesh should be highlighted
    if (!shouldHighlight) {
      return
    }
    
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

// Watch for visibility control changes and re-highlight the current selection
watch(() => ({ ...visibilityControls }), () => {
  // Re-highlight the currently selected node to reflect visibility changes
  highlightNode(props.selectedNode ?? null)
}, { deep: true })

// Visibility control methods
const setComponentVisibility = (componentType: keyof typeof visibilityControls, visible: boolean) => {
  visibilityControls[componentType] = visible
  
  // Only apply to robot if one is loaded
  if (robot) {
    updateObjectVisibility(robot)
  }
}

const updateObjectVisibility = (object: any) => {
  object.traverse((child: any) => {
    // Handle URDF Collision geometry (independent control)
    if (child.isURDFCollider) {
      child.visible = visibilityControls.collisions
      
      // Control collision meshes
      child.traverse((collisionChild: any) => {
        if (collisionChild.isMesh) {
          collisionChild.visible = visibilityControls.collisions
        }
      })
    }
    // Handle meshes using cached classification
    else if (child.isMesh) {
      // Skip collision meshes - they are handled above
      if (child.userData?.isCollisionMesh) {
        return
      }
      
      // Use cached classification data
      if (child.userData?.isLinkMesh) {
        child.visible = visibilityControls.links
      } else if (child.userData?.isJointMesh) {
        child.visible = visibilityControls.joints
      }
    }
    
    // Handle sensors using cached classification
    if (child.userData?.isSensor) {
      child.visible = visibilityControls.sensors
      child.traverse((sensorChild: any) => {
        if (sensorChild.isMesh) {
          sensorChild.visible = visibilityControls.sensors
        }
      })
    }
  })
}

const toggleComponentVisibility = (componentType: keyof typeof visibilityControls) => {
  setComponentVisibility(componentType, !visibilityControls[componentType])
}

const toggleAllVisibility = () => {
  const state = allVisibilityState.value
  const shouldShowAll = state === 'none' || state === 'mixed'
  
  Object.keys(visibilityControls).forEach(key => {
    visibilityControls[key as keyof typeof visibilityControls] = shouldShowAll
  })
  
  if (robot) {
    updateObjectVisibility(robot)
  }
}

// Classify all URDF objects once and cache results in userData
const classifyURDFObjects = (robot: any) => {
  robot.traverse((child: any) => {
    // Initialize userData if not exists
    child.userData = child.userData || {}
    
    // Check if this object is a collision mesh by checking if it or any ancestor is a collider
    let isCollisionMesh = false
    let current = child
    while (current && !isCollisionMesh) {
      if (current.isURDFCollider) {
        isCollisionMesh = true
      }
      current = current.parent
    }
    child.userData.isCollisionMesh = isCollisionMesh
    
    // For non-collision meshes, find the most immediate URDF parent (joint or link)
    if (!isCollisionMesh && child.isMesh) {
      let isLinkMesh = false
      let isJointMesh = false
      
      // Find the most immediate URDF parent (joint or link)
      current = child.parent
      while (current) {
        if (current.isURDFJoint) {
          isJointMesh = true
          break  // Joint is the immediate URDF parent
        } else if (current.isURDFLink) {
          isLinkMesh = true
          break  // Link is the immediate URDF parent
        }
        current = current.parent
      }
      
      child.userData.isLinkMesh = isLinkMesh
      child.userData.isJointMesh = isJointMesh
    } else {
      // Not a mesh or is a collision mesh - don't classify as link/joint
      child.userData.isLinkMesh = false
      child.userData.isJointMesh = false
    }
    
    // Check if this is a sensor
    const isSensorObject = child.userData?.isSensor || 
                          child.userData?.type === 'sensor' ||
                          SENSOR_TYPE_KEYWORDS.some(keyword => 
                            child.name?.toLowerCase().includes(keyword)
                          )
    child.userData.isSensor = isSensorObject
  })
}

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

    // Add collision geometry information for links
    if (obj.isURDFLink || obj.isURDFRobot) {
      // Find collision geometry - only direct children, not descendants
      const collisionGeometry: any[] = []
      if (obj.children) {
        obj.children.forEach((child: any) => {
          if (child.isURDFCollider) {
            collisionGeometry.push({
              name: child.urdfName || child.name || 'unnamed_collision',
              visible: child.visible
            })
          }
        })
      }
      
      if (collisionGeometry.length > 0) {
        node.properties!.collisionGeometry = collisionGeometry
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

const loadURDFContent = (contentOrUrl: string, filename: string, packagePath: string = '') => {
  // Clear existing robot from scene
  if (robot) {
    scene.remove(robot)
    robot = null
  }

  // Use urdf-loader to load and visualize the URDF
  const manager = new THREE.LoadingManager();
   manager.onLoad = () => {
    if (robot) {
      classifyURDFObjects(robot) // Classify objects once and cache results
      applyCollisionMaterials(robot)
      updateObjectVisibility(robot) // Apply current visibility settings
    }
  }
  const loader = new URDFLoader(manager)
  
  // Enable collision geometry parsing
  loader.parseCollision = true
  
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

  // Wrap the default mesh loader to add logging while preserving default behavior
  // Store reference to the default loadMeshCb (which handles STL and DAE)
  const defaultLoadMeshCb = (loader as any).loadMeshCb
  
  if (defaultLoadMeshCb) {
    // Override with a wrapper that logs but calls the default implementation
    loader.loadMeshCb = (path: string, manager: any, onComplete: (mesh: any) => void) => {
      // Call the default loader with wrapped callbacks to add logging
      defaultLoadMeshCb.call(loader, path, manager, (mesh: any) => {
        if (!mesh) {
          console.warn(`[Mesh Loader] Failed to load mesh: ${path}`)
        }
        onComplete(mesh)
      })
    }
  } else {
    console.warn('[Mesh Loader] No default mesh loader found - mesh loading may not work correctly')
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
        
        // Don't apply collision materials here - wait for all meshes to load
        // The LoadingManager callback will handle this
        
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
    
    // For parsed content, apply collision materials immediately since no async mesh loading
    classifyURDFObjects(robot) // Classify objects once and cache results
    applyCollisionMaterials(robot)
    updateObjectVisibility(robot) // Apply current visibility settings

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
  <div class="three-viewer">
    <!-- Visibility Controls -->
    <div class="visibility-controls">
      <!-- Show/Hide All Button -->
      <button 
        class="visibility-btn all-btn"
        :class="{ 
          'all-visible': allVisibilityState === 'all',
          'all-hidden': allVisibilityState === 'none',
          'mixed-state': allVisibilityState === 'mixed'
        }"
        @click="toggleAllVisibility"
        title="Show/Hide All Components"
      >
        <span v-if="allVisibilityState === 'all'">👁️ All</span>
        <span v-else-if="allVisibilityState === 'none'">👁️ None</span>
        <span v-else>👁️ Mixed</span>
      </button>

      <div class="divider"></div>

      <!-- Individual Component Type Buttons -->
      <button 
        class="visibility-btn"
        :class="{ active: visibilityControls.links }"
        @click="toggleComponentVisibility('links')"
        title="Toggle Links Visibility"
      >
        <span class="icon">🔗</span>
        <span :class="{ 'strikethrough': !visibilityControls.links }">Links</span>
      </button>

      <button 
        class="visibility-btn"
        :class="{ active: visibilityControls.joints }"
        @click="toggleComponentVisibility('joints')"
        title="Toggle Joints Visibility"
      >
        <span class="icon">🔧</span>
        <span :class="{ 'strikethrough': !visibilityControls.joints }">Joints</span>
      </button>

      <button 
        class="visibility-btn"
        :class="{ active: visibilityControls.collisions }"
        @click="toggleComponentVisibility('collisions')"
        title="Toggle Collision Geometry Visibility"
      >
        <span class="icon">💥</span>
        <span :class="{ 'strikethrough': !visibilityControls.collisions }">Collisions</span>
      </button>

      <button 
        class="visibility-btn"
        :class="{ active: visibilityControls.sensors }"
        @click="toggleComponentVisibility('sensors')"
        title="Toggle Sensors Visibility"
      >
        <span class="icon">📡</span>
        <span :class="{ 'strikethrough': !visibilityControls.sensors }">Sensors</span>
      </button>
    </div>

    <!-- 3D Canvas Container -->
    <div ref="canvasContainer" class="canvas-container"></div>
  </div>
</template>

<style scoped>
.three-viewer {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #263238;
  display: flex;
  flex-direction: column;
}

.visibility-controls {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: rgba(44, 62, 80, 0.95);
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.visibility-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: #ecf0f1;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.visibility-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.visibility-btn.active {
  background-color: rgba(52, 152, 219, 0.8);
  border-color: rgba(52, 152, 219, 1);
  color: white;
}

.visibility-btn.all-visible {
  background-color: rgba(46, 204, 113, 0.8);
  border-color: rgba(46, 204, 113, 1);
  color: white;
}

.visibility-btn.all-hidden {
  background-color: rgba(231, 76, 60, 0.8);
  border-color: rgba(231, 76, 60, 1);
  color: white;
}

.visibility-btn.mixed-state {
  background-color: rgba(243, 156, 18, 0.8);
  border-color: rgba(243, 156, 18, 1);
  color: white;
}

.divider {
  width: 1px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 4px;
}

.strikethrough {
  text-decoration: line-through;
  opacity: 0.6;
}

.all-btn {
  min-width: 80px;
  justify-content: center;
}

.canvas-container {
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
