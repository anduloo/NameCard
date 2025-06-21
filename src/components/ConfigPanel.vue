<template>
  <div class="config-panel">
    <GlobalSettings />
    <NumberSettings />
    <NameSettings />
    <UnitSettings />
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
  gap: 0
}
</style> 