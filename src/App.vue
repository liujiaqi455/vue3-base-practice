<script lang="ts" setup>
import AppSidebar from './components/AppSidebar.vue'
</script>
<template>
  <div id="layout">
    <AppSidebar />
  </div>
  <div id="container">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
#container {
  position: relative;
  height: 100%;
  margin-left: 64px;
  overflow: hidden auto;
}
</style>
