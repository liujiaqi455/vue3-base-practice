import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Role = 'admin' | 'editor' | 'guide'

export const useUserStore = defineStore('user', () => {
  const userRoles = ref<Role[]>(['admin'])
  function getUserRoles(): Role[] {
    return userRoles.value
  }

  function updateUserRoles() {
    userRoles.value = ['guide']
  }

  return { getUserRoles, updateUserRoles }
})
