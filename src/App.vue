<template>
  <div id="app-container">
    <main class="main-content">
      <div class="config-section">
        <div class="config-header">
          <h1 class="app-title">姓名卡片生成器</h1>
          <p class="app-subtitle">专业级卡片设计工具</p>
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
</script>

<style src="../web/iconfonts/iconfont.css"></style>