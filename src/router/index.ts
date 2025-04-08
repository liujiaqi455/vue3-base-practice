import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import TheWelcome from '@/components/TheWelcome.vue'

import ButtonPermission from '@/views/directive/ButtonPermission.vue'

export const ConstantRoutes: RouteRecordRaw[] = [
  {
    path: '/directive',
    name: 'Directive',
    redirect: '/directive/permission',
    meta: {
      title: '自定义指令',
    },
    children: [
      {
        path: '/directive/permission',
        name: 'DirectivePermission',
        component: ButtonPermission,
        meta: {
          title: '按钮权限',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheWelcome,
    },
    ...ConstantRoutes,
  ],
})

export default router
