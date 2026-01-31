<script setup lang="ts">
import { computed, ref } from 'vue'
import TreeNode from './TreeNode.vue'
import type { URDFNode } from '../types/urdf'

interface Props {
  root: URDFNode | null
  selected: URDFNode | null
}

const props = defineProps<Props>()
const emit = defineEmits<{
  select: [node: URDFNode]
}>()

const hasNodes = computed(() => props.root !== null)

const expandAllTrigger = ref<number>(0)
const collapseAllTrigger = ref<number>(0)

const selectNode = (node: URDFNode) => {
  emit('select', node)
}

const expandAll = () => {
  expandAllTrigger.value++
}

const collapseAll = () => {
  collapseAllTrigger.value++
}
</script>

<template>
  <aside class="hierarchy-panel">
    <div class="panel-header">
      <h2>Hierarchy</h2>
      <div v-if="hasNodes" class="header-actions">
        <button 
          class="action-button" 
          @click="expandAll"
          title="Expand all nodes"
        >
          ⊞
        </button>
        <button 
          class="action-button" 
          @click="collapseAll"
          title="Collapse all nodes"
        >
          ⊟
        </button>
      </div>
    </div>
    <div class="panel-content">
      <div v-if="!hasNodes" class="empty-state">
        <p>No model loaded</p>
        <p class="hint">Upload a URDF file to get started</p>
      </div>
      <div v-else class="tree">
        <TreeNode
          v-if="root"
          :node="root"
          :selected="selected"
          :expand-all="expandAllTrigger"
          :collapse-all="collapseAllTrigger"
          :is-root="true"
          @select="selectNode"
        />
      </div>
    </div>
  </aside>
</template>

<style scoped>
.hierarchy-panel {
  width: 250px;
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.panel-header {
  padding: 0.75rem 1rem;
  background-color: #ecf0f1;
  border-bottom: 1px solid #bdc3c7;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.panel-header h2 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
}

.header-actions {
  display: flex;
  gap: 0.25rem;
}

.action-button {
  background: none;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  color: #2c3e50;
  transition: all 0.2s;
}

.action-button:hover {
  background-color: #d5dbdb;
  border-color: #95a5a6;
}

.action-button:active {
  background-color: #bdc3c7;
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

.tree {
  font-size: 0.875rem;
}
</style>
