<template>
  <div style="display: inline-block; text-align: center;">
    <div ref="exportableRef">
      <svg
        :viewBox="viewBox"
        :width="width"
        :height="height"
        xmlns="http://www.w3.org/2000/svg"
        class="name-card-svg"
      >
        <!-- Defs for gradients, patterns, filters -->
        <defs>
          <clipPath id="clip-global-bg">
            <rect :x="0" :y="0" :width="width" :height="height" :rx="globalConfig.borderRadius || 0" />
          </clipPath>
          <template v-for="item in defsItems" :key="item.id">
            <linearGradient v-if="item.type === 'linearGradient'" :id="item.id" v-bind="getLinearGradientPos(item.angle)">
              <stop v-for="(color, i) in item.colors" :key="i" :offset="(i / (item.colors.length - 1)) * 100 + '%'" :stop-color="color" />
            </linearGradient>
            <radialGradient v-else-if="item.type === 'radialGradient'" :id="item.id" cx="50%" cy="50%" r="50%">
              <stop v-for="(color, i) in item.colors" :key="i" :offset="(i / (item.colors.length - 1)) * 100 + '%'" :stop-color="color" />
            </radialGradient>
            <pattern v-else-if="item.type === 'pattern'" :id="item.id" patternUnits="userSpaceOnUse" 
              :width="item.mode === 'repeat' && item.width ? item.width : item.width" 
              :height="item.mode === 'repeat' && item.height ? item.height : item.height">
              <g v-if="item.svg" v-html="item.svg" />
              <image v-else-if="item.imageType === 'image' && item.image" 
                :href="item.image" 
                :width="item.width" 
                :height="item.height" 
                :opacity="item.opacity || 1"
                :preserveAspectRatio="item.mode === 'cover' ? 'xMidYMid slice' : 'none'"
              />
            </pattern>
            <filter v-else-if="item.type === 'filter'" :id="item.id" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow :dx="item.shadowX" :dy="item.shadowY" :stdDeviation="item.shadowBlur" :flood-color="item.shadowColor" flood-opacity="1" />
            </filter>
          </template>
        </defs>

        <g :clip-path="globalConfig.borderRadius > 0 ? 'url(#clip-global-bg)' : undefined">
          <!-- Global Background -->
          <rect :x="0" :y="0" :width="width" :height="height" :rx="globalConfig.borderRadius || 0" :fill="globalBgFill" />
          <image
            v-if="globalPatternConfig && globalPatternConfig.type === 'image' && (globalPatternConfig.mode === 'tile' || globalPatternConfig.mode === 'cover') && globalPatternConfig.image"
            :x="0" :y="0"
            :width="width"
            :height="height"
            :href="globalPatternConfig.image"
            :opacity="globalPatternConfig.opacity || 1"
            :preserveAspectRatio="globalPatternConfig.mode === 'cover' ? 'xMidYMid slice' : 'none'"
          />
          <rect
            v-if="globalPatternConfig && globalPatternConfig.type === 'image' && globalPatternConfig.mode === 'repeat' && globalPatternConfig.image"
            :x="0" :y="0" :width="width" :height="height" :rx="globalConfig.borderRadius || 0"
            :fill="`url(#pattern-global)`"
            :opacity="globalPatternConfig.opacity || 1"
          />
          <rect
            v-else-if="globalPatternConfig && globalPatternConfig.type !== 'image'"
            :x="0" :y="0" :width="width" :height="height" :rx="globalConfig.borderRadius || 0"
            :fill="`url(#pattern-global)`"
            fill-opacity="0.5"
          />

          <!-- Columns Rendering -->
          <g v-for="layout in layouts" :key="layout.col" :transform="layout.groupTransform">
            <!-- Background and Border (Skewed) -->
            <g :transform="layout.skewTransform">
              <rect :x="layout.rect.x" :y="layout.rect.y" :width="layout.rect.width" :height="layout.rect.height" :rx="layout.rect.rx" :fill="layout.rect.fill" />
              <rect v-if="layout.rect.gradientFill" :x="layout.rect.x" :y="layout.rect.y" :width="layout.rect.width" :height="layout.rect.height" :rx="layout.rect.rx" :fill="layout.rect.gradientFill" fill-opacity="0.7" />
              <rect v-if="layout.rect.patternFill" :x="layout.rect.x" :y="layout.rect.y" :width="layout.rect.width" :height="layout.rect.height" :rx="layout.rect.rx" :fill="layout.rect.patternFill" fill-opacity="0.5" />
              
              <g v-if="layout.border.width > 0 && layout.border.style && layout.border.style.length > 0 && !layout.border.style.includes('none')">
                <rect v-if="layout.border.style.includes('all')" :x="layout.rect.x + layout.border.width/2" :y="layout.rect.y + layout.border.width/2" :width="layout.rect.width - layout.border.width" :height="layout.rect.height - layout.border.width" :rx="layout.rect.rx" fill="none" :stroke="layout.border.color" :stroke-width="layout.border.width" />
                  <template v-else>
                  <path v-for="side in layout.border.style" :key="side" :d="getBorderPath(side, layout)" fill="none" :stroke="layout.border.color" :stroke-width="layout.border.width" />
                  </template>
              </g>
            </g>
            
            <!-- Text (Not Skewed) -->
            <text :x="layout.text.x" :y="layout.text.y" :font-family="layout.text.fontFamily" :font-size="layout.text.fontSize" :font-weight="layout.text.fontWeight" :font-style="layout.text.fontStyle" :text-decoration="layout.text.textDecoration" :fill="layout.text.textColor" :stroke="layout.text.stroke" :stroke-width="layout.text.strokeWidth" :filter="layout.text.filter" :text-anchor="layout.text.textAnchor" :dominant-baseline="layout.text.dominantBaseline" :writing-mode="layout.text.writingMode">
              <template v-if="layout.text.ranges && layout.text.ranges.length > 0">
                <tspan v-for="(span, i) in layout.text.ranges" :key="i" :font-size="span.fontSize" :font-weight="span.fontWeight" :font-style="span.fontStyle" :text-decoration="span.textDecoration" :dy="span.dy || 0">{{ span.text }}</tspan>
              </template>
              <template v-else>
                <!-- Multi-line text handling -->
                <template v-if="direction === 'horizontal'">
                  <template v-for="(line, lineIndex) in getMultilineText(layout.text.content)" :key="lineIndex">
                    <tspan v-if="lineIndex > 0" :x="layout.text.x" :dy="layout.text.lineHeight">{{ line }}</tspan>
                    <tspan v-else :dy="0">{{ line }}</tspan>
                  </template>
                </template>
                <template v-else> <!-- Vertical layout -->
                  <template v-for="(line, lineIndex) in getMultilineText(layout.text.content)" :key="lineIndex">
                    <tspan :x="layout.text.x + ((getMultilineText(layout.text.content).length - 1) / 2 - lineIndex) * layout.text.lineHeight" :y="layout.text.y">{{ line }}</tspan>
                  </template>
                </template>
              </template>
            </text>
          </g>
          
          <!-- Global Border -->
          <g v-if="globalConfig.border && !globalConfig.border.style.includes('none') && globalConfig.border.width > 0">
            <rect v-if="globalConfig.border.style.includes('all')" :x="globalConfig.border.width/2" :y="globalConfig.border.width/2" :width="width - globalConfig.border.width" :height="height - globalConfig.border.width" :rx="globalConfig.borderRadius || 0" fill="none" :stroke="globalConfig.border.color" :stroke-width="globalConfig.border.width" />
              <template v-else>
            <line v-if="globalConfig.border.style.includes('top')" :x1="0" :y1="globalConfig.border.width/2" :x2="width" :y2="globalConfig.border.width/2" :stroke="globalConfig.border.color" :stroke-width="globalConfig.border.width" />
            <line v-if="globalConfig.border.style.includes('bottom')" :x1="0" :y1="height-globalConfig.border.width/2" :x2="width" :y2="height-globalConfig.border.width/2" :stroke="globalConfig.border.color" :stroke-width="globalConfig.border.width" />
            <line v-if="globalConfig.border.style.includes('left')" :x1="globalConfig.border.width/2" :y1="0" :x2="globalConfig.border.width/2" :y2="height" :stroke="globalConfig.border.color" :stroke-width="globalConfig.border.width" />
            <line v-if="globalConfig.border.style.includes('right')" :x1="width-globalConfig.border.width/2" :y1="0" :x2="width-globalConfig.border.width/2" :y2="height" :stroke="globalConfig.border.color" :stroke-width="globalConfig.border.width" />
              </template>
          </g>
        </g>
      </svg>
    </div>
    <div class="export-controls">
        <input 
          v-model="customFileName" 
          :placeholder="defaultFileName" 
          class="filename-input"
        />
        <button @click="handleExport" class="export-btn primary">PNG</button>
        <button @click="handleExportSvg" class="export-btn secondary">SVG</button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useStyleStore } from '@/stores/styleStore'
