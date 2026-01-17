<script setup lang="ts">
import { ref } from 'vue'
import HierarchyPanel from './components/HierarchyPanel.vue'
import ThreeViewer from './components/ThreeViewer.vue'
import PropertiesPanel from './components/PropertiesPanel.vue'
import type { URDFNode } from './types/urdf'

const selectedNode = ref<URDFNode | null>(null)
const urdfRoot = ref<URDFNode | null>(null)

const handleNodeSelect = (node: URDFNode) => {
  selectedNode.value = node
}

const handleUrdfLoad = (root: URDFNode) => {
  urdfRoot.value = root
  selectedNode.value = null
}

const handleUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      // Parse URDF content and create node structure
      // This will be implemented in ThreeViewer
      const fileData = { name: file.name, content }
      // Emit to ThreeViewer through a ref or event
    }
    reader.readAsText(file)
  }
}

const handleDownload = () => {
  if (!urdfRoot.value) return
  
  // Generate URDF XML from the node tree
  const urdfXml = generateURDF(urdfRoot.value)
  
  // Create blob and download
  const blob = new Blob([urdfXml], { type: 'application/xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${urdfRoot.value.name}.urdf`
  a.click()
  URL.revokeObjectURL(url)
}

const generateURDF = (node: URDFNode): string => {
  // Simple URDF generation from node tree
  let xml = '<?xml version="1.0"?>\n'
  xml += generateNodeXML(node, 0)
  return xml
}

const generateNodeXML = (node: URDFNode, indent: number): string => {
  const indentStr = '  '.repeat(indent)
  let xml = ''
  
  if (node.type === 'robot') {
    xml += `${indentStr}<robot name="${node.name}">\n`
    for (const child of node.children) {
      xml += generateNodeXML(child, indent + 1)
    }
    xml += `${indentStr}</robot>\n`
  } else if (node.type === 'link') {
    xml += `${indentStr}<link name="${node.name}">\n`
    for (const child of node.children) {
      xml += generateNodeXML(child, indent + 1)
    }
    xml += `${indentStr}</link>\n`
  } else if (node.type === 'joint') {
    xml += `${indentStr}<joint name="${node.name}" type="${node.properties?.type || 'fixed'}">\n`
    for (const child of node.children) {
      xml += generateNodeXML(child, indent + 1)
    }
    xml += `${indentStr}</joint>\n`
  }
  
  return xml
}
</script>

<template>
  <div class="urdf-editor">
    <header class="toolbar">
      <h1>URDF Editor</h1>
      <div class="toolbar-actions">
        <label for="file-upload" class="btn">Upload URDF</label>
        <input
          id="file-upload"
          type="file"
          accept=".urdf,.xml"
          @change="handleUpload"
          style="display: none"
        />
        <button class="btn" :disabled="!urdfRoot" @click="handleDownload">Download URDF</button>
      </div>
    </header>
    
    <div class="editor-container">
      <HierarchyPanel
        :root="urdfRoot"
        :selected="selectedNode"
        @select="handleNodeSelect"
      />
      
      <ThreeViewer
        class="main-viewer"
        @urdf-loaded="handleUrdfLoad"
      />
      
      <PropertiesPanel :node="selectedNode" />
    </div>
  </div>
</template>

<style scoped>
.urdf-editor {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #2c3e50;
  color: white;
  border-bottom: 1px solid #34495e;
}

.toolbar h1 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.toolbar-actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.btn:hover:not(:disabled) {
  background-color: #3aa876;
}

.btn:disabled {
  background-color: #7f8c8d;
  cursor: not-allowed;
}

.editor-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.main-viewer {
  flex: 1;
}
</style>
