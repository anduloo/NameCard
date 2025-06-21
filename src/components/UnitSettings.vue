<template>
  <div :class="styles.toolbarContainer">
    <h4 style="margin: 0 0 10px 0; font-size: 1.08rem; color: #1677ff; letter-spacing: 1px; font-weight: 600;">单位列设置</h4>
    <div :class="styles.modernToolbar">
      <!-- 背景设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">背景设置</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.unit.bgColor" />
        </div>
        <div :class="styles.controlItem">
          <select v-model="store.config.unit.gradient">
            <option value="none">无渐变</option>
            <option v-for="(grad, key) in gradients" :key="key" :value="key">{{ grad.name }}</option>
            <option value="custom">自定义</option>
          </select>
        </div>
        <span :class="styles.divider"></span>
        <div v-if="store.config.unit.gradient === 'custom'" :class="styles.controlItem">
          <label>起始色</label>
          <ColorPicker v-model="store.config.unit.gradientStartColor" />
          <label>结束色</label>
          <ColorPicker v-model="store.config.unit.gradientEndColor" />
        </div>
      </div>
      <!-- 文字设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">文字设置</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.unit.textColor" />
        </div>
        <div :class="styles.controlItem">
          <select v-model="store.config.unit.fontFamily">
            <optgroup label="标准字体">
              <option v-for="font in standardFonts" :key="font.value" :value="font.value">{{ font.name }}</option>
            </optgroup>
            <optgroup label="自定义字体">
              <option v-for="font in customFonts" :key="font.value" :value="font.value">{{ font.name }}</option>
            </optgroup>
          </select>
        </div>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.unit.fontSize" min="8" max="72" />
        </div>
        <span :class="styles.divider"></span>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.unit.fontWeight === 'bold' }]" @click="toggleStyle('fontWeight', 'bold')">
          <svg class="iconfont" aria-hidden="true">
            <use :xlink:href="'#icon-bold'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.unit.fontStyle === 'italic' }]" @click="toggleStyle('fontStyle', 'italic')">
          <svg class="iconfont" aria-hidden="true">
            <use :xlink:href="'#icon-italic'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.unit.textDecoration === 'underline' }]" @click="toggleStyle('textDecoration', 'underline')">
          <svg class="iconfont" aria-hidden="true">
            <use :xlink:href="'#icon-underline'"></use>
          </svg>
        </button>
      </div>
      <!-- 边框设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">边框设置</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.unit.border.color" />
        </div>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.unit.border.width" min="0" max="10" />
        </div>

        <span :class="styles.divider"></span>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.unit.border.style.includes('none') }]" @click="toggleBorder('none')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-wubiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.unit.border.style.includes('all') }]" @click="toggleBorder('all')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-waibiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.unit.border.style.includes('top') }]" @click="toggleBorder('top')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-shangbiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.unit.border.style.includes('bottom') }]" @click="toggleBorder('bottom')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-xiabiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.unit.border.style.includes('left') }]" @click="toggleBorder('left')">
          <svg class="iconfont" aria-hidden="true" width="28" height="28">
            <use :xlink:href="'#icon-zuobiankuang'"></use>
          </svg>
        </button>
        <button :class="[styles.iconBtn, { [styles.active]: store.config.unit.border.style.includes('right') }]" @click="toggleBorder('right')">
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
          <input type="number" v-model.number="store.config.unit.borderRadius" min="0" max="50" />
        </div>
        <div :class="styles.controlItem">
          <label>斜角</label>
          <input type="number" v-model.number="store.config.unit.skewAngle" min="-45" max="45" />
        </div>
        <div :class="styles.controlItem">
          <label>长度</label>
          <input type="number" v-model.number="store.config.unit.length" min="10" max="100" style="width:50px;" />
        </div>
      </div>
      <!-- 描边与阴影 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">描边与阴影</h5>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.unit.strokeColor" />
          <input type="number" v-model.number="store.config.unit.strokeWidth" min="0" max="10" step="0.5" style="width:50px;" />
        </div>
        <span :class="styles.divider"></span>
        <div :class="styles.controlItem">
          <ColorPicker v-model="store.config.unit.shadowColor" />
          <span></span><input type="number" v-model.number="store.config.unit.shadowX" min="-10" max="10" style="width:40px;" />
          <span></span><input type="number" v-model.number="store.config.unit.shadowY" min="-10" max="10" style="width:40px;" />
          <span></span><input type="number" v-model.number="store.config.unit.shadowBlur" min="0" max="20" style="width:40px;" />
        </div>
      </div>
      <!-- 文字范围设置 -->
      <div :class="styles.toolbarSection">
        <h5 :class="styles.groupTitle">文字范围样式</h5>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.unit.rangeStart" min="0" style="width:50px;" /> -
          <input type="number" v-model.number="store.config.unit.rangeEnd" :min="store.config.unit.rangeStart+1" style="width:50px;" />
        </div>
        <div :class="styles.controlItem">
          <input type="number" v-model.number="store.config.unit.rangeFontSize" min="8" max="72" style="width:45px; font-size:15px;" />
          <button :class="[styles.iconBtn, { [styles.active]: store.config.unit.rangeFontWeight === 'bold' }]" @click="toggleRangeStyle('fontWeight', 'bold')">
            <svg class="iconfont" aria-hidden="true">
              <use :xlink:href="'#icon-bold'"></use>
            </svg>
          </button>
          <button :class="[styles.iconBtn, { [styles.active]: store.config.unit.rangeFontStyle === 'italic' }]" @click="toggleRangeStyle('fontStyle', 'italic')">
            <svg class="iconfont" aria-hidden="true">
              <use :xlink:href="'#icon-italic'"></use>
            </svg>
          </button>
          <button :class="[styles.iconBtn, { [styles.active]: store.config.unit.rangeTextDecoration === 'underline' }]" @click="toggleRangeStyle('textDecoration', 'underline')">
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
import styles from './UnitSettings.module.css'
import { watch } from 'vue'

const store = useStyleStore()

function toggleStyle(prop, value) {
  if (store.config.unit[prop] === value) {
    store.config.unit[prop] = 'normal'
  } else {
    store.config.unit[prop] = value
  }
}

function toggleBorder(side) {
  const arr = store.config.unit.border.style
  if (side === 'all' || side === 'none') {
    store.config.unit.border.style = [side]
    return
  }
  if (arr.includes('all') || arr.includes('none')) {
    store.config.unit.border.style = [side]
    return
  }
  const idx = arr.indexOf(side)
  if (idx === -1) {
    arr.push(side)
  } else {
    arr.splice(idx, 1)
  }
  if (arr.length === 0) store.config.unit.border.style = ['none']
}

function toggleRangeStyle(prop, value) {
  if (store.config.unit[prop] === value) {
    store.config.unit[prop] = 'normal'
  } else {
    store.config.unit[prop] = value
  }
}

watch(() => store.config.unit.gradient, (val) => {
  if (val && val !== 'none') {
    store.config.unit.backgroundType = 'gradient';
  } else {
    store.config.unit.backgroundType = 'color';
  }
});
</script> 