import { gradients } from '@/config/gradients'
import { patterns } from '@/config/patterns'
import { customFonts } from '@/config/fonts'

const props = defineProps({
  columns: { type: Array, required: true },
  data: { type: Object, required: true }
})

const store = useStyleStore()

// --- Core Configs ---
const direction = computed(() => store.config.direction || 'horizontal')
const globalConfig = computed(() => store.config.global || {})
const colCount = computed(() => props.columns.length)

// --- Layout Constants ---
const PADDING = computed(() => globalConfig.value?.spacing?.padding || 0)
const ROW_GAP = computed(() => globalConfig.value?.spacing?.rowGap || 0)
const COLUMN_GAP = computed(() => globalConfig.value?.spacing?.columnGap || 0)
const MARGIN = computed(() => globalConfig.value?.spacing?.margin || 0)
const TEXT_PADDING_BOTTOM = 8

// --- Dynamic Dimensions ---
const width = computed(() => {
  if (direction.value === 'vertical') {
    if (verticalColumnLayouts.value.length === 0) return 360;
    const totalColumnWidth = verticalColumnLayouts.value.reduce((sum, layout) => sum + layout.colWidth, 0);
    const totalGapWidth = (verticalColumnLayouts.value.length - 1) * COLUMN_GAP.value;
    return totalColumnWidth + totalGapWidth + (MARGIN.value * 2);
  }
  return 360 + (MARGIN.value * 2)
})

