/**
 * 基于权限管理控制按钮是否显示（基础版）。
 */
import type { DirectiveBinding } from 'vue'

// 伪数据，来自store
const userinfo = {
  userId: 5,
  username: 'admin_editor',
  roles: ['admin', 'editor'],
  permissions: [
    'user:view',
    'user:edit',
    'user:delete',
    'role:view',
    'role:edit',
    'role:delete',
    'permission:view',
    'permission:edit',
    'permission:delete',
  ],
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  },
}

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  const permissions = userinfo.permissions

  const { value: requiredPermission, instance, dir } = binding
  console.log('instance', instance?.$attrs, dir)

  if (!permissions.includes(requiredPermission)) {
    el.parentNode?.removeChild(el)
  }
}
