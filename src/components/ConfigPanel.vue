<template>
  <div class="config-panel">
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
import GlobalSettings from './GlobalSettings.vue'
import NumberSettings from './NumberSettings.vue'
import NameSettings from './NameSettings.vue'
import UnitSettings from './UnitSettings.vue'
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
</style> 