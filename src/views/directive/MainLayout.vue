<script lang="ts" setup>
import { ConstantRoutes } from '@/router'
import { computed } from 'vue'

import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutNav from '@/components/layout/LayoutNav.vue'

const routes = computed(() => {
  return ConstantRoutes.find((child) => child.name === 'Directive')?.children
})
</script>

<template>
  <LayoutHeader title="自定义指令" />
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
    box-shadow: var(--el-box-shadow-light);
    overflow: hidden auto;
    scrollbar-width: none;
  }
  .main {
    overflow: hidden;
  }
}
</style>
