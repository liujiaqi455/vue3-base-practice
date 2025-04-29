<template>
  <ul class="menu-group">
    <li v-for="child in routes" :key="child.name" :class="{ active: child.name === route.name }">
      <router-link :to="child.path">
        <span>{{ child.meta?.title }}</span>
      </router-link>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { type RouteRecordRaw } from 'vue-router'
import { useRoute } from 'vue-router'

const route = useRoute()

defineProps<{
  routes: RouteRecordRaw[] | undefined
}>()
</script>
<style lang="scss" scoped>
.menu-group {
  padding: 12px;
  li {
    display: flex;
    height: 36px;
    line-height: 36px;
    margin-bottom: 4px;
    border-radius: 3px;
    transition: background-color 0.25s;
    cursor: pointer;
    &:hover {
      background-color: $element-hover-bg;
    }
    &.active {
      background-color: $element-active-bg;
      a {
        color: $element-active-color;
      }
    }
    a {
      flex: 1 1;
      padding: 0 10px;
      color: $link-common-color;
    }
  }
}
</style>
