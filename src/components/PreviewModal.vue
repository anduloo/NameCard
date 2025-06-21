<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <h3 class="modal-title">
          <svg class="modal-icon" aria-hidden="true">
            <use xlink:href="#icon-table"></use>
          </svg>
          数据预览
        </h3>
        <button class="close-btn" @click="$emit('close')" title="关闭">
          <svg class="close-icon" aria-hidden="true">
            <use xlink:href="#icon-close"></use>
          </svg>
        </button>
      </div>
      
      <div class="modal-content">
        <div class="data-info">
          <div class="info-item">
            <span class="info-label">总行数：</span>
            <span class="info-value">{{ data.length }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">总列数：</span>
            <span class="info-value">{{ columns.length }}</span>
          </div>
        </div>
        
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th v-for="(col, index) in columns" :key="index" class="table-header">
                  <div class="header-content">
                    <span class="header-text">{{ col }}</span>
                    <span class="column-index">列 {{ index + 1 }}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, rowIndex) in data" :key="rowIndex" class="table-row">
                <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="table-cell">
                  {{ cell || '-' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="pagination-info">
          <span>显示全部 {{ data.length }} 行数据</span>
        </div>
      </div>
      
      <div class="modal-footer">
        <button class="btn btn-secondary" @click="$emit('close')">关闭</button>
        <button class="btn btn-primary" @click="handleConfirm" :disabled="!hasValidData">
          确认使用此数据
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  columns: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['close', 'confirm'])

const hasValidData = computed(() => {
  return props.data && props.data.length > 0 && props.columns && props.columns.length > 0
})

function handleOverlayClick() {
  emit('close')
}

function handleConfirm() {
  if (hasValidData.value) {
    emit('confirm')
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal-container {
  background: var(--secondary-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 90vw;
  max-height: 90vh;
  width: 800px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.modal-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.modal-icon {
  width: 1.5rem;
  height: 1.5rem;
  fill: var(--accent-color);
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: var(--border-color);
}

.close-icon {
  width: 1.25rem;
  height: 1.25rem;
  fill: var(--text-muted);
}

.modal-content {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.data-info {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--primary-bg);
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}

.info-value {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-color);
}

.table-container {
  background: var(--secondary-bg);
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
  overflow: hidden;
  margin-bottom: 1rem;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.table-header {
  background: var(--primary-bg);
  border-bottom: 2px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem;
}

.header-text {
  font-weight: 600;
  color: var(--text-color);
  font-size: 0.875rem;
}

.column-index {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 400;
}

.table-row {
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.2s ease;
}

.table-row:hover {
  background: var(--primary-bg);
}

.table-cell {
  padding: 0.75rem;
  text-align: left;
  color: var(--text-color);
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pagination-info {
  text-align: center;
  padding: 1rem;
  color: var(--text-muted);
  font-size: 0.875rem;
  background: var(--primary-bg);
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid var(--border-color);
  background: var(--primary-bg);
}

.btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secondary {
  background: var(--border-color);
  color: var(--text-color);
}

.btn-secondary:hover:not(:disabled) {
  background: #cbd5e1;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-hover) 100%);
  color: white;
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

/* 滚动条美化 */
.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-track {
  background: transparent;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .modal-container {
    width: 95vw;
    max-height: 95vh;
  }
  
  .modal-header {
    padding: 1rem;
  }
  
  .modal-content {
    padding: 1rem;
  }
  
  .modal-footer {
    padding: 1rem;
    flex-direction: column;
  }
  
  .data-info {
    flex-direction: column;
    gap: 1rem;
  }
  
  .table-cell {
    max-width: 120px;
    font-size: 0.75rem;
    padding: 0.5rem;
  }
}
</style> 