const height = computed(() => {
  if (direction.value === 'vertical') return 360 + (MARGIN.value * 2)
  if (!layouts.value || layouts.value.length === 0) return 100 + (MARGIN.value * 2) // Fallback height

  const lastLayout = layouts.value[layouts.value.length - 1]
  if (!lastLayout || !lastLayout.rect) return 100 + (MARGIN.value * 2);

  const h = (lastLayout.rect.y || 0) + (lastLayout.rect.height || 0) + PADDING.value + (MARGIN.value * 2)
  return h > 0 ? h : 100 + (MARGIN.value * 2); // Final safeguard
})

const viewBox = computed(() => `0 0 ${width.value} ${height.value}`)

// --- Column Sorting ---
const sortedColumns = computed(() => {
  const zIndex = store.config.zIndex || { number: 1, name: 2, unit: 3 };
  return [...props.columns].sort((a, b) => (zIndex[a] || 99) - (zIndex[b] || 99));
})

const verticalColumnLayouts = computed(() => {
    if (direction.value !== 'vertical') return [];
    return sortedColumns.value.map(col => {
        const config = store.config[col] || {};
        const textContent = props.data[col] || '';
        const lines = getMultilineText(textContent);
        const lineCount = lines.length;
        
        const mainFontSize = config.fontSize || 20;
        const hasActiveRange = config.rangeStart > 0 && config.rangeEnd > 0 && config.rangeEnd > config.rangeStart;
        const rangeFontSize = hasActiveRange ? (config.rangeFontSize || mainFontSize) : mainFontSize;
        const maxFontSizeInCol = Math.max(mainFontSize, rangeFontSize);
        
        const lineHeight = lineCount > 1 ? maxFontSizeInCol * 1.5 : maxFontSizeInCol * 1.2;
        
        const requiredTextWidthForMultiLine = (lineCount > 1) ? (lineCount - 1) * lineHeight : 0;
        const baseWidth = maxFontSizeInCol + 20; // 10px padding on each side
        const colWidth = baseWidth + requiredTextWidthForMultiLine;

        return { col, colWidth, lineHeight, maxFontSizeInCol };
    });
});

