<template>
  <div :class="styles.toolbarContainer">
    <h4 style="margin: 0 0 10px 0; font-size: 1.08rem; color: #1677ff; letter-spacing: 1px; font-weight: 600;">号码列设置</h4>
    <div :class="styles.modernToolbar">
      <!-- 背景设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">背景设置</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.number.bgColor" />
        </div>
        <div :class="styles.controlItem">
          <select v-model="store.config.number.gradient">
            <option value="none">无渐变</option>
            <option v-for="(grad, key) in gradients" :key="key" :value="key">{{ grad.name }}</option>
            <option value="custom">自定义</option>
          </select>
        </div>
        <span :class="styles.divider"></span>
        <div v-if="store.config.number.gradient === 'custom'" :class="styles.controlItem">
          <label>起始色</label>
          <ColorPicker v-model="store.config.number.gradientStartColor" />
          <label>结束色</label>
          <ColorPicker v-model="store.config.number.gradientEndColor" />
        </div>
      </div>
      <!-- 文字设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">文字设置</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.number.textColor" />
        </div>
        <div :class="styles.controlItem">
          <select v-model="store.config.number.fontFamily">
            <optgroup label="标准字体">
              <option v-for="font in standardFonts" :key="font.value" :value="font.value">{{ font.name }}</option>
            </optgroup>
            <optgroup label="自定义字体">
              <option v-for="font in customFonts" :key="font.value" :value="font.value">{{ font.name }}</option>
            </optgroup>
          </select>
        </div>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.number.fontSize" min="8" max="72" />
        </div>
        <span :class="styles.divider"></span>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.number.fontWeight === 'bold' }]" @click="toggleStyle('fontWeight', 'bold')">
          <svg class="iconfont" aria-hidden="true">
            <use :xlink:href="'#icon-bold'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.number.fontStyle === 'italic' }]" @click="toggleStyle('fontStyle', 'italic')">
          <svg class="iconfont" aria-hidden="true">
            <use :xlink:href="'#icon-italic'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.number.textDecoration === 'underline' }]" @click="toggleStyle('textDecoration', 'underline')">
          <svg class="iconfont" aria-hidden="true">
            <use :xlink:href="'#icon-underline'"></use>
          </svg>
        </button>
      </div>
      <!-- 边框设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">边框设置</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.number.border.color" />
        </div>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.number.border.width" min="0" max="10" />
        </div>

        <span :class="styles.divider"></span>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.number.border.style.includes('none') }]" @click="toggleBorder('none')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-wubiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.number.border.style.includes('all') }]" @click="toggleBorder('all')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-waibiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.number.border.style.includes('top') }]" @click="toggleBorder('top')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-shangbiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.number.border.style.includes('bottom') }]" @click="toggleBorder('bottom')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-xiabiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.number.border.style.includes('left') }]" @click="toggleBorder('left')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-zuobiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.number.border.style.includes('right') }]" @click="toggleBorder('right')">
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
          <input type="number" v-model.number="store.config.number.borderRadius" min="0" max="50" />
        </div>
        <div :class="styles.controlItem">
          <label>斜角</label>
          <input type="number" v-model.number="store.config.number.skewAngle" min="-45" max="45" />
        </div>
        <div :class="styles.controlItem">
          <label>长度</label>
          <input type="number" v-model.number="store.config.number.length" min="10" max="100" style="width:50px;" /> 
        </div>
      </div>
      <!-- 描边与阴影 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">描边与阴影</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.number.strokeColor" />
          <input type="number" v-model.number="store.config.number.strokeWidth" min="0" max="10" step="0.5" style="width:50px;" />
        </div>
        <span :class="styles.divider"></span>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.number.shadowColor" />
          <span></span><input type="number" v-model.number="store.config.number.shadowX" min="-10" max="10" style="width:40px;" />
          <span></span><input type="number" v-model.number="store.config.number.shadowY" min="-10" max="10" style="width:40px;" />
          <span></span><input type="number" v-model.number="store.config.number.shadowBlur" min="0" max="20" style="width:40px;" />
        </div>
      </div>
      <!-- 文字范围设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">文字范围样式</h5>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.number.rangeStart" min="0" style="width:50px;" /> -
          <input type="number" v-model.number="store.config.number.rangeEnd" :min="store.config.number.rangeStart+1" style="width:50px;" />
        </div>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.number.rangeFontSize" min="8" max="72" style="width:45px; font-size:15px;" />
          <button :class="[styles.iconBtn, { [styles.active]: store.config.number.rangeFontWeight === 'bold' }]" @click="toggleRangeStyle('fontWeight', 'bold')">
            <svg class="iconfont" aria-hidden="true">
              <use :xlink:href="'#icon-bold'"></use>
            </svg>
          </button>
          <button :class="[styles.iconBtn, { [styles.active]: store.config.number.rangeFontStyle === 'italic' }]" @click="toggleRangeStyle('fontStyle', 'italic')">
            <svg class="iconfont" aria-hidden="true">
              <use :xlink:href="'#icon-italic'"></use>
            </svg>
          </button>
          <button :class="[styles.iconBtn, { [styles.active]: store.config.number.rangeTextDecoration === 'underline' }]" @click="toggleRangeStyle('textDecoration', 'underline')">
            <svg class="iconfont" aria-hidden="true">
              <use :xlink:href="'#icon-underline'"></use>
            </svg>
          </button>
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
import styles from './NumberSettings.module.css'
import { watch } from 'vue'

const store = useStyleStore()

function toggleStyle(prop, value) {
  if (store.config.number[prop] === value) {
    store.config.number[prop] = 'normal'
  } else {
    store.config.number[prop] = value
  }
}

function toggleBorder(side) {
  const arr = store.config.number.border.style
  if (side === 'all' || side === 'none') {
    store.config.number.border.style = [side]
    return
  }
  if (arr.includes('all') || arr.includes('none')) {
    store.config.number.border.style = [side]
    return
  }
  const idx = arr.indexOf(side)
  if (idx === -1) {
    arr.push(side)
  } else {
    arr.splice(idx, 1)
  }
  if (arr.length === 0) store.config.number.border.style = ['none']
}

function toggleRangeStyle(prop, value) {
  if (store.config.number[prop] === value) {
    store.config.number[prop] = 'normal'
  } else {
    store.config.number[prop] = value
  }
}

watch(() => store.config.number.gradient, (val) => {
  if (val && val !== 'none') {
    store.config.number.backgroundType = 'gradient';
  } else {
    store.config.number.backgroundType = 'color';
  }
});
</script> 