<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ConstantRoutes } from '@/router/index'

const router = useRouter()

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleMenuItemClick = function ({ index: name }: { index: string }) {
  router.push({ name })
}
</script>
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu v-for="menu in ConstantRoutes" :key="menu.name" :index="menu.name">
      <template #title>
        <span>{{ menu.meta?.title }}</span>
      </template>
      <el-menu-item-group v-if="menu.children">
        <el-menu-item
          v-for="childMenu in menu.children"
          :key="childMenu.name"
          :index="childMenu.name"
          @click="handleMenuItemClick"
          >{{ childMenu.meta?.title }}</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>
