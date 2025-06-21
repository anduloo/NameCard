<template>
  <div id="app-container">
    <header class="app-header">
      <h1>姓名卡片生成器 - Vue重构版</h1>
    </header>
    <main class="main-content">
      <div class="config-section">
        <DataImporter />
        <ConfigPanel />
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
  --primary-bg: #f8f9fa;
  --secondary-bg: #ffffff;
  --text-color: #212529;
  --header-bg: #343a40;
  --header-color: #ffffff;
  --border-color: #dee2e6;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: var(--primary-bg);
  color: var(--text-color);
}

#app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-header {
  background-color: var(--header-bg);
  color: var(--header-color);
  padding: 1rem;
  text-align: center;
}

.main-content {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}

.config-section {
  width: 450px;
  flex-shrink: 0;
  background-color: var(--secondary-bg);
  border-right: 1px solid var(--border-color);
  padding: 1rem;
  overflow-y: auto;
}

.preview-section {
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: #e9ecef;
}
</style> 