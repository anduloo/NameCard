<template>
  <div class="name-card-list">
    <div class="toolbar">
      <div class="toolbar-content">
        <div class="toolbar-left">
          <h2 class="preview-title">卡片预览</h2>
          <span v-if="cardData.length > 0" class="card-count">{{ cardData.length }} 张卡片</span>
        </div>
        <div class="toolbar-right">
          <button @click="handleBatchExport" class="export-btn">
            批量导出
          </button>
        </div>
      </div>
    </div>
    
    <div v-if="cardData.length === 0" class="empty-state">
      <div class="empty-content">
        <svg class="empty-icon" aria-hidden="true">
          <use xlink:href="#icon-empty"></use>
        </svg>
        <h3 class="empty-title">暂无卡片</h3>
        <p class="empty-description">请先导入数据并选择"姓名"列来生成卡片</p>
      </div>
    </div>
    
    <div v-else class="cards-container">
      <NameCard 
        v-for="(card, index) in cardData"
        :key="index"
        :columns="activeColumns"
        :data="card"
        ref="nameCardRefs"
      />
    </div>
  </div>
  
  <!-- Hidden exporter component -->
  <div style="position: absolute; left: -9999px; top: -9999px;">
    <NameCard 
      ref="exporterRef"
      :columns="activeColumns"
      :data="exportingData"
    />
  </div>
</template>

<script setup>
import { computed, watch, ref, nextTick } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import NameCard from './NameCard.vue'

const store = useDataStore()

const exporterRef = ref(null);
const exportingData = ref({});

async function handleBatchExport() {
  if (!exporterRef.value) {
    alert("导出组件尚未准备好，请稍后再试。");
    return;
  }
  if (cardData.value.length === 0) {
    alert("没有可导出的数据。");
    return;
  }

  alert(`即将开始批量导出，共 ${cardData.value.length} 个文件。请在浏览器弹窗中允许多文件下载。`);

  for (const item of cardData.value) {
    exportingData.value = item;
    await nextTick(); // Wait for the hidden component to update
    
    // Construct the file name just like in the single-export component
    const fileNameParts = activeColumns.value.map(c => item[c]).filter(Boolean);
    const fileName = fileNameParts.length > 0 ? fileNameParts.join('_') + '.png' : 'namecard.png';

    try {
      await exporterRef.value.exportAsPng(fileName);
      // Add a small delay between downloads to avoid browser issues
      await new Promise(resolve => setTimeout(resolve, 300));
    } catch (err) {
      console.error(`导出项目 ${item.name || ''} 失败:`, err);
      if (!confirm(`导出项目 ${item.name || ''} 失败，是否继续批量导出？`)) {
        break; // Stop the batch export if the user cancels
      }
    }
  }

  alert("批量导出完成！");
}

const getIndex = v => v === '' ? null : Number(v)

const validKeys = ['number', 'name', 'unit']
const activeColumns = computed(() => {
  const cols = []
  if (getIndex(store.colNumber) !== null) cols.push('number')
  if (getIndex(store.colName) !== null) cols.push('name')
  if (getIndex(store.colUnit) !== null) cols.push('unit')
  return cols.filter(c => validKeys.includes(c))
})

const cardData = computed(() => {
  if (!store.table || store.table.length < 2 || !activeColumns.value.length) {
    return []
  }
  const dataRows = store.table.slice(1)
  return dataRows.map(row => {
    const obj = {}
    if (getIndex(store.colNumber) !== null) obj.number = row[getIndex(store.colNumber)] || ''
    if (getIndex(store.colName) !== null) obj.name = row[getIndex(store.colName)] || ''
    if (getIndex(store.colUnit) !== null) obj.unit = row[getIndex(store.colUnit)] || ''
    return obj
  })
})

watch([activeColumns, cardData], () => {
  console.log('activeColumns:', activeColumns.value)
  console.log('cardData:', cardData.value)
})

const nameCardRefs = ref([])
</script>

<style scoped>
.name-card-list {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.toolbar {
  background: var(--secondary-bg);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 10;
}

.toolbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background:linear-gradient(135deg, white 0%, #f0f9ff 100%)
}

.toolbar-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.preview-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
}

.card-count {
  font-size: 0.875rem;
  color: var(--text-muted);
  background: var(--primary-bg);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
  font-weight: 500;
}

.toolbar-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.export-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
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

.export-btn:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
  background: var(--primary-bg);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.export-btn:active {
  transform: translateY(0);
}

.btn-icon {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
}

.empty-state {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

.empty-content {
  text-align: center;
  max-width: 400px;
}

.empty-icon {
  width: 4rem;
  height: 4rem;
  fill: var(--text-muted);
  opacity: 0.5;
  margin-bottom: 1rem;
}

.empty-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
}

.empty-description {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.cards-container {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-content: flex-start;
  overflow-y: auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .toolbar-content {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .toolbar-left {
    justify-content: center;
  }
  
  .toolbar-right {
    justify-content: center;
  }
  
  .cards-container {
    padding: 1rem;
    gap: 0.75rem;
  }
}
</style> 