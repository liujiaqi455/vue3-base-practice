<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const store = useUserStore()

function updateUserRole() {
  store.updateUserRoles()
}
</script>

<template>
  <div v-permission="['admin']">1</div>
  <div v-permission="['editor']">2</div>
  <div v-permission="['guide']">3</div>
  <button @click="updateUserRole">点击改变 user 角色</button>
</template>
