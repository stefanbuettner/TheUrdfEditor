<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import HierarchyPanel from './components/HierarchyPanel.vue'
import ThreeViewer from './components/ThreeViewer.vue'
import PropertiesPanel from './components/PropertiesPanel.vue'
import type { URDFNode } from './types/urdf'

const selectedNode = ref<URDFNode | null>(null)
const urdfRoot = ref<URDFNode | null>(null)
const showUploadMenu = ref(false)
const showUrlDialog = ref(false)
const urlInput = ref('')
const packagePathInput = ref('')
const threeViewerRef = ref<InstanceType<typeof ThreeViewer> | null>(null)

const handleNodeSelect = (node: URDFNode) => {
  // Toggle selection: if clicking the same node, deselect it
  if (selectedNode.value === node) {
    selectedNode.value = null
  } else {
    selectedNode.value = node
  }
}

const handle3DNodeSelect = (node: URDFNode | null) => {
  selectedNode.value = node
}

const handleUrdfLoad = (root: URDFNode) => {
  urdfRoot.value = root
  selectedNode.value = null
}

const toggleUploadMenu = () => {
  showUploadMenu.value = !showUploadMenu.value
}

const closeUploadMenu = () => {
  showUploadMenu.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.upload-dropdown')) {
    closeUploadMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleUploadFromLocal = () => {
  closeUploadMenu()
  // Trigger file input click
  const fileInput = document.getElementById('file-upload') as HTMLInputElement
  fileInput?.click()
}

const handleUploadFromUrl = () => {
  closeUploadMenu()
  showUrlDialog.value = true
}

const cancelUrlDialog = () => {
  showUrlDialog.value = false
  clearUrlInputs()
}

const clearUrlInputs = () => {
  urlInput.value = ''
  packagePathInput.value = ''
}

const loadFromUrl = async () => {
  if (!urlInput.value.trim()) return
  
  try {
    const response = await fetch(urlInput.value)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const content = await response.text()
    
    // Extract filename from URL
    const urlParts = urlInput.value.split('/')
    const filename = urlParts[urlParts.length - 1] || 'loaded_from_url.urdf'
    
    // Determine package path: use provided value or default to URDF's folder
    let packagePath = packagePathInput.value.trim()
    if (!packagePath) {
      // Default to the URDF's folder (everything before the filename)
      packagePath = urlInput.value.substring(0, urlInput.value.lastIndexOf('/') + 1)
    }
    
    // Load URDF content with package path
    if (threeViewerRef.value) {
      threeViewerRef.value.loadURDFContent(content, filename, packagePath)
    }
    
    showUrlDialog.value = false
    clearUrlInputs()
  } catch (error) {
    console.error('Error loading URDF from URL:', error)
    alert(`Failed to load URDF from URL: ${error}`)
    showUrlDialog.value = false
    clearUrlInputs()
  }
}

const handleUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      if (threeViewerRef.value) {
        try {
          // For local files, no package path is provided
          threeViewerRef.value.loadURDFContent(content, file.name, '')
        } catch (error) {
          console.error('Error loading URDF:', error)
          alert(`Failed to load URDF: ${error}`)
        }
      }
    }
    reader.readAsText(file)
  }
}

const handleDownload = () => {
  if (!urdfRoot.value) return
  
  // Generate URDF XML from the node tree
  const urdfXml = generateURDF(urdfRoot.value)
  
  // Create blob and download - iOS-compatible implementation
  const blob = new Blob([urdfXml], { type: 'application/xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${urdfRoot.value.name}.urdf`
  
  // Try to append to body for better iOS compatibility, with fallback
  try {
    if (document.body) {
      if (a.style) {
        a.style.display = 'none'
      }
      document.body.appendChild(a)
      a.click()
      
      // Clean up with delay to ensure download starts
      setTimeout(() => {
        try {
          if (document.body && document.body.contains(a)) {
            document.body.removeChild(a)
          }
        } catch (e) {
          // Ignore cleanup errors
        }
        URL.revokeObjectURL(url)
      }, 100)
    } else {
      // Fallback when document.body is not available
      a.click()
      setTimeout(() => {
        URL.revokeObjectURL(url)
      }, 100)
    }
  } catch (e) {
    // Fallback for environments that don't support appendChild (e.g., some test environments)
    a.click()
    setTimeout(() => {
      URL.revokeObjectURL(url)
    }, 100)
  }
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
        <div class="upload-dropdown">
          <button class="btn upload-btn" @click="toggleUploadMenu">
            Upload URDF
            <span class="dropdown-arrow">▼</span>
          </button>
          <div v-if="showUploadMenu" class="dropdown-menu">
            <button @click="handleUploadFromLocal" class="dropdown-item">
              📁 From Local File
            </button>
            <button @click="handleUploadFromUrl" class="dropdown-item">
              🌐 From URL
            </button>
          </div>
        </div>
        <input
          id="file-upload"
          type="file"
          accept=".urdf,.xml,application/xml,text/xml"
          @change="handleUpload"
          style="display: none"
        />
        <button class="btn" :disabled="true" @click="handleDownload">Download URDF</button>
      </div>
    </header>
    
    <div class="editor-container">
      <HierarchyPanel
        :root="urdfRoot"
        :selected="selectedNode"
        @select="handleNodeSelect"
      />
      
      <ThreeViewer
        ref="threeViewerRef"
        class="main-viewer"
        :selected-node="selectedNode"
        @urdf-loaded="handleUrdfLoad"
        @node-selected="handle3DNodeSelect"
      />
      
      <PropertiesPanel :node="selectedNode" />
    </div>

    <!-- URL Dialog -->
    <div v-if="showUrlDialog" class="modal-overlay" @click="cancelUrlDialog">
      <div class="modal-dialog" @click.stop>
        <h3>Load URDF from URL</h3>
        <input 
          v-model="urlInput" 
          type="text" 
          placeholder="Enter URDF file URL"
          class="url-input"
          @keyup.enter="loadFromUrl"
        />
        <input 
          v-model="packagePathInput" 
          type="text" 
          placeholder="Package path URL (optional - defaults to URDF folder)"
          class="url-input"
          @keyup.enter="loadFromUrl"
        />
        <div class="modal-help-text">
          Package path is used to resolve package:// mesh references.
          Leave empty to use the URDF's folder as the default.
        </div>
        <div class="modal-actions">
          <button class="btn btn-secondary" @click="cancelUrlDialog">Cancel</button>
          <button class="btn" @click="loadFromUrl">Load</button>
        </div>
      </div>
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
  align-items: center;
}

.upload-dropdown {
  position: relative;
}

.upload-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-arrow {
  font-size: 0.7rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.25rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  z-index: 1000;
}

.dropdown-item {
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.875rem;
  color: #2c3e50;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.dropdown-item:first-child {
  border-radius: 4px 4px 0 0;
}

.dropdown-item:last-child {
  border-radius: 0 0 4px 4px;
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

.btn-secondary {
  background-color: #95a5a6;
}

.btn-secondary:hover {
  background-color: #7f8c8d;
}

.editor-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.main-viewer {
  flex: 1;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-dialog {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  min-width: 400px;
  max-width: 90vw;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.modal-dialog h3 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
  font-size: 1.25rem;
}

.url-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
}

.url-input:focus {
  outline: none;
  border-color: #42b983;
}

.modal-help-text {
  font-size: 0.75rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.modal-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}
</style>
