<template>
  <div class="modal-overlay" v-if="visible" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">&times;</button>
      <h4>数据预览</h4>
      <div class="table-wrapper">
        <table class="preview-table">
          <thead>
            <tr>
              <th v-for="(col, idx) in columns" :key="idx">{{ col }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rIdx) in data" :key="rIdx">
              <td v-for="(cell, cIdx) in row" :key="cIdx">{{ cell }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: Boolean,
  columns: Array,
  data: Array
})
defineEmits(['close'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}
.table-wrapper {
  overflow: auto;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
}
.preview-table {
  border-collapse: collapse;
  width: 100%;
}
.preview-table th, .preview-table td {
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
}
</style> 