<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

interface ConsoleLog {
  id: number
  timestamp: Date
  type: 'log' | 'warn' | 'error' | 'info'
  message: string
}

const logs = ref<ConsoleLog[]>([])
const isCollapsed = ref(true)
const autoScroll = ref(true)
const logsContainer = ref<HTMLElement | null>(null)
let logIdCounter = 0

// Store original console methods
const originalConsole = {
  log: console.log,
  warn: console.warn,
  error: console.error,
  info: console.info
}

const addLog = (type: ConsoleLog['type'], args: any[]) => {
  const message = args.map(arg => {
    if (typeof arg === 'object') {
      try {
        return JSON.stringify(arg, null, 2)
      } catch {
        return String(arg)
      }
    }
    return String(arg)
  }).join(' ')

  logs.value.push({
    id: logIdCounter++,
    timestamp: new Date(),
    type,
    message
  })

  // Auto-scroll if enabled
  if (autoScroll.value && !isCollapsed.value) {
    nextTick(() => {
      if (logsContainer.value) {
        logsContainer.value.scrollTop = logsContainer.value.scrollHeight
      }
    })
  }
}

const interceptConsole = () => {
  console.log = (...args: any[]) => {
    originalConsole.log(...args)
    addLog('log', args)
  }

  console.warn = (...args: any[]) => {
    originalConsole.warn(...args)
    addLog('warn', args)
  }

  console.error = (...args: any[]) => {
    originalConsole.error(...args)
    addLog('error', args)
  }

  console.info = (...args: any[]) => {
    originalConsole.info(...args)
    addLog('info', args)
  }
}

const restoreConsole = () => {
  console.log = originalConsole.log
  console.warn = originalConsole.warn
  console.error = originalConsole.error
  console.info = originalConsole.info
}

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  if (!isCollapsed.value && autoScroll.value) {
    nextTick(() => {
      if (logsContainer.value) {
        logsContainer.value.scrollTop = logsContainer.value.scrollHeight
      }
    })
  }
}

const toggleAutoScroll = () => {
  autoScroll.value = !autoScroll.value
  if (autoScroll.value && logsContainer.value) {
    logsContainer.value.scrollTop = logsContainer.value.scrollHeight
  }
}

const clearLogs = () => {
  logs.value = []
}

const formatTime = (date: Date) => {
  const timeStr = date.toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit'
  })
  const ms = date.getMilliseconds().toString().padStart(3, '0')
  return `${timeStr}.${ms}`
}

const getLogClass = (type: ConsoleLog['type']) => {
  return `log-entry log-${type}`
}

onMounted(() => {
  interceptConsole()
})

onBeforeUnmount(() => {
  restoreConsole()
})
</script>

<template>
  <div class="console-panel" :class="{ collapsed: isCollapsed }">
    <div class="console-header" @click="toggleCollapse">
      <span class="console-title">
        <span class="collapse-icon">{{ isCollapsed ? '▲' : '▼' }}</span>
        Console Logs ({{ logs.length }})
      </span>
      <div class="console-actions" @click.stop>
        <button 
          class="console-btn" 
          :class="{ active: autoScroll }"
          @click="toggleAutoScroll"
          :title="autoScroll ? 'Disable auto-scroll' : 'Enable auto-scroll'"
        >
          {{ autoScroll ? '📌' : '📍' }} Auto-scroll
        </button>
        <button class="console-btn" @click="clearLogs" title="Clear logs">
          🗑️ Clear
        </button>
      </div>
    </div>
    
    <div v-if="!isCollapsed" class="console-content" ref="logsContainer">
      <div v-if="logs.length === 0" class="no-logs">
        No console logs yet
      </div>
      <div
        v-for="log in logs"
        :key="log.id"
        :class="getLogClass(log.type)"
      >
        <span class="log-time">{{ formatTime(log.timestamp) }}</span>
        <span class="log-type">{{ log.type.toUpperCase() }}</span>
        <span class="log-message">{{ log.message }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.console-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #1e1e1e;
  border-top: 2px solid #333;
  z-index: 1000;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  transition: height 0.3s ease;
}

.console-panel.collapsed {
  height: 36px;
}

.console-panel:not(.collapsed) {
  height: 300px;
  display: flex;
  flex-direction: column;
}

.console-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: #2d2d2d;
  cursor: pointer;
  user-select: none;
  min-height: 36px;
  box-sizing: border-box;
}

.console-header:hover {
  background-color: #333;
}

.console-title {
  color: #cccccc;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
}

.collapse-icon {
  font-size: 10px;
}

.console-actions {
  display: flex;
  gap: 8px;
}

.console-btn {
  background-color: #3c3c3c;
  color: #cccccc;
  border: 1px solid #555;
  border-radius: 3px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 11px;
  transition: background-color 0.2s;
}

.console-btn:hover {
  background-color: #4a4a4a;
}

.console-btn.active {
  background-color: #007acc;
  border-color: #007acc;
}

.console-content {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
  background-color: #1e1e1e;
  color: #cccccc;
}

.no-logs {
  color: #888;
  text-align: center;
  padding: 20px;
}

.log-entry {
  display: flex;
  gap: 8px;
  padding: 4px 0;
  border-bottom: 1px solid #2d2d2d;
  line-height: 1.4;
}

.log-time {
  color: #858585;
  min-width: 90px;
}

.log-type {
  min-width: 50px;
  font-weight: bold;
}

.log-message {
  flex: 1;
  word-break: break-word;
  white-space: pre-wrap;
}

.log-log .log-type {
  color: #4ec9b0;
}

.log-warn .log-type {
  color: #dcdcaa;
}

.log-error .log-type {
  color: #f48771;
}

.log-info .log-type {
  color: #4fc1ff;
}

.log-error .log-message {
  color: #f48771;
}

.log-warn .log-message {
  color: #dcdcaa;
}

/* Custom scrollbar */
.console-content::-webkit-scrollbar {
  width: 10px;
}

.console-content::-webkit-scrollbar-track {
  background: #1e1e1e;
}

.console-content::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 5px;
}

.console-content::-webkit-scrollbar-thumb:hover {
  background: #666;
}
</style>
