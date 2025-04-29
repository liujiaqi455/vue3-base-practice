<template>
  <Transition
    appear
    enter-active-class="animate__animated animate__bounce"
    leave-active-class="animate__animated animate__bounceOutRight"
  >
    <p v-show="isShow">An animated element</p>
  </Transition>
  <button @click="isShow = !isShow">Toggle</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>
<style lang="scss" scoped></style>
