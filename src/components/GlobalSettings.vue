<template>
  <div :class="styles.toolbarContainer">
    <div :class="styles.modernToolbar">
      <!-- 背景设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">背景设置</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.global.bgColor" />
        </div>
        <div :class="styles.controlItem">
          <select v-model="store.config.global.gradient">
            <option value="none">无渐变</option>
            <option v-for="(grad, key) in gradients" :key="key" :value="key">{{ grad.name }}</option>
            <option value="custom">自定义</option>
          </select>
        </div>
        <div v-if="store.config.global.gradient === 'custom'" :class="styles.controlItem">
          <ColorPicker v-model="store.config.global.gradientStartColor" />
          <ColorPicker v-model="store.config.global.gradientEndColor" />
        </div>
        <div :class="styles.controlItem">
          <select v-model="store.config.global.pattern">
            <option value="none">无纹理</option>
            <option v-for="(pattern, key) in patterns" :key="key" :value="key">{{ pattern.name }}</option>
          </select>
        </div>
        
        <div v-if="store.config.global.pattern === 'custom-image'" :class="styles.controlItem">
          <WatermarkUploader v-model:watermark="customWatermark" />
        </div>
      </div>
      <!-- 边框设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">边框设置</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.global.border.color" />
        </div>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.global.border.width" min="0" max="10" />
        </div>
        <span :class="styles.divider"></span>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.global.border.style.includes('none') }]" @click="toggleBorder('none')">
          <svg class="iconfont" aria-hidden="true"><use :xlink:href="'#icon-wubiankuang'"></use></svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.global.border.style.includes('all') }]" @click="toggleBorder('all')">
          <svg class="iconfont" aria-hidden="true"><use :xlink:href="'#icon-waibiankuang'"></use></svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.global.border.style.includes('top') }]" @click="toggleBorder('top')">
          <svg class="iconfont" aria-hidden="true"><use :xlink:href="'#icon-shangbiankuang'"></use></svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.global.border.style.includes('bottom') }]" @click="toggleBorder('bottom')">
          <svg class="iconfont" aria-hidden="true"><use :xlink:href="'#icon-xiabiankuang'"></use></svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.global.border.style.includes('left') }]" @click="toggleBorder('left')">
          <svg class="iconfont" aria-hidden="true"><use :xlink:href="'#icon-zuobiankuang'"></use></svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.global.border.style.includes('right') }]" @click="toggleBorder('right')">
          <svg class="iconfont" aria-hidden="true"><use :xlink:href="'#icon-youbiankuang'"></use></svg>
        </button>
      </div>
      <!-- 形状、对齐设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">形状、对齐</h5>
        <div :class="styles.controlItem">
          <label>圆角</label>
          <input type="number" v-model.number="store.config.global.borderRadius" min="0" max="50" style="width:50px;" />
        </div>
        <span :class="styles.divider"></span>
        <div :class="styles.controlItem">
          <label>对齐</label>
          <button :class="[styles.iconBtn, { [styles.active]: store.config.global.textAlign === 'left' }]" @click="store.config.global.textAlign = 'left'">
            <svg class="iconfont" aria-hidden="true"><use :xlink:href="'#icon-align-left'"></use></svg>
          </button>
          <button :class="[styles.iconBtn, { [styles.active]: store.config.global.textAlign === 'center' }]" @click="store.config.global.textAlign = 'center'">
            <svg class="iconfont" aria-hidden="true"><use :xlink:href="'#icon-align-center'"></use></svg>
          </button>
          <button :class="[styles.iconBtn, { [styles.active]: store.config.global.textAlign === 'right' }]" @click="store.config.global.textAlign = 'right'">
            <svg class="iconfont" aria-hidden="true"><use :xlink:href="'#icon-align-right'"></use></svg>
          </button>
        </div>
         <span :class="styles.divider"></span>
        <div :class="styles.controlItem">
          <label>方向</label>
          <select v-model="store.config.direction">
            <option value="horizontal">水平</option>
            <option value="vertical">垂直</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStyleStore } from '@/stores/styleStore'
import ColorPicker from './ColorPicker.vue'
import { gradients } from '@/config/gradients'
import { patterns } from '@/config/patterns'
import styles from './GlobalSettings.module.css'
import { watch, ref } from 'vue'
import WatermarkUploader from './WatermarkUploader.vue'

const store = useStyleStore()
const customWatermark = ref(null)

watch(() => store.config.global.bgColor, (newColor) => {
  if (newColor) {
    store.config.global.backgroundType = 'color';
    store.config.global.gradient = 'none';
  }
});

function toggleBorder(side) {
  const arr = store.config.global.border.style
  if (side === 'all' || side === 'none') {
    store.config.global.border.style = [side]
    return
  }
  if (arr.includes('all') || arr.includes('none')) {
    store.config.global.border.style = [side]
    return
  }
  const idx = arr.indexOf(side)
  if (idx === -1) {
    arr.push(side)
  } else {
    arr.splice(idx, 1)
  }
  if (arr.length === 0) store.config.global.border.style = ['none']
}

watch(() => store.config.global.gradient, (val) => {
  if (val && val !== 'none') {
    store.config.global.backgroundType = 'gradient';
  } else {
    store.config.global.backgroundType = 'color';
  }
});

// 监听自定义水印的变化
watch(customWatermark, (newValue) => {
  if (newValue) {
    patterns['custom-image'].image = newValue.image
    patterns['custom-image'].opacity = newValue.opacity
    patterns['custom-image'].mode = newValue.mode || 'tile'
    patterns['custom-image'].width = newValue.width || 200
    patterns['custom-image'].height = newValue.height || 200
    store.config.global = { ...store.config.global }
  } else {
    patterns['custom-image'].image = null
    patterns['custom-image'].mode = 'tile'
    patterns['custom-image'].width = 200
    patterns['custom-image'].height = 200
    store.config.global = { ...store.config.global }
  }
}, { deep: true })

// 监听暗纹变化
watch(() => store.config.global.pattern, (newPattern) => {
  if (newPattern === 'custom-image' && !patterns['custom-image'].image && customWatermark.value) {
    // 如果选择了自定义图片但还没有设置图片，使用已上传的图片
    patterns['custom-image'].image = customWatermark.value.image
    patterns['custom-image'].opacity = customWatermark.value.opacity
    // 强制更新全局配置以触发重新渲染
    store.config.global = { ...store.config.global }
  }
})

</script>
<style src="./GlobalSettings.module.css"></style>