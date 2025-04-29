<template>
  <el-sub-menu :index="menuItem.name">
    <template #title>
      <span>{{ menuItem.meta?.title }}</span>
    </template>
    <template v-for="child in menuItem.children" :key="child.name">
      <RecursiveMenu v-if="child.children?.length" :menu-item="child" />
      <el-menu-item v-else :index="child.name" @click="router.push({ name: child.name })">{{
        child.meta?.title
      }}</el-menu-item>
    </template>
  </el-sub-menu>
</template>
<script lang="ts" setup>
import { type RouteRecordRaw } from 'vue-router'
import { useRouter } from 'vue-router'

defineProps<{ menuItem: RouteRecordRaw }>()

const router = useRouter()
</script>
