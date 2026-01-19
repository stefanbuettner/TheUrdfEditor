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

const loadSampleRobot = () => {
  // Create a simple sample robot structure
  const robotNode: URDFNode = {
    name: 'sample_robot',
    type: 'robot',
    children: [
      {
        name: 'base_link',
        type: 'link',
        children: [],
        properties: {
          position: [0, 0, 0],
          rotation: [0, 0, 0]
        }
      },
      {
        name: 'joint_1',
        type: 'joint',
        children: [
          {
            name: 'link_1',
            type: 'link',
            children: [],
            properties: {
              position: [0, 1, 0],
              rotation: [0, 0, 0]
            }
          }
        ],
        properties: {
          type: 'revolute',
          axis: [0, 0, 1]
        }
      }
    ],
    properties: {
      version: '1.0'
    }
  }

  // Create visual representation
  const baseGeometry = new THREE.BoxGeometry(1, 0.2, 1)
  const baseMaterial = new THREE.MeshPhongMaterial({ color: 0x42b983 })
  const baseMesh = new THREE.Mesh(baseGeometry, baseMaterial)
  scene.add(baseMesh)

  const linkGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 16)
  const linkMaterial = new THREE.MeshPhongMaterial({ color: 0x3498db })
  const linkMesh = new THREE.Mesh(linkGeometry, linkMaterial)
  linkMesh.position.set(0, 1, 0)
  scene.add(linkMesh)

  // Emit the loaded robot structure
  emit('urdf-loaded', robotNode)
}

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
