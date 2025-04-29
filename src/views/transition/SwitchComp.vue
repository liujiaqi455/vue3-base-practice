<template>
  <label> <input type="radio" :value="CompA" v-model="currentComp" />A </label>
  <label> <input type="radio" :value="CompB" v-model="currentComp" />B </label>
  <Transition name="fade" mode="out-in">
    <component :is="currentComp" />
  </Transition>
</template>
<script lang="ts" setup>
import { shallowRef } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'

const currentComp = shallowRef(CompA)
</script>
<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>