// --- UNIFIED LAYOUT CALCULATION ---
const layouts = computed(() => {
  const resultLayouts = []
  let currentY = PADDING.value + MARGIN.value

  if (direction.value === 'horizontal') {
    sortedColumns.value.forEach((col, index) => {
      const config = store.config[col] || {}
      const borderConfig = config.border || {}
      
      const mainFontSize = config.fontSize || 32
      const hasActiveRange = config.rangeStart > 0 && config.rangeEnd > 0 && config.rangeEnd > config.rangeStart
      const rangeFontSize = hasActiveRange ? (config.rangeFontSize || mainFontSize) : mainFontSize
      const maxFontSizeInRow = Math.max(mainFontSize, rangeFontSize)
      
      // 计算多行文本的高度
      const textContent = props.data[col] || ''
      const lines = getMultilineText(textContent)
      const lineCount = lines.length
      
      // 根据是否有换行来决定行高和边距
      let lineHeight, padding, rowHeight
      
      if (lineCount > 1) {
        // 有换行时，使用更大的行高和边距
        lineHeight = maxFontSizeInRow * 1.5
        padding = 20
        const totalTextHeight = lineCount * lineHeight
        rowHeight = Math.max(totalTextHeight + padding, maxFontSizeInRow * 1.5 + padding) + (borderConfig.width || 0)
      } else {
        // 单行文本，使用原有的紧凑行高和边距
        lineHeight = maxFontSizeInRow * 1.2
        padding = 12
        rowHeight = Math.max(lineHeight + padding, maxFontSizeInRow * 1.2 + padding) + (borderConfig.width || 0)
      }
      
      // 修复文本垂直定位：根据是否有换行来决定定位方式
      let textY
      if (lineCount > 1) {
        // 多行文本：定位在背景矩形的上部，更靠近上一行
        textY = currentY + (lineHeight / 2) + (config.offsetY || 0) + 10
      } else {
        // 单行文本：定位在背景矩形的中间
        textY = currentY + (rowHeight / 2) + (config.offsetY || 0)
      }

      // 计算背景矩形的宽度，覆盖整个可用宽度以避免间距空隙
      const rectWidth = width.value - (MARGIN.value * 2)
      
      let textAnchor = 'middle'
      let textX = width.value / 2 + (config.offsetX || 0)
      const textAlign = config.textAlign || (globalConfig.value ? globalConfig.value.textAlign : 'center')
      if (textAlign === 'left') {
        textAnchor = 'start'
        textX = MARGIN.value + 10 + (config.offsetX || 0)
      } else if (textAlign === 'right') {
        textAnchor = 'end'
        textX = width.value - MARGIN.value - 10 + (config.offsetX || 0)
      }
      
      const rectCenterX = (width.value - rectWidth) / 2 + rectWidth / 2;
      const rectCenterY = currentY + rowHeight / 2;

      const fontValue = config.fontFamily || 'sans-serif'

      const layout = {
        col,
        groupTransform: '',
        skewTransform: config.skewAngle ? `translate(${rectCenterX}, ${rectCenterY}) skewX(${config.skewAngle}) translate(${-rectCenterX}, ${-rectCenterY})` : '',
        rect: {
          x: MARGIN.value,
          y: currentY,
          width: rectWidth,
          height: rowHeight,
          rx: config.borderRadius || 0,
          fill: config.bgColor || 'transparent',
        },
        text: {
          x: textX,
          y: textY,
          maxFontSizeInRow: maxFontSizeInRow,
          lineHeight: lineHeight,
          fontFamily: fontValue,
          fontSize: config.fontSize || 32,
          fontWeight: config.fontWeight || 'normal',
          fontStyle: config.fontStyle || 'normal',
          textDecoration: config.textDecoration || 'none',
          textColor: config.textColor || '#000000',
          stroke: (config.strokeWidth > 0) ? config.strokeColor : 'none',
          strokeWidth: config.strokeWidth || 0,
          filter: (config.shadowBlur > 0 || config.shadowX !== 0 || config.shadowY !== 0) ? `url(#shadow-${col})` : 'none',
          textAnchor: textAnchor,
          dominantBaseline: 'middle',
          writingMode: direction.value === 'vertical' ? 'vertical-rl' : undefined,
        },
        border: { ...borderConfig },
      }
      
      resultLayouts.push(layout)
      currentY += rowHeight + ROW_GAP.value
    })
  } else { // vertical
    let currentX = MARGIN.value;
    verticalColumnLayouts.value.forEach((vCol, index) => {
      const { col, colWidth, lineHeight } = vCol;
      const config = store.config[col] || {}
      const borderConfig = config.border || {}
      
      const colCenterX = colWidth / 2
      const colCenterY = height.value / 2
      const rectHeight = height.value * ((config.length || 100) / 100)
      
      // 计算背景矩形的宽度，包括列间距
      const isLastCol = index === verticalColumnLayouts.value.length - 1
      const rectWidth = colWidth + (isLastCol ? 0 : COLUMN_GAP.value)
      
      const layout = {
        col,
        groupTransform: `translate(${currentX}, 0)`,
        skewTransform: config.skewAngle ? `translate(${colCenterX}, ${colCenterY}) skewY(${config.skewAngle}) translate(${-colCenterX}, ${-colCenterY})` : '',
        rect: {
          x: 0, 
          y: MARGIN.value,
          width: rectWidth,
          height: height.value - (MARGIN.value * 2),
          rx: config.borderRadius,
          fill: config.bgColor || 'transparent',
        },
        text: {
          x: colCenterX + (config.offsetX || 0),
          y: colCenterY + (config.offsetY || 0),
          content: props.data[col] || '',
          lineHeight: lineHeight,
          fontFamily: config.fontFamily || 'sans-serif',
        },
        border: { ...borderConfig },
      }
      resultLayouts.push(layout)
      // 添加列间距，但不在最后一列后添加
      currentX += colWidth + (index < verticalColumnLayouts.value.length - 1 ? COLUMN_GAP.value : 0)
    })
  }

  // --- Fill common properties (gradient, pattern, text content, etc.) ---
  resultLayouts.forEach(layout => {
    const col = layout.col
    const config = store.config[col] || {}
    const isVertical = direction.value === 'vertical';
    
    // Gradient & Pattern
    const gradientCfg = gradients[config.gradient]
    if (config.backgroundType === 'gradient' && (config.gradient === 'custom' || (gradientCfg && gradientCfg.colors))) {
        layout.rect.gradientFill = `url(#gradient-${col})`
    }
    const patternCfg = patterns[config.pattern]
    if (config.pattern && config.pattern !== 'none') {
      if (patternCfg) {
        const patternItem = { type: 'pattern', id: `pattern-${col}`, ...patternCfg }
        if (patternCfg.type === 'image') {
          patternItem.type = 'pattern'
          patternItem.imageType = 'image'
        }
        layout.rect.patternFill = `url(#pattern-${col})`
        items.push(patternItem)
      }
    }
    
    // Text Anchor & Vertical Alignment
    let textAnchor = 'middle';
    let dominantBaseline = 'middle';
    
    if (isVertical) {
      const textAlign = config.textAlign || (globalConfig.value ? globalConfig.value.textAlign : 'center');
      if (textAlign === 'left') { // Top
        dominantBaseline = 'hanging';
      } else if (textAlign === 'right') { // Bottom
        dominantBaseline = 'auto';
      }
    } else {
        const textAlign = config.textAlign || (globalConfig.value ? globalConfig.value.textAlign : 'center');
        if (textAlign === 'left') {
            const rectWidth = width.value * ((config.length || 100) / 100);
            layout.text.x = (width.value - rectWidth) / 2 + MARGIN.value + 10 + (config.offsetX || 0);
            textAnchor = 'start';
        } else if (textAlign === 'right') {
            const rectWidth = width.value * ((config.length || 100) / 100);
            layout.text.x = width.value - ((width.value - rectWidth) / 2) - MARGIN.value - 10 + (config.offsetX || 0);
            textAnchor = 'end';
        }
    }

    // Text Content & Style
    Object.assign(layout.text, {
      content: props.data[col] || '',
      writingMode: isVertical ? 'vertical-rl' : undefined,
      textAnchor: textAnchor,
      dominantBaseline: dominantBaseline,
      fontSize: config.fontSize || (isVertical ? 20 : 32),
      fontWeight: config.fontWeight || 'normal',
      fontStyle: config.fontStyle || 'normal',
      textDecoration: config.textDecoration || 'none',
      textColor: config.textColor || '#000000',
      stroke: (config.strokeWidth > 0) ? config.strokeColor : 'none',
      strokeWidth: config.strokeWidth || 0,
      filter: (config.shadowBlur > 0 || config.shadowX !== 0 || config.shadowY !== 0) ? `url(#shadow-${col})` : 'none',
      fontFamily: config.fontFamily || 'sans-serif',
    })
    
    // Rich Text Ranges
    if (config.rangeStart > 0 && config.rangeEnd > config.rangeStart) {
      const text = String(props.data[col] || '')
      const start = config.rangeStart - 1
      const end = config.rangeEnd
      
      const parts = []
      if (start > 0) {
        parts.push({ text: text.slice(0, start), fontSize: config.fontSize, fontWeight: config.fontWeight, fontStyle: config.fontStyle, textDecoration: config.textDecoration })
      }
      parts.push({
          text: text.slice(start, end),
          fontSize: config.rangeFontSize || config.fontSize,
          fontWeight: config.rangeFontWeight || config.fontWeight,
          fontStyle: config.rangeFontStyle || config.fontStyle,
          textDecoration: config.rangeTextDecoration || config.textDecoration,
      })
      if (end < text.length) {
        parts.push({ text: text.slice(end), fontSize: config.fontSize, fontWeight: config.fontWeight, fontStyle: config.fontStyle, textDecoration: config.textDecoration })
      }
      
      const maxFont = layout.text.maxFontSizeInRow || config.fontSize;
      layout.text.ranges = parts.map(part => ({
        ...part,
        dy: (maxFont - (part.fontSize || config.fontSize)) / 2
      }));
    } else {
      layout.text.ranges = []
    }
  });

  return resultLayouts
})

