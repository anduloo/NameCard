<template>
  <div :class="styles.toolbarContainer">
    <div :class="styles.modernToolbar">
      <!-- 背景设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">背景设置</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.name.bgColor" />
        </div>
        <div :class="styles.controlItem">
          <select v-model="store.config.name.gradient">
            <option value="none">无渐变</option>
            <option v-for="(grad, key) in gradients" :key="key" :value="key">{{ grad.name }}</option>
            <option value="custom">自定义</option>
          </select>
        </div>
        <span :class="styles.divider"></span>
        <div v-if="store.config.name.gradient === 'custom'" :class="styles.controlItem">
          <label>起始色</label>
          <ColorPicker v-model="store.config.name.gradientStartColor" />
          <label>结束色</label>
          <ColorPicker v-model="store.config.name.gradientEndColor" />
        </div>
      </div>
      <!-- 文字设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">文字设置</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.name.textColor" />
        </div>
        <div :class="styles.controlItem">
          <select v-model="store.config.name.fontFamily">
            <optgroup label="标准字体">
              <option v-for="font in standardFonts" :key="font.value" :value="font.value">{{ font.name }}</option>
            </optgroup>
            <optgroup label="自定义字体">
              <option v-for="font in customFonts" :key="font.value" :value="font.value">{{ font.name }}</option>
            </optgroup>
          </select>
        </div>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.name.fontSize" min="8" max="72" />
        </div>
        <span :class="styles.divider"></span>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.name.fontWeight === 'bold' }]" @click="toggleStyle('fontWeight', 'bold')">
          <svg class="iconfont" aria-hidden="true">
            <use :xlink:href="'#icon-bold'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.name.fontStyle === 'italic' }]" @click="toggleStyle('fontStyle', 'italic')">
          <svg class="iconfont" aria-hidden="true">
            <use :xlink:href="'#icon-italic'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.name.textDecoration === 'underline' }]" @click="toggleStyle('textDecoration', 'underline')">
          <svg class="iconfont" aria-hidden="true">
            <use :xlink:href="'#icon-underline'"></use>
          </svg>
        </button>
      </div>
      <!-- 边框设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">边框设置</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.name.border.color" />
        </div>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.name.border.width" min="0" max="10" />
        </div>

        <span :class="styles.divider"></span>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.name.border.style.includes('none') }]" @click="toggleBorder('none')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-wubiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.name.border.style.includes('all') }]" @click="toggleBorder('all')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-waibiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.name.border.style.includes('top') }]" @click="toggleBorder('top')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-shangbiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.name.border.style.includes('bottom') }]" @click="toggleBorder('bottom')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-xiabiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.name.border.style.includes('left') }]" @click="toggleBorder('left')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-zuobiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.name.border.style.includes('right') }]" @click="toggleBorder('right')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-youbiankuang'"></use>
          </svg>
        </button>
      </div>
      <!-- 形状设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">形状设置</h5>
        <div :class="styles.controlItem">
          <label>圆角</label>
          <input type="number" v-model.number="store.config.name.borderRadius" min="0" max="50" />
        </div>
        <div :class="styles.controlItem">
          <label>斜角</label>
          <input type="number" v-model.number="store.config.name.skewAngle" min="-45" max="45" />
        </div>
        <div :class="styles.controlItem">
          <label>长度</label>
          <input type="number" v-model.number="store.config.name.length" min="10" max="100" style="width:50px;" />
        </div>
      </div>
      <!-- 富文本范围样式 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">文字范围样式</h5>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.name.rangeStart" min="0" style="width:50px;" /> -
          <input type="number" v-model.number="store.config.name.rangeEnd" :min="store.config.name.rangeStart+1" style="width:50px;" />
        </div>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.name.rangeFontSize" min="8" max="72" style="width:45px; font-size:15px;" />
          <button :class="[styles.iconBtn, { [styles.active]: store.config.name.rangeFontWeight === 'bold' }]" @click="toggleRangeStyle('fontWeight', 'bold')">
            <svg class="iconfont" aria-hidden="true">
              <use :xlink:href="'#icon-bold'"></use>
            </svg>
          </button>
          <button :class="[styles.iconBtn, { [styles.active]: store.config.name.rangeFontStyle === 'italic' }]" @click="toggleRangeStyle('fontStyle', 'italic')">
            <svg class="iconfont" aria-hidden="true">
              <use :xlink:href="'#icon-italic'"></use>
            </svg>
          </button>
          <button :class="[styles.iconBtn, { [styles.active]: store.config.name.rangeTextDecoration === 'underline' }]" @click="toggleRangeStyle('textDecoration', 'underline')">
            <svg class="iconfont" aria-hidden="true">
              <use :xlink:href="'#icon-underline'"></use>
            </svg>
          </button>
        </div>
      </div>
      <!-- 描边与阴影 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">描边与阴影</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.name.strokeColor" />
          <input type="number" v-model.number="store.config.name.strokeWidth" min="0" max="10" step="0.5" style="width:50px;" />
        </div>
        <span :class="styles.divider"></span>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.name.shadowColor" />
          <span></span><input type="number" v-model.number="store.config.name.shadowX" min="-10" max="10" style="width:40px;" />
          <span></span><input type="number" v-model.number="store.config.name.shadowY" min="-10" max="10" style="width:40px;" />
          <span></span><input type="number" v-model.number="store.config.name.shadowBlur" min="0" max="20" style="width:40px;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStyleStore } from '@/stores/styleStore'
import ColorPicker from './ColorPicker.vue'
import { gradients } from '@/config/gradients'
import { standardFonts, customFonts } from '@/config/fonts'
import styles from './NameSettings.module.css'
import { watch } from 'vue'

const store = useStyleStore()

function toggleStyle(prop, value) {
  if (store.config.name[prop] === value) {
    store.config.name[prop] = 'normal'
  } else {
    store.config.name[prop] = value
  }
}

function toggleBorder(side) {
  const arr = store.config.name.border.style
  if (side === 'all' || side === 'none') {
    store.config.name.border.style = [side]
    return
  }
  if (arr.includes('all') || arr.includes('none')) {
    store.config.name.border.style = [side]
    return
  }
  const idx = arr.indexOf(side)
  if (idx === -1) {
    arr.push(side)
  } else {
    arr.splice(idx, 1)
  }
  if (arr.length === 0) store.config.name.border.style = ['none']
}

function toggleRangeStyle(prop, value) {
  if (store.config.name[`range${prop.charAt(0).toUpperCase()+prop.slice(1)}`] === value) {
    store.config.name[`range${prop.charAt(0).toUpperCase()+prop.slice(1)}`] = (prop === 'fontWeight' ? 'normal' : (prop === 'fontStyle' ? 'normal' : 'none'))
  } else {
    store.config.name[`range${prop.charAt(0).toUpperCase()+prop.slice(1)}`] = value
  }
}

watch(() => store.config.name.gradient, (val) => {
  if (val && val !== 'none') {
    store.config.name.backgroundType = 'gradient';
  } else {
    store.config.name.backgroundType = 'color';
  }
});
</script>

<style src="./NameSettings.module.css"></style> 