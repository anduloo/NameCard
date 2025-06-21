<template>
  <div class="config-panel">
    <!-- 模板选择器 -->
    <div class="config-card template-card">
      <div class="card-header">
        <h3 class="card-title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
          </svg>
          模板库
        </h3>
      </div>
      <div class="card-content">
        <div class="template-list">
          <div 
            v-for="template in templates" 
            :key="template.id"
            class="template-item"
            @click="applyTemplate(template.id)"
          >
            <span class="template-name">{{ template.name }}</span>
            <span class="template-desc">{{ template.description }}</span>
          </div>
        </div>
        <div class="template-actions">
          <button class="reset-btn" @click="resetToDefault">
            重置为默认
          </button>
        </div>
      </div>
    </div>

    <div class="config-card">
      <div class="card-header">
        <h3 class="card-title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
          </svg>
          全局设置
        </h3>
      </div>
      <div class="card-content">
        <GlobalSettings />
      </div>
    </div>

    <div class="config-card">
      <div class="card-header">
        <h3 class="card-title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-number"></use>
          </svg>
          号码列设置
        </h3>
      </div>
      <div class="card-content">
        <NumberSettings />
      </div>
    </div>

    <div class="config-card">
      <div class="card-header">
        <h3 class="card-title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-name"></use>
          </svg>
          姓名列设置
        </h3>
      </div>
      <div class="card-content">
        <NameSettings />
      </div>
    </div>

    <div class="config-card">
      <div class="card-header">
        <h3 class="card-title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-unit"></use>
          </svg>
          单位列设置
        </h3>
      </div>
      <div class="card-content">
        <UnitSettings />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStyleStore } from '@/stores/styleStore'
import { getAllTemplates, applyTemplate as applyTemplateUtil } from '@/config/templates'
import GlobalSettings from './GlobalSettings.vue'
import NumberSettings from './NumberSettings.vue'
import NameSettings from './NameSettings.vue'
import UnitSettings from './UnitSettings.vue'

const store = useStyleStore()

const templates = computed(() => getAllTemplates())

function applyTemplate(templateId) {
  const success = applyTemplateUtil(templateId, store)
  if (success) {
    // 显示成功提示
    showMessage('模板应用成功！')
  }
}

function resetToDefault() {
  store.resetToDefault()
  showMessage('已重置为默认配置')
}

function showMessage(message) {
  // 简单的消息提示
  alert(message)
}
</script>

<style scoped>
.config-panel {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.config-card {
  background: var(--secondary-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  overflow: hidden;
  transition: all 0.2s ease;
}

.config-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.card-header {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-color);
}

.card-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  width: 1.125rem;
  height: 1.125rem;
  fill: var(--accent-color);
}

.card-content {
  padding: 2px;
}

.template-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: var(--shadow-lg);
}

.template-card .card-header {
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.template-card .card-title {
  color: white;
}

.template-card .icon {
  fill: white;
}

.template-card .card-content {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  padding: 1rem;
}

.template-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.template-item {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.template-item:hover {
  border-color: #007bff;
  background: #f8f9ff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
}

.template-name {
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.template-desc {
  font-size: 0.8rem;
  color: #6c757d;
  line-height: 1.3;
}

.template-actions {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
}

.reset-btn {
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.reset-btn:hover {
  background: #5a6268;
  transform: translateY(-1px);
}
</style> 