// --- Defs (Gradients, Patterns, Filters) ---
const defsItems = computed(() => {
  const items = []
  const allConfigs = [
    { id: 'global', config: globalConfig.value },
    ...sortedColumns.value.map(col => ({ id: col, config: store.config[col] || {} }))
  ]

  allConfigs.forEach(({ id, config }) => {
    if (!config) return;

    // Gradient
    if (config.backgroundType === 'gradient') {
      const gradientCfg = gradients[config.gradient]
      const colors = config.gradient === 'custom' ? [config.gradientStartColor, config.gradientEndColor] : (gradientCfg ? gradientCfg.colors : [])
      if (colors && colors.every(c => c) && colors.length >= 2) {
        const gradType = (gradientCfg && gradientCfg.type) || 'linear'
        items.push({ type: `${gradType}Gradient`, id: `gradient-${id}`, colors, angle: (gradientCfg && gradientCfg.angle) || 135 })
      }
    }
    
    // Pattern
    if (config.pattern && config.pattern !== 'none') {
      const patternCfg = patterns[config.pattern]
      if (patternCfg) {
        const patternItem = { type: 'pattern', id: `pattern-${id}`, ...patternCfg }
        if (patternCfg.type === 'image') {
          patternItem.type = 'pattern'
          patternItem.imageType = 'image'
        }
        items.push(patternItem)
      }
    }
    
    // Shadow (only for columns)
    if (id !== 'global' && (config.shadowBlur > 0 || config.shadowX !== 0 || config.shadowY !== 0)) {
      items.push({ type: 'filter', id: `shadow-${id}`, ...config })
    }
  })
  return items
})

