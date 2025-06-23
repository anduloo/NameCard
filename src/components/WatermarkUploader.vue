<template>
  <div class="watermark-uploader">
    <div class="upload-area" 
         @drop.prevent="handleDrop"
         @dragover.prevent="isDragging = true"
         @dragleave.prevent="isDragging = false"
         :class="{ 'dragging': isDragging }">
      <input
        type="file"
        ref="fileInput"
        @change="handleFileChange"
        accept="image/*"
        class="file-input"
      />
      <div class="upload-content" @click="triggerFileInput">
        <p class="upload-text">点击或拖拽图片到此处</p>
        <p class="upload-hint">支持 JPG、PNG 格式</p>
      </div>
    </div>

    <div v-if="previewUrl" class="preview-section">
      <div class="preview-header">
        <h4>图片预览</h4>
        <button class="remove-btn" @click="removeImage">删除</button>
      </div>
      <div class="preview-container">
        <img :src="previewUrl" alt="预览图" class="preview-image" />
      </div>
      <div class="settings">
        <div class="setting-item">
          <label>不透明度</label>
          <input 
            type="range" 
            v-model="opacity" 
            min="0.1" 
            max="1" 
            step="0.1"
          />
          <span>{{ Math.round(opacity * 100) }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['update:watermark'])

const fileInput = ref(null)
const isDragging = ref(false)
const previewUrl = ref('')
const opacity = ref(0.3)

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    processImage(file)
  }
}

const handleDrop = (event) => {
  isDragging.value = false
  const file = event.dataTransfer.files[0]
  if (file && file.type.startsWith('image/')) {
    processImage(file)
  }
}

const processImage = (file) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    previewUrl.value = e.target.result
    emit('update:watermark', {
      image: e.target.result,
      opacity: opacity.value
    })
  }
  reader.readAsDataURL(file)
}

const removeImage = () => {
  previewUrl.value = ''
  emit('update:watermark', null)
}

// 监听不透明度变化
watch(opacity, (newValue) => {
  if (previewUrl.value) {
    emit('update:watermark', {
      image: previewUrl.value,
      opacity: newValue
    })
  }
})
</script>

<style scoped>
.watermark-uploader {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.upload-area {
  border: 2px dashed var(--border-color);
  border-radius: var(--radius);
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--primary-bg);
}

.upload-area:hover, .upload-area.dragging {
  border-color: var(--accent-color);
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.file-input {
  display: none;
}

.upload-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.upload-icon {
  width: 3rem;
  height: 3rem;
  fill: var(--text-muted);
}

.upload-text {
  font-size: 1rem;
  color: var(--text-color);
  margin: 0;
}

.upload-hint {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin: 0;
}

.preview-section {
  margin-top: 0.5rem;
  padding: 1rem;
  background: var(--primary-bg);
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.preview-header h4 {
  margin: 0;
  font-size: 1rem;
  color: var(--text-color);
}

.remove-btn {
  padding: 0.5rem 1rem;
  border: none;
  background: var(--secondary-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}

.remove-btn:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
  background: var(--primary-bg);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.preview-container {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: var(--radius);
  background: var(--secondary-bg);
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.settings {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.setting-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.setting-item label {
  min-width: 80px;
  font-size: 0.875rem;
  color: var(--text-color);
}

.setting-item input[type="range"] {
  flex: 1;
}

.setting-item span {
  min-width: 48px;
  font-size: 0.875rem;
  color: var(--text-muted);
}
</style> 