import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useStyleStore = defineStore('style', () => {
  // 默认配置
  const defaultConfig = {
    global: {
      backgroundType: 'color', // color, gradient, pattern
      bgColor: 'transparent',
      gradient: 'none',
      gradientStartColor: '#37474f',
      gradientEndColor: '#263238',
      pattern: 'none',
      border: {
        style: ['none'], // 'none', 'all', 'top', 'bottom', 'left', 'right'
        color: '#cccccc',
        width: 1
      },
      textAlign: 'center',
      borderRadius: 0, // Added from generator.js analysis
    },
    number: {
      backgroundType: 'color',
      bgColor: 'transparent',
      gradient: 'none',
      gradientStartColor: '#37474f',
      gradientEndColor: '#263238',
      pattern: 'none',
      border: { style: ['none'], color: '#cccccc', width: 1 },
      textColor: '#000000',
      fontFamily: '微软雅黑',
      fontSize: 24,
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      strokeWidth: 0,
      strokeColor: '#000000',
      shadowColor: '#000000',
      shadowX: 0,
      shadowY: 0,
      shadowBlur: 0,
      borderRadius: 0,
      skewAngle: 0,
      borderGradient: 'none',
      borderGradientStartColor: '#cccccc',
      borderGradientEndColor: '#000000',
      length: 100,
      offsetX: 0,
      offsetY: 0,
      rangeStart: 0,
      rangeEnd: 0,
      rangeFontSize: 24,
      rangeFontWeight: 'normal',
      rangeFontStyle: 'normal',
      rangeTextDecoration: 'none'
    },
    name: {
      backgroundType: 'color',
      bgColor: 'transparent',
      gradient: 'none',
      gradientStartColor: '#37474f',
      gradientEndColor: '#263238',
      pattern: 'none',
      border: { style: ['none'], color: '#cccccc', width: 1 },
      textColor: '#000000',
      fontFamily: '微软雅黑',
      fontSize: 32,
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      strokeWidth: 0,
      strokeColor: '#000000',
      shadowColor: '#000000',
      shadowX: 0,
      shadowY: 0,
      shadowBlur: 0,
      borderRadius: 0,
      skewAngle: 0,
      borderGradient: 'none',
      borderGradientStartColor: '#cccccc',
      borderGradientEndColor: '#000000',
      length: 100,
      offsetX: 0,
      offsetY: 0,
      rangeStart: 0,
      rangeEnd: 0,
      rangeFontSize: 32,
      rangeFontWeight: 'normal',
      rangeFontStyle: 'normal',
      rangeTextDecoration: 'none'
    },
    unit: {
      backgroundType: 'color',
      bgColor: 'transparent',
      gradient: 'none',
      gradientStartColor: '#37474f',
      gradientEndColor: '#263238',
      pattern: 'none',
      border: { style: ['none'], color: '#cccccc', width: 1 },
      textColor: '#000000',
      fontFamily: '微软雅黑',
      fontSize: 20,
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      strokeWidth: 0,
      strokeColor: '#000000',
      shadowColor: '#000000',
      shadowX: 0,
      shadowY: 0,
      shadowBlur: 0,
      borderRadius: 0,
      skewAngle: 0,
      borderGradient: 'none',
      borderGradientStartColor: '#cccccc',
      borderGradientEndColor: '#000000',
      length: 100,
      offsetX: 0,
      offsetY: 0,
      rangeStart: 0,
      rangeEnd: 0,
      rangeFontSize: 20,
      rangeFontWeight: 'normal',
      rangeFontStyle: 'normal',
      rangeTextDecoration: 'none'
    },
    direction: 'horizontal', // 'horizontal' or 'vertical'
    columnOrder: 'ltr', // 'ltr' or 'rtl' for vertical
    verticalAlign: 'middle', // 'top', 'middle', 'bottom' for horizontal
    lineGap: 0,
    zIndex: { // Added from generator.js analysis
        number: 1,
        name: 2,
        unit: 3
    }
  }

  // 1. 从localStorage加载初始状态，或使用默认值
  const storedConfig = localStorage.getItem('namecard-style-config')
  const initialConfig = storedConfig ? JSON.parse(storedConfig) : defaultConfig

  const config = ref(initialConfig)

  // 2. 监听config的变化，并将其保存到localStorage
  watch(config, (newConfig) => {
    localStorage.setItem('namecard-style-config', JSON.stringify(newConfig));
  }, { deep: true });

  function applyTemplate(template) {
    // Deep merge or replace
    // A simple deep merge function
    const deepMerge = (target, source) => {
        for (const key in source) {
            if (source[key] instanceof Object && key in target) {
                Object.assign(source[key], deepMerge(target[key], source[key]))
            }
        }
        Object.assign(target, source)
    }
    
    // Create a deep copy to avoid reactivity issues with partial template objects
    let newConfig = JSON.parse(JSON.stringify(config.value));
    
    // Merge template into newConfig
    for (const key in template) {
        if (newConfig[key] && typeof newConfig[key] === 'object') {
            Object.assign(newConfig[key], template[key]);
        } else {
            newConfig[key] = template[key];
        }
    }

    config.value = newConfig;
  }

  function setConfig(newConfig) {
    // Use structuredClone for a deep copy to ensure reactivity
    config.value = structuredClone(newConfig);
  }

  function resetToDefault() {
    config.value = structuredClone(defaultConfig);
  }

  return { config, applyTemplate, setConfig, resetToDefault }
}) 