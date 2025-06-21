<template>
  <div class="name-card-list">
    <div class="toolbar" style="width: 100%; text-align: center; margin-bottom: 1rem;">
      <button @click="handleBatchExport">批量导出所有PNG</button>
    </div>
    <div v-if="cardData.length === 0" class="placeholder">
      请先导入数据并选择"姓名"列
    </div>
    <NameCard 
      v-for="(card, index) in cardData"
      :key="index"
      :columns="activeColumns"
      :data="card"
      ref="nameCardRefs"
    />
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
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.placeholder {
  color: #888;
  font-size: 1.2rem;
  padding: 3rem;
}
</style> 