<template>
  <svg aria-hidden="true" :width="size" :height="size" :fill="color">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'icon-moren',
  },
  size: {
    type: [Number, String],
    default: 20,
  },
  color: {
    type: String,
    default: 'currentColor', // 默认继承父级颜色
  },
})

const symbolId = computed(() => `#${props.name}`)
</script>
