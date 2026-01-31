<script setup lang="ts">
import { computed } from 'vue'
import * as THREE from 'three'
import type { URDFNode } from '../types/urdf'

interface Props {
  node: URDFNode | null
}

const props = defineProps<Props>()

const hasNode = computed(() => props.node !== null)

const properties = computed(() => {
  if (!props.node) return []
  
  const props_list = []
  props_list.push({ key: 'Name', value: props.node.name })
  props_list.push({ key: 'Type', value: props.node.type })
  
  // Get live position and rotation from Three.js object if available
  if (props.node.object3D) {
    const obj = props.node.object3D
    const worldPos = new THREE.Vector3()
    const worldQuat = new THREE.Quaternion()
    const worldEuler = new THREE.Euler()
    
    obj.getWorldPosition(worldPos)
    obj.getWorldQuaternion(worldQuat)
    worldEuler.setFromQuaternion(worldQuat)
    
    props_list.push({ 
      key: 'Position', 
      value: `[${worldPos.x.toFixed(3)}, ${worldPos.y.toFixed(3)}, ${worldPos.z.toFixed(3)}]`
    })
    props_list.push({ 
      key: 'Rotation', 
      value: `[${worldEuler.x.toFixed(3)}, ${worldEuler.y.toFixed(3)}, ${worldEuler.z.toFixed(3)}]`
    })
  } else if (props.node.properties) {
    // Fallback to static properties if no object3D
    if (props.node.properties.position) {
      props_list.push({ 
        key: 'Position', 
        value: JSON.stringify(props.node.properties.position)
      })
    }
    if (props.node.properties.rotation) {
      props_list.push({ 
        key: 'Rotation', 
        value: JSON.stringify(props.node.properties.rotation)
      })
    }
  }
  
  // Add other properties (excluding position and rotation which we handled above)
  if (props.node.properties) {
    for (const [key, value] of Object.entries(props.node.properties)) {
      if (key !== 'position' && key !== 'rotation') {
        props_list.push({ 
          key: key.charAt(0).toUpperCase() + key.slice(1), 
          value: typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)
        })
      }
    }
  }
  
  return props_list
})
</script>

<template>
  <aside class="properties-panel">
    <div class="panel-header">
      <h2>Properties</h2>
    </div>
    <div class="panel-content">
      <div v-if="!hasNode" class="empty-state">
        <p>No component selected</p>
        <p class="hint">Select a component from the hierarchy to view its properties</p>
      </div>
      <div v-else class="properties-list">
        <div
          v-for="prop in properties"
          :key="prop.key"
          class="property-item"
        >
          <div class="property-key">{{ prop.key }}</div>
          <div class="property-value">{{ prop.value }}</div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.properties-panel {
  width: 300px;
  background-color: #f5f5f5;
  border-left: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.panel-header {
  padding: 0.75rem 1rem;
  background-color: #ecf0f1;
  border-bottom: 1px solid #bdc3c7;
}

.panel-header h2 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
}

.panel-content {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
}

.empty-state {
  text-align: center;
  padding: 2rem 1rem;
  color: #7f8c8d;
}

.empty-state p {
  margin: 0.5rem 0;
}

.empty-state .hint {
  font-size: 0.875rem;
}

.properties-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.property-item {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.75rem;
}

.property-key {
  font-weight: 600;
  font-size: 0.875rem;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.property-value {
  font-size: 0.875rem;
  color: #555;
  word-break: break-word;
  white-space: pre-wrap;
  font-family: 'Courier New', monospace;
  background-color: #f8f8f8;
  padding: 0.5rem;
  border-radius: 3px;
}
</style>
