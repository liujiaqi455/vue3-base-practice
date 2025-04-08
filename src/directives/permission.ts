import type { DirectiveBinding } from 'vue'

import { type Role, useUserStore } from '@/stores/user'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  },
}

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  console.log('运行')
  const store = useUserStore()

  const userRoles = store.getUserRoles()
  if (userRoles.includes('admin')) {
    return
  }

  const { value }: { value: Role[] } = binding
  console.log(value)

  if (Array.isArray(value) && value.length > 0) {
    const hasPermission = value.some((item) => userRoles.includes(item))
    console.log(value, userRoles, hasPermission)

    if (!hasPermission) el.parentNode?.removeChild(el)
  } else {
    console.warn('自定义指令参数类型错误。')
  }
}
