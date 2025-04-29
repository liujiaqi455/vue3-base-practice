<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ConstantRoutes } from '@/router/index'

import RecursiveMenu from './RecursiveMenu.vue'

const router = useRouter()
const route = useRoute()

const isCollapse = ref(false)
</script>
<template>
  <el-menu
    :default-active="route.name"
    :collapse="isCollapse"
    :unique-opened="true"
    class="el-menu-vertical-demo"
  >
    <template v-for="child in ConstantRoutes" :key="child.name">
      <RecursiveMenu v-if="child.children?.length" :menu-item="child" />
      <el-menu-item v-else @click="router.push({ name: child.name })" :index="child.name">{{
        child.meta?.title
      }}</el-menu-item>
    </template>
  </el-menu>
</template>
