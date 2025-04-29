<template>
  <div class="wrapper">
    <Transition name="fade">
      <span :key="count">{{ count }}</span>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const count = ref(0)

let timer: ReturnType<typeof setInterval> | undefined = undefined

onMounted(() => {
  timer = setInterval(() => {
    count.value++
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  span {
    position: absolute;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
