<template>
  <button @click="isShow = !isShow">Toggle</button>
  <Transition name="bounce">
    <p v-if="isShow" style="text-align: center">Hello here is some bouncy text!</p>
  </Transition>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const isShow = ref(false)
</script>
<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
