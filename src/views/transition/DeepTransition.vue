<template>
  <button @click="isShow = !isShow">Toggle</button>
  <Transition :duration="550" name="nested">
    <div v-if="isShow" class="outer">
      <p class="inner">Hello!</p>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const isShow = ref(false)
</script>
<style lang="scss" scoped>
.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}
.inner {
  background: #ccc;
}

// 定义外层动画
.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

.nested-leave-active {
  transition-delay: 0.25s;
}

// 定义内层动画
.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-active .inner {
  transition-delay: 0.25s;
}
</style>
