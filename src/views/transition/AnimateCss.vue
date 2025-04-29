<template>
  <Transition
    enter-active-class="animate__animated animate__bounce"
    leave-active-class="animate__animated animate__bounceOutRight"
  >
    <p v-if="isShow">An animated element</p>
  </Transition>
  <button @click="isShow = !isShow">Toggle</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const isShow = ref(false)
</script>
<style lang="scss" scoped></style>
