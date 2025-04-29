<template>
  <header class="header">
    <span class="header-title">{{ title }}</span>
  </header>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  left: 64px;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
  border-bottom: 1px solid $element-border-deep-color;
  &-title {
    line-height: 28px;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