const globalPatternId = computed(() => 'pattern-global')
const globalPatternSvg = computed(() => {
    if (!globalConfig.value || !globalConfig.value.pattern || globalConfig.value.pattern === 'none') {
      return null
    }
    const p = patterns[globalConfig.value.pattern]
    return p && !p.type ? p.svg : null
})

const globalPatternConfig = computed(() => {
    if (!globalConfig.value || !globalConfig.value.pattern || globalConfig.value.pattern === 'none') {
      return null
    }
    return patterns[globalConfig.value.pattern]
})

const globalBgFill = computed(() => {
  if (!globalConfig.value) return 'transparent'
  // If gradient is selected, use it
  if (globalConfig.value.backgroundType === 'gradient' && globalConfig.value.gradient !== 'none') {
    return `url(#gradient-global)`
  }
  // Otherwise, always use the solid background color (even if a pattern is overlaid)
  return globalConfig.value.bgColor || 'transparent'
})


// --- Export ---
const exportableRef = ref(null)
const customFileName = ref('')
const defaultFileName = computed(() => {
  const desiredOrder = ['number', 'name', 'unit'];
  const parts = desiredOrder
    .map(key => props.data[key])
    .filter(Boolean); // filter(Boolean) removes null, undefined, '', 0, false

  let baseName;

  if (parts.length > 0) {
    baseName = parts.join('_');
  } else {
    // Fallback: join all available data if the main ones are missing
    const allParts = props.columns
      .map(key => props.data[key])
      .filter(Boolean);
    baseName = allParts.length > 0 ? allParts.join('_') : '名片';
  }
  
  return baseName;
});

