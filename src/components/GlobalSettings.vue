<template>
  <div :class="styles.toolbarContainer">
    <h4 style="margin: 0 0 10px 0; font-size: 1.08rem; color: #1677ff; letter-spacing: 1px; font-weight: 600;">全局设置</h4>
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
      <!-- 形状设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">形状设置</h5>
        <div :class="styles.controlItem">圆角
          <input type="number" v-model.number="store.config.global.borderRadius" min="0" max="50" />
        </div>
      </div>
      <!-- 文字对齐 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">文字对齐</h5>
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
      <!-- 布局设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">布局设置</h5>
        <div :class="styles.controlItem">
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
import styles from './GlobalSettings.module.css'
import { watch } from 'vue'

const store = useStyleStore()

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

</script>
<style src="./GlobalSettings.module.css"></style>