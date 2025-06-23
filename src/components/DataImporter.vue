<template>
  <div :class="styles.dataImporter">
    <div :class="styles.importerCard">
      
      <div :class="styles.uploadArea" @click="triggerFileInput" @drop="handleDrop" @dragover.prevent @dragenter.prevent>
        <input
          ref="fileInput"
          type="file"
          accept=".xlsx,.xls"
          @change="handleFileChange"
          style="display: none"
        />
        <div :class="styles.uploadContent">
          <svg :class="styles.uploadIcon" aria-hidden="true">
            <use xlink:href="#icon-upload"></use>
          </svg>
          <p :class="styles.uploadText">点击或拖拽Excel文件到此处</p>
          <p :class="styles.uploadHint">支持 .xlsx 和 .xls 格式</p>
        </div>
      </div>

      <div v-if="table && table.length > 0" :class="styles.dataConfig">
        <div :class="styles.configHeader">
          <h4>列配置</h4>
          <div :class="styles.configActions">
            <span :class="styles.dataInfo">{{ table.length - 1 }} 行数据</span>
            <button @click="showModal = true" :class="styles.previewBtn">
              预览数据
            </button>
          </div>
        </div>
        
        <div :class="styles.columnSelector">
          <div :class="styles.selectorGroup">
            <label :class="styles.selectorLabel">
              <svg :class="styles.icon" aria-hidden="true">
                <use xlink:href="#icon-number"></use>
              </svg>
              号码列
            </label>
            <select v-model="store.colNumber" :class="styles.selectorInput">
              <option value="">请选择</option>
              <option v-for="(col, index) in table[0]" :key="index" :value="index">{{ col }}</option>
            </select>
          </div>
          
          <div :class="styles.selectorGroup">
            <label :class="styles.selectorLabel">
              <svg :class="styles.icon" aria-hidden="true">
                <use xlink:href="#icon-name"></use>
              </svg>
              姓名列
            </label>
            <select v-model="store.colName" :class="styles.selectorInput">
              <option value="">请选择</option>
              <option v-for="(col, index) in table[0]" :key="index" :value="index">{{ col }}</option>
            </select>
          </div>
          
          <div :class="styles.selectorGroup">
            <label :class="styles.selectorLabel">
              <svg :class="styles.icon" aria-hidden="true">
                <use xlink:href="#icon-unit"></use>
              </svg>
              单位列
            </label>
            <select v-model="store.colUnit" :class="styles.selectorInput">
              <option value="">请选择</option>
              <option v-for="(col, index) in table[0]" :key="index" :value="index">{{ col }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 预览模态框 -->
    <PreviewModal 
      :visible="showModal" 
      :columns="table[0] || []" 
      :data="table.slice(1) || []" 
      @close="showModal = false"
      @confirm="handleConfirmPreview"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import PreviewModal from './PreviewModal.vue'
import * as XLSX from 'xlsx'
import styles from './DataImporter.module.css'

const store = useDataStore()
const fileInput = ref(null)
const table = ref([])
const showModal = ref(false)

function triggerFileInput() {
  fileInput.value.click()
}

function handleFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    processFile(file)
  }
}

function handleDrop(event) {
  event.preventDefault()
  const file = event.dataTransfer.files[0]
  if (file && (file.name.endsWith('.xlsx') || file.name.endsWith('.xls'))) {
    processFile(file)
  }
}

function processFile(file) {
  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const data = new Uint8Array(e.target.result)
      const workbook = XLSX.read(data, { type: 'array' })
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]
      
      // 使用自定义解析选项，确保保留换行符
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { 
        header: 1,
        raw: false, // 保持原始字符串格式，不转换为数字
        defval: '' // 空单元格的默认值
      })
      
      if (jsonData.length > 0) {
        table.value = jsonData
        store.table = jsonData
        store.colNumber = ''
        store.colName = ''
        store.colUnit = ''
      }
    } catch (error) {
      console.error('文件处理错误:', error)
      alert('文件处理失败，请检查文件格式是否正确。')
    }
  }
  reader.readAsArrayBuffer(file)
}

function handleConfirmPreview() {
  showModal.value = false
  // 可以在这里添加确认后的逻辑
}
</script>

<style scoped>
.data-importer {
  margin-bottom: 0.5rem;
}

.importer-card {
  background: var(--secondary-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.card-header {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  padding: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.card-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0;
}

.card-subtitle {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
  fill: var(--accent-color);
}

.upload-area {
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px dashed var(--border-color);
  margin: 0.5rem;
  border-radius: var(--radius);
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.upload-area:hover {
  border-color: var(--accent-color);
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.upload-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.upload-icon {
  width: 3rem;
  height: 3rem;
  fill: var(--accent-color);
  opacity: 0.7;
}

.upload-text {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
}

.upload-hint {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.data-config {
  padding: 1.25rem;
  border-top: 1px solid var(--border-color);
}

.config-header {
   display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.config-header h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
}

.config-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.data-info {
  font-size: 0.875rem;
  color: var(--text-muted);
  background: var(--primary-bg);
  padding: 0.25rem 0.1rem;
  border-radius: var(--radius);
}

.preview-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-hover) 100%);
  color: white;
  border: none;
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}

.preview-btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-icon {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
}

.column-selector {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.selector-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.selector-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.selector-input {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  font-size: 0.875rem;
  background: var(--secondary-bg);
  color: var(--text-color);
  transition: all 0.2s ease;
}

.selector-input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
</style> 