const handleExport = async () => {
  if (!exportableRef.value) {
    alert('导出目标不存在，无法导出。')
    return
  }
  await exportAsPng(customFileName.value || defaultFileName.value)
}

const handleExportSvg = async () => {
  const elementToCapture = exportableRef.value;
  if (!elementToCapture) {
    alert('导出目标不存在，无法导出。');
    return;
  }
  const fileName = (customFileName.value || defaultFileName.value).replace(/\.png$/, '.svg');
  await exportAsSvg(fileName);
}

// --- Dynamically inject @font-face rules for custom fonts ---
onMounted(() => {
  const styleId = 'custom-font-faces';
  if (document.getElementById(styleId)) {
    return; // Avoid re-injecting styles
  }
  
  const fontFaceRules = customFonts.map(font => `
    @font-face {
      font-family: '${font.value}';
      src: url('${font.path}') format('woff2');
    }
  `).join('\n');

  if (fontFaceRules) {
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = fontFaceRules;
    document.head.appendChild(styleElement);
  }
});

// --- NEW FONT EMBEDDING LOGIC FOR EXPORT ---
const fontMap = new Map(customFonts.map(font => [font.value, font.path]));
const fontCache = new Map();

// A new computed property to reliably get all fonts currently in use
const fontsInUse = computed(() => {
  const fonts = new Set();
  const allConfigs = [store.config.global, ...props.columns.map(c => store.config[c])];

  for (const config of allConfigs) {
    if (config && config.fontFamily && fontMap.has(config.fontFamily)) {
      fonts.add(config.fontFamily);
    }
    // Also check for range-specific fonts
    if (config && config.rangeFontFamily && fontMap.has(config.rangeFontFamily)) {
        fonts.add(config.rangeFontFamily);
    }
  }
  return fonts;
});

async function toBase64(url) {
  if (fontCache.has(url)) {
    return fontCache.get(url);
  }
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      fontCache.set(url, reader.result);
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function embedFonts(svgNode) {
    const fontsToEmbed = fontsInUse.value;

    if (fontsToEmbed.size === 0) {
      // Return an empty cleanup function if no fonts to embed
      return () => {};
    }

    const fontFaces = await Promise.all(
        Array.from(fontsToEmbed).map(async fontFamily => {
            const path = fontMap.get(fontFamily);
            if (!path) return '';
            const base64Url = await toBase64(path);
            return `@font-face { font-family: '${fontFamily}'; src: url(${base64Url}); }`;
        })
    );

    const styleEl = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    styleEl.textContent = fontFaces.join('\n');
    
    const defs = svgNode.querySelector('defs') || svgNode.insertBefore(document.createElementNS('http://www.w3.org/2000/svg', 'defs'), svgNode.firstChild);
    defs.appendChild(styleEl);

    // Return a cleanup function
    return () => defs.removeChild(styleEl);
}

const exportAsSvg = async (fileName = 'namecard.svg') => {
  const svgNode = exportableRef.value.querySelector('svg');
  if (!svgNode) {
    alert('SVG元素未找到，无法导出。');
    return;
  }

  let cleanup = () => {};
  try {
    cleanup = await embedFonts(svgNode);
    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svgNode);
    
    // Add XML declaration for better compatibility
    const source = '<?xml version="1.0" standalone="no"?>\r\n' + svgString;

    const blob = new Blob([source], {type: 'image/svg+xml;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();

    // Clean up the URL object after a short delay
    setTimeout(() => URL.revokeObjectURL(url), 100);

  } catch (err) {
    console.error('导出SVG失败:', err);
    alert(`导出SVG失败!\n错误: ${err.message}`);
  } finally {
    cleanup();
  }
}

const exportAsPng = async (fileName = 'namecard.png') => {
  const svgNode = exportableRef.value?.querySelector('svg');
  if (!svgNode) {
    alert('SVG元素未找到，无法导出。');
    return;
  }

  let cleanup = () => {};
  try {
    cleanup = await embedFonts(svgNode);
    // Stage 1: Generate a clean SVG string (based on the working SVG export)
    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svgNode);
    // Add XML declaration for better compatibility
    svgString = '<?xml version="1.0" standalone="no"?>\r\n' + svgString;

    // Correctly encode the SVG string for Base64
    const encodedSvg = btoa(unescape(encodeURIComponent(svgString)));
    const svgDataUrl = 'data:image/svg+xml;base64,' + encodedSvg;

    // Stage 2: Convert the clean SVG data to PNG via Canvas
    const canvas = document.createElement('canvas');
    const scale = 2;
    // Use the SVG's own attributes for dimensions
    const svgWidth = parseFloat(svgNode.getAttribute('width'));
    const svgHeight = parseFloat(svgNode.getAttribute('height'));
    
    canvas.width = svgWidth * scale;
    canvas.height = svgHeight * scale;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = svgDataUrl;

    try {
        // Use img.decode() to prevent race conditions.
        // This ensures the image, including any embedded fonts, is fully loaded and ready to be drawn.
        await img.decode();
    } catch (error) {
        console.error("Image decoding failed. This can happen in some environments. Falling back to onload.", error);
        // Fallback for environments where decode() might not work as expected with SVG data URLs
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = (err) => reject(new Error("无法将生成的SVG图像加载到Image对象中。"));
        });
    }
    
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    const pngDataUrl = canvas.toDataURL('image/png');
    
    const link = document.createElement('a');
    link.href = pngDataUrl;
    link.download = fileName;
    link.click();

  } catch (err) {
    console.error('通过SVG中转导出PNG失败:', err);
    alert(`导出PNG失败!\n错误: ${err.message}`);
  } finally {
    cleanup();
  }
}

