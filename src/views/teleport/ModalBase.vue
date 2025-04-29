<template>
  <div>
    <button @click="isShowModal = !isShowModal">显示模态窗</button>
    <ModalView v-model="isShowModal" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import ModalView from './components/ModalView.vue'

const isShowModal = ref(false)
</script>
<style lang="scss" scoped></style>
