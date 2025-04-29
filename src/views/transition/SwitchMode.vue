<template>
  <Transition name="switch" mode="out-in">
    <button v-if="docState === 'saved'" @click="docState = 'edit'" class="action">保存</button>
    <button v-else-if="docState === 'edit'" @click="docState = 'delete'" class="action">
      编辑
    </button>
    <button v-else-if="docState === 'delete'" @click="docState = 'saved'" class="action">
      删除
    </button>
  </Transition>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const docState = ref('saved')
</script>
<style lang="scss" scoped>
.switch-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.switch-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.switch-enter-active,
.switch-leave-active {
  transition: all 0.25s;
}
</style>