// --- Path Utilities ---
function getBorderPath(side, layout) {
  const { x, y, width, height, rx = 0 } = layout.rect
  if (![x, y, width, height, rx].every(v => isFinite(v))) return ''
  
  if (side === 'top') return rx > 0 ? `M${x},${y+rx} Q${x},${y} ${x+rx},${y} H${x+width-rx} Q${x+width},${y} ${x+width},${y+rx}` : `M${x},${y} H${x+width}`
  if (side === 'bottom') return rx > 0 ? `M${x+width},${y+height-rx} Q${x+width},${y+height} ${x+width-rx},${y+height} H${x+rx} Q${x},${y+height} ${x},${y+height-rx}` : `M${x},${y+height} H${x+width}`
  if (side === 'left') return rx > 0 ? `M${x+rx},${y+height} Q${x},${y+height} ${x},${y+height-rx} V${y+rx} Q${x},${y} ${x+rx},${y}` : `M${x},${y} V${y+height}`
  if (side === 'right') return rx > 0 ? `M${x+width-rx},${y} Q${x+width},${y} ${x+width},${y+rx} V${y+height-rx} Q${x+width},${y+height} ${x+width-rx},${y+height}` : `M${x+width},${y} V${y+height}`
  return ''
}

// --- 换行处理工具函数 ---
function getMultilineText(text) {
  if (!text) return ['']
  // Handles both \n and \\n from different sources
  return text.split(/\\n|\n/)
}

function getLinearGradientPos(angle) {
  const rad = (angle % 360) * Math.PI / 180
  return {
    x1: `${(Math.cos(rad + Math.PI) + 1) * 50}%`,
    y1: `${(Math.sin(rad + Math.PI) + 1) * 50}%`,
    x2: `${(Math.cos(rad) + 1) * 50}%`,
    y2: `${(Math.sin(rad) + 1) * 50}%`
  }
}

defineExpose({ exportAsPng })
</script>

<style scoped>
.name-card-svg {
  display: block;
  margin: 1rem auto;
  border: 1px solid var(--border-color);
  background: linear-gradient(135deg, #f0f9ff 0%,rgba(244, 255, 240, 0.53) 100%);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
}

.name-card-svg:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.export-controls {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.filename-input {
  flex-grow: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  font-size: 0.875rem;
  background: var(--secondary-bg);
  color: var(--text-color);
  transition: all 0.2s ease;
}

.filename-input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.export-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
  white-space: nowrap;
}

.export-btn:hover {
  transform: translateY(0);
  filter: brightness(0.95);
}

.export-btn.primary,
.export-btn.secondary {
  background: var(--secondary-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.export-btn.primary:hover,
.export-btn.secondary:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
  background: var(--primary-bg);
}

.btn-icon {
  display: none;
}
</style> 