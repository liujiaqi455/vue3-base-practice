<script lang="ts" setup>
import { ConstantRoutes } from '@/router'
import { computed } from 'vue'

import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutNav from '@/components/layout/LayoutNav.vue'

const routes = computed(() => {
  return ConstantRoutes.find((child) => child.name === 'Reactive')?.children
})
</script>

<template>
  <LayoutHeader title="Reactive" />
  <el-container class="container">
    <el-aside width="220px" class="aside">
      <LayoutNav :routes="routes" />
    </el-aside>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 64px;
  width: 100%;
  height: 100%;
  .aside {
    box-shadow:
      0 0 1px rgba(0, 0, 0, 0.1),
      0 3px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden auto;
    scrollbar-width: none;
  }
  .main {
    padding: 0;
  }
}
</style>
