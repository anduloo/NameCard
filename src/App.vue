<template>
  <div id="app-container">
    <main class="main-content">
      <div class="config-section">
        <div class="config-header">
          <h1 class="app-title">姓名卡片生成器</h1>
          <p class="app-subtitle">Vue重构版 - 专业级卡片设计工具</p>
        </div>
        <div class="config-content">
          <DataImporter />
          <ConfigPanel />
        </div>
      </div>
      <div class="preview-section">
        <NameCardList />
      </div>
    </main>
  </div>
</template>

<script setup>
import DataImporter from './components/DataImporter.vue'
import ConfigPanel from './components/ConfigPanel.vue'
import NameCardList from './components/NameCardList.vue'
import { useStyleStore } from '@/stores/styleStore'
</script>

<style src="../web/iconfonts/iconfont.css"></style>

<style>
/* Global styles */
:root {
  --primary-bg: #f8fafc;
  --secondary-bg: #ffffff;
  --text-color: #1e293b;
  --text-muted: #64748b;
  --border-color: #e2e8f0;
  --accent-color: #3b82f6;
  --accent-hover: #2563eb;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --radius: 8px;
  --radius-lg: 12px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: var(--text-color);
  min-height: 100vh;
}

#app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: var(--primary-bg);
}

.main-content {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  background: var(--primary-bg);
}

.config-section {
  width: 480px;
  flex-shrink: 0;
  background: var(--secondary-bg);
  border-right: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.config-header {
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-hover) 100%);
  color: white;
  padding: 1.5rem;
  text-align: center;
  box-shadow: var(--shadow-md);
}

.app-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.app-subtitle {
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
  font-weight: 400;
}

.config-content {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  background: var(--secondary-bg);
}

.preview-section {
  flex-grow: 1;
  padding: 2rem;
  overflow-y: auto;
  background: var(--primary-bg);
  position: relative;
}

.preview-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

/* 滚动条美化 */
.config-content::-webkit-scrollbar,
.preview-section::-webkit-scrollbar {
  width: 6px;
}

.config-content::-webkit-scrollbar-track,
.preview-section::-webkit-scrollbar-track {
  background: transparent;
}

.config-content::-webkit-scrollbar-thumb,
.preview-section::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.config-content::-webkit-scrollbar-thumb:hover,
.preview-section::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style> 