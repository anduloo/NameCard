<template>
  <div :class="styles.configPanel">
    <!-- 模板选择器 -->
    <div :class="styles.configCard">
      <div :class="[styles.cardHeader, styles.clickable]" @click="showTemplateLibrary = !showTemplateLibrary">
        <h3 :class="styles.cardTitle">
          <svg :class="styles.icon" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
          </svg>
          模板库
        </h3>
      </div>
      <div v-if="showTemplateLibrary" :class="styles.cardContent">
        <div :class="styles.templateList">
          <div 
            v-for="(template, id) in templates" 
            :key="id"
            :class="styles.templateItem"
            @click="applyTemplate(id)"
          >
            <span :class="styles.templateName">{{ template.name }}</span>
            <span :class="styles.templateDesc">{{ template.description }}</span>
          </div>
        </div>
        <div :class="styles.templateActions">
          <button :class="styles.resetBtn" @click="resetToDefault">
            重置为默认
          </button>
        </div>
      </div>
    </div>

    <div :class="styles.configCard">
      <div :class="styles.cardHeader">
        <h3 :class="styles.cardTitle">
          <svg :class="styles.icon" aria-hidden="true">
            <use xlink:href="#icon-settings"></use>
          </svg>
          全局设置
        </h3>
      </div>
      <div :class="styles.cardContent">
        <GlobalSettings />
      </div>
    </div>

    <div :class="styles.configCard">
      <div :class="styles.cardHeader">
        <h3 :class="styles.cardTitle">
          <svg :class="styles.icon" aria-hidden="true">
            <use xlink:href="#icon-number"></use>
          </svg>
          号码列设置
        </h3>
      </div>
      <div :class="styles.cardContent">
        <NumberSettings />
      </div>
    </div>

    <div :class="styles.configCard">
      <div :class="styles.cardHeader">
        <h3 :class="styles.cardTitle">
          <svg :class="styles.icon" aria-hidden="true">
            <use xlink:href="#icon-name"></use>
          </svg>
          姓名列设置
        </h3>
      </div>
      <div :class="styles.cardContent">
        <NameSettings />
      </div>
    </div>

    <div :class="styles.configCard">
      <div :class="styles.cardHeader">
        <h3 :class="styles.cardTitle">
          <svg :class="styles.icon" aria-hidden="true">
            <use xlink:href="#icon-unit"></use>
          </svg>
          单位列设置
        </h3>
      </div>
      <div :class="styles.cardContent">
        <UnitSettings />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useStyleStore } from '@/stores/styleStore'
import templateManager from '@/utils/TemplateManager'
import GlobalSettings from './GlobalSettings.vue'
import NumberSettings from './NumberSettings.vue'
import NameSettings from './NameSettings.vue'
import UnitSettings from './UnitSettings.vue'
import styles from './GlobalSettings.module.css'

const store = useStyleStore()
const showTemplateLibrary = ref(false)

const templates = computed(() => templateManager.getTemplates())

onMounted(async () => {
  await templateManager.loadTemplates()
})

function applyTemplate(templateId) {
  const success = templateManager.applyTemplate(templateId)
  if (success) {
    // 显示成功提示
    showMessage('模板应用成功！')
  }
}

function resetToDefault() {
  store.resetToDefault()
  showMessage('已重置为默认配置')
}

function showMessage(message) {
  // 简单的消息提示
  alert(message)
}
</script> 