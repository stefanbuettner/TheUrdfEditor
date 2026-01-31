<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { URDFNode } from '../types/urdf'

interface Props {
  node: URDFNode
  selected: URDFNode | null
  expandAll?: number
  collapseAll?: number
  isRoot?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  select: [node: URDFNode]
}>()

const expanded = ref(true)

// Watch for expand/collapse all events
watch(() => props.expandAll, (newVal) => {
  if (newVal !== undefined && newVal > 0) {
    expanded.value = true
  }
})

watch(() => props.collapseAll, (newVal) => {
  if (newVal !== undefined && newVal > 0) {
    // Keep root expanded, collapse everything else
    if (props.isRoot) {
      expanded.value = true
    } else {
      expanded.value = false
    }
  }
})

const isSelected = computed(() => props.selected === props.node)

const hasChildren = computed(() => 
  props.node.children && props.node.children.length > 0
)

const handleSelect = () => {
  emit('select', props.node)
}

const toggleExpand = (event: Event) => {
  event.stopPropagation()
  expanded.value = !expanded.value
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
      <button 
        v-if="hasChildren"
        class="expand-button"
        @click="toggleExpand"
        :aria-label="expanded ? 'Collapse' : 'Expand'"
      >
        {{ expanded ? '▼' : '▶' }}
      </button>
      <span v-else class="node-spacer"></span>
      <span class="node-icon">{{ nodeIcon }}</span>
      <span class="node-name">{{ node.name }}</span>
      <span class="node-type">[{{ node.type }}]</span>
    </div>
    <div v-if="hasChildren && expanded" class="node-children">
      <TreeNode
        v-for="(child, index) in node.children"
        :key="index"
        :node="child"
        :selected="selected"
        :expand-all="expandAll"
        :collapse-all="collapseAll"
        :is-root="false"
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
  min-width: max-content;
}

.node-label:hover {
  background-color: #e8e8e8;
}

.node-label.selected {
  background-color: #42b983;
  color: white;
}

.expand-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 0.25rem;
  font-size: 0.75rem;
  color: #666;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

.expand-button:hover {
  color: #000;
}

.node-label.selected .expand-button {
  color: rgba(255, 255, 255, 0.8);
}

.node-label.selected .expand-button:hover {
  color: #ffffff;
}

.node-spacer {
  width: 1rem;
  margin-right: 0.25rem;
}

.node-icon {
  margin-right: 0.5rem;
  font-size: 1rem;
}

.node-name {
  font-weight: 500;
  color: #000000;
  margin-right: 0.5rem;
}

.node-label.selected .node-name {
  color: #ffffff;
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
