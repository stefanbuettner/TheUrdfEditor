<script setup lang="ts">
import { computed } from 'vue'
import type { URDFNode } from '../types/urdf'

interface Props {
  node: URDFNode
  selected: URDFNode | null
}

const props = defineProps<Props>()
const emit = defineEmits<{
  select: [node: URDFNode]
}>()

const isSelected = computed(() => props.selected === props.node)

const handleSelect = () => {
  emit('select', props.node)
}

const nodeIcon = computed(() => {
  switch (props.node.type) {
    case 'robot': return '🤖'
    case 'link': return '🔗'
    case 'joint': return '⚙️'
    default: return '📦'
  }
})
</script>

<template>
  <div class="tree-node">
    <div 
      class="node-label"
      :class="{ selected: isSelected }"
      @click="handleSelect"
    >
      <span class="node-icon">{{ nodeIcon }}</span>
      <span class="node-name">{{ node.name }}</span>
      <span class="node-type">[{{ node.type }}]</span>
    </div>
    <div v-if="node.children && node.children.length > 0" class="node-children">
      <TreeNode
        v-for="(child, index) in node.children"
        :key="index"
        :node="child"
        :selected="selected"
        @select="$emit('select', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.tree-node {
  margin-left: 0.5rem;
}

.node-label {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.node-label:hover {
  background-color: #e8e8e8;
}

.node-label.selected {
  background-color: #42b983;
  color: white;
}

.node-icon {
  margin-right: 0.5rem;
  font-size: 1rem;
}

.node-name {
  font-weight: 500;
  margin-right: 0.5rem;
}

.node-type {
  font-size: 0.75rem;
  color: #7f8c8d;
  font-style: italic;
}

.node-label.selected .node-type {
  color: rgba(255, 255, 255, 0.8);
}

.node-children {
  margin-left: 1rem;
  border-left: 1px solid #ddd;
  padding-left: 0.5rem;
}
</style>
