<template>
  <div>
    <Transition name="switch">
      <button v-if="docState === 'saved'" @click="docState = 'edit'" class="action">保存</button>
      <button v-else-if="docState === 'edit'" @click="docState = 'delete'" class="action">
        编辑
      </button>
      <button v-else-if="docState === 'delete'" @click="docState = 'saved'" class="action">
        删除
      </button>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const docState = ref('saved')
</script>
<style lang="scss" scoped>
.action {
  position: absolute;
}

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
