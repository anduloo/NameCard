<template>
  <div class="data-importer">
    <h4>导入Excel数据</h4>
    <div class="import-controls">
      <input type="file" accept=".xlsx,.xls" @change="onFileChange" />
      <button v-if="tableData.length" @click="showModal = true">预览数据</button>
    </div>
    <div v-if="tableData.length">
      <div class="col-selectors">
        <label>
          号码列：
          <select v-model="colNumber">
            <option value="">无</option>
            <option v-for="(col, idx) in columns" :key="idx" :value="idx">{{ col }}</option>
          </select>
        </label>
        <label>
          姓名列：
          <select v-model="colName">
            <option value="">无</option>
            <option v-for="(col, idx) in columns" :key="idx" :value="idx">{{ col }}</option>
          </select>
        </label>
        <label>
          单位列：
          <select v-model="colUnit">
            <option value="">无</option>
            <option v-for="(col, idx) in columns" :key="idx" :value="idx">{{ col }}</option>
          </select>
        </label>
      </div>
    </div>
    <PreviewModal 
      :visible="showModal" 
      :columns="columns" 
      :data="tableData.slice(1)" 
      @close="showModal = false" 
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import * as XLSX from 'xlsx'
import { useDataStore } from '@/stores/dataStore'
import PreviewModal from './PreviewModal.vue'

const tableData = ref([])
const columns = ref([])
const colNumber = ref('')
const colName = ref('')
const colUnit = ref('')
const showModal = ref(false)

const store = useDataStore()

function isLikelyHeader(row) {
  if (!row) return false
  let strCount = 0
  for (let cell of row) {
    if (typeof cell === 'string' && /[a-zA-Z\u4e00-\u9fa5]/.test(cell)) strCount++
  }
  return strCount >= Math.max(1, row.length / 2)
}

function genColHeaders(len) {
  const headers = []
  for (let i = 0; i < len; i++) {
    let s = '', n = i
    do {
      s = String.fromCharCode(65 + (n % 26)) + s
      n = Math.floor(n / 26) - 1
    } while (n >= 0)
    headers.push(s)
  }
  return headers
}

function fillEmptyHeaders(headerRow, maxLen) {
  const autoHeaders = genColHeaders(maxLen)
  const filled = []
  for (let i = 0; i < maxLen; i++) {
    const cell = headerRow[i]
    filled.push(cell === undefined || cell === null || cell === '' ? autoHeaders[i] : cell)
  }
  return filled
}

function onFileChange(e) {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (evt) => {
    const data = new Uint8Array(evt.target.result)
    const workbook = XLSX.read(data, { type: 'array' })
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    let arr = XLSX.utils.sheet_to_json(sheet, { header: 1 })
    if (!arr.length) return
    arr = arr.filter(row => Array.isArray(row) && row.some(cell => cell !== undefined && cell !== null && cell !== ''))
    const maxLen = Math.max(...arr.map(row => row.length))
    arr = arr.map(row => {
      const r = Array.from(row)
      while (r.length < maxLen) r.push('')
      return r
    })
    if (!isLikelyHeader(arr[0])) {
      const headers = genColHeaders(maxLen)
      arr = [headers, ...arr]
    } else {
      arr[0] = fillEmptyHeaders(arr[0], maxLen)
    }
    tableData.value = arr
    columns.value = arr[0] || []
    colNumber.value = ''
    colName.value = ''
    colUnit.value = ''
  }
  reader.readAsArrayBuffer(file)
}

watch([tableData, colNumber, colName, colUnit], () => {
  store.setData({
    table: tableData.value,
    columns: columns.value,
    colNumber: colNumber.value,
    colName: colName.value,
    colUnit: colUnit.value
  })
})
</script>

<style scoped>
.data-importer {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}
.import-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.col-selectors {
  display: flex;
  gap: 1.5rem;
}
</style> 