import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDataStore = defineStore('data', () => {
  const table = ref([])
  const columns = ref([])
  const colNumber = ref('')
  const colName = ref('')
  const colUnit = ref('')

  function setData({ table: t, columns: c, colNumber: n, colName: m, colUnit: u }) {
    table.value = t
    columns.value = c || []
    colNumber.value = n
    colName.value = m
    colUnit.value = u
  }

  return { table, columns, colNumber, colName, colUnit, setData }
}) 