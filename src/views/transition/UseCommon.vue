<template>
  <button @click="isShow = !isShow">Toggle</button>
  <common-transition>
    <div v-show="isShow" class="gsap-box"></div>
  </common-transition>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import CommonTransition from '@/components/CommonTransition.vue'

const isShow = ref(false)
</script>
<style lang="scss" scoped>
.gsap-box {
  width: 30px;
  height: 30px;
  margin-top: 30px;
  background-color: green;
}
</style>
