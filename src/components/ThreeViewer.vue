<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import URDFLoader from 'urdf-loader'
import type { URDFNode } from '../types/urdf'

const emit = defineEmits<{
  'urdf-loaded': [root: URDFNode]
}>()

const canvasContainer = ref<HTMLDivElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let animationId: number
let robot: any = null

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
  camera.position.set(3, 3, 3)
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
  directionalLight.position.set(5, 10, 7.5)
  scene.add(directionalLight)

  // Grid
  const gridHelper = new THREE.GridHelper(10, 10)
  scene.add(gridHelper)

  // Axes helper
  const axesHelper = new THREE.AxesHelper(2)
  scene.add(axesHelper)

  // Handle window resize
  window.addEventListener('resize', handleResize)

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



const convertURDFToNodeStructure = (urdfRobot: any): URDFNode => {
  // Recursively convert URDF loader structure to our node structure
  const convert = (obj: any): URDFNode => {
    const node: URDFNode = {
      name: obj.name || 'unnamed',
      type: obj.isURDFRobot ? 'robot' : obj.isURDFLink ? 'link' : obj.isURDFJoint ? 'joint' : 'link',
      children: [],
      properties: {}
    }

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
