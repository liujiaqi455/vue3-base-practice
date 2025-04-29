<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(false)
</script>

<template>
  <div>
    <el-button @click="isShow = !isShow">{{ isShow ? '隐藏' : '显示' }}</el-button>
    <Transition>
      <p v-if="isShow" style="margin-top: 20px">Hello world!</p>
    </Transition>
    <el-divider />
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
