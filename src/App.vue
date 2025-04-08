<script lang="ts" setup>
import TheMenu from './components/TheMenu.vue'
</script>
<template>
  <header class="header">header</header>
  <section class="container">
    <div class="nav">
      <TheMenu />
    </div>
    <div class="main">
      <RouterView />
    </div>
  </section>
</template>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
}
.container {
  width: 100%;
  height: 100%;
  padding-top: 60px;
  .nav {
    float: left;
    width: 300px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .main {
    height: 100%;
    margin-left: 300px;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
