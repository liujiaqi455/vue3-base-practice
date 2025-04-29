<template>
  <button @click="isShow = !isShow">Toggle</button>
  <Transition name="bounce">
    <p v-if="isShow" class="box">Hello Animation!</p>
  </Transition>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const isShow = ref(false)
</script>
<style lang="scss" scoped>
.box {
  width: 200px;
  padding: 20px;
  background: #42b983;
}

.bounce-enter-from,
.bounce-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  transition: opacity 0.5s;
  animation: shake 3s;
}
.bounce-leave-active {
  transition: opacity 0.5s;
  animation: shake 3s reverse;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-5px);
  }
}
</style>
