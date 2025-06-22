<template>
  <div ref="pickrRef"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import Pickr from '@simonwep/pickr'
import '@simonwep/pickr/dist/themes/classic.min.css'

const props = defineProps({
  modelValue: {
    type: String,
    default: '#ffffff'
  }
})

const emit = defineEmits(['update:modelValue'])

const pickrRef = ref(null)
let pickrInstance = null

onMounted(() => {
  pickrInstance = Pickr.create({
    el: pickrRef.value,
    theme: 'classic',
    default: props.modelValue,
    components: {
      preview: true,
      opacity: true,
      hue: true,
      interaction: {
        hex: true,
        rgba: true,
        hsla: true,
        hsva: true,
        cmyk: true,
        input: true,
        clear: true,
        save: true
      }
    }
  })

  pickrInstance.on('save', (color) => {
    const rgbaArr = color.toRGBA();
    if (rgbaArr && rgbaArr.length === 4) {
      const [r, g, b, a] = rgbaArr;
      const rgbaStr = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`;
      emit('update:modelValue', rgbaStr);
    } else {
      emit('update:modelValue', color.toRGBA().toString());
    }
    pickrInstance.hide();
  })
})

watch(() => props.modelValue, (newColor) => {
  if (pickrInstance && newColor !== pickrInstance.getColor().toRGBA().toString()) {
    pickrInstance.setColor(newColor)
  }
})

onBeforeUnmount(() => {
  if (pickrInstance) {
    pickrInstance.destroy()
  }
})
</script> 