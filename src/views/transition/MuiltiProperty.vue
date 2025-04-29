<template>
  <Transition name="slide-fade">
    <p v-if="isShow">hello</p>
  </Transition>
  <button @click="isShow = !isShow">Toggle slide fade</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const isShow = ref(false)
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
