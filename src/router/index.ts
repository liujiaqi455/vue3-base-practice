import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import TheWelcome from '@/components/TheWelcome.vue'

import DirectiveMainLayout from '@/views/directive/MainLayout.vue'
import ButtonPermission from '@/views/directive/ButtonPermission.vue'
import DebouncedInput from '@/views/directive/DebouncedInput.vue'

import PluginMainLayout from '@/views/plugin/MainLayout.vue'
import I18nTest from '@/views/plugin/I18nTest.vue'

import TransitionMainLayout from '@/views/transition/MainLayout.vue'
import BaseTransition from '@/views/transition/BaseTest.vue'
import MuiltiProperty from '@/views/transition/MuiltiProperty.vue'
import AnimationBase from '@/views/transition/AnimationBase.vue'
import AnimateCss from '@/views/transition/AnimateCss.vue'
import BothAnimate from '@/views/transition/BothAnimate.vue'
import DeepTransition from '@/views/transition/DeepTransition.vue'
import JsAnimate from '@/views/transition/JsAnimate.vue'
import UseCommon from '@/views/transition/UseCommon.vue'
import InitialRender from '@/views/transition/InitialRender.vue'
import SwitchElement from '@/views/transition/SwitchElement.vue'
import SwitchMode from '@/views/transition/SwitchMode.vue'
import SwitchComp from '@/views/transition/SwitchComp.vue'
import KeyTransition from '@/views/transition/KeyTransition.vue'
import GroupBase from '@/views/transition/GroupBase.vue'
import GroupFlip from '@/views/transition/GroupFlip.vue'
import DelayTransition from '@/views/transition/DelayTransition.vue'

import TeleportMainLayout from '@/views/teleport/MainLayout.vue'
import ModalBase from '@/views/teleport/ModalBase.vue'

import SuspenseMainLayout from '@/views/suspense/MainLayout.vue'
import BasicUsage from '@/views/suspense/BasicUsage.vue'

import ReactiveMainLayout from '@/views/reactive/MainLayout.vue'
import UndoAction from '@/views/reactive/UndoAction.vue'

export const ConstantRoutes: RouteRecordRaw[] = [
  {
    path: '/directive',
    name: 'Directive',
    component: DirectiveMainLayout,
    redirect: '/directive/permission',
    meta: {
      title: '指令',
      icon: 'icon-zhilingguanli',
    },
    children: [
      {
        path: 'permission',
        name: 'DirectivePermission',
        component: ButtonPermission,
        meta: {
          title: '按钮权限',
        },
      },
      {
        path: 'debounce',
        name: 'DirectiveDebounce',
        component: DebouncedInput,
        meta: {
          title: '输入框防抖',
        },
      },
    ],
  },
  {
    path: '/plugin',
    name: 'Plugin',
    redirect: '/plugin/i18n',
    component: PluginMainLayout,
    meta: {
      title: '插件',
      icon: 'icon-chajian1',
    },
    children: [
      {
        path: '/plugin/i18n',
        name: 'PluginI18n',
        component: I18nTest,
        meta: {
          title: '国际化',
        },
      },
    ],
  },
  {
    path: '/transition',
    name: 'Transition',
    redirect: '/transition/base',
    component: TransitionMainLayout,
    meta: {
      title: '动画',
      icon: 'icon-donghua',
    },
    children: [
      {
        path: 'base',
        name: 'TransitionBase',
        component: BaseTransition,
        meta: {
          title: '基础动画',
        },
      },
      {
        path: 'muilti-property',
        name: 'MuiltiProperty',
        component: MuiltiProperty,
        meta: {
          title: '过渡多个属性',
        },
      },
      {
        path: 'animation-base',
        name: 'AnimationBase',
        component: AnimationBase,
        meta: {
          title: '原生css动画',
        },
      },
      {
        path: 'animate-css',
        name: 'AnimateCss',
        component: AnimateCss,
        meta: {
          title: '使用第三方库',
        },
      },
      {
        path: 'both-animate',
        name: 'BothAnimate',
        component: BothAnimate,
        meta: {
          title: '同时使用两种动画',
        },
      },
      {
        path: 'deep-transition',
        name: 'DeepTransition',
        component: DeepTransition,
        meta: {
          title: '深层过渡',
        },
      },
      {
        path: 'js-animate',
        name: 'JsAnimate',
        component: JsAnimate,
        meta: {
          title: 'Javascript动画',
        },
      },
      {
        path: 'use-common',
        name: 'UseCommon',
        component: UseCommon,
        meta: {
          title: '复用过渡效果',
        },
      },
      {
        path: 'initial-render',
        name: 'InitialRender',
        component: InitialRender,
        meta: {
          title: '初次渲染时展示过渡',
        },
      },
      {
        path: 'switch-element',
        name: 'SwitchElement',
        component: SwitchElement,
        meta: {
          title: '元素间过渡',
        },
      },
      {
        path: 'switch-mode',
        name: 'SwitchMode',
        component: SwitchMode,
        meta: {
          title: '过渡模式',
        },
      },
      {
        path: 'switch-comp',
        name: 'SwitchComp',
        component: SwitchComp,
        meta: {
          title: '组件间过渡',
        },
      },
      {
        path: 'key-transition',
        name: 'KeyTransition',
        component: KeyTransition,
        meta: {
          title: '使用Key Attribute过渡',
        },
      },
      {
        path: 'group-base',
        name: 'GroupBase',
        component: GroupBase,
        meta: {
          title: '列表动画',
        },
      },
      {
        path: 'group-flip',
        name: 'GroupFlip',
        component: GroupFlip,
        meta: {
          title: '添加移动动画',
        },
      },
      {
        path: 'delay-transition',
        name: 'DelayTransition',
        component: DelayTransition,
        meta: {
          title: '渐进延迟列表动画',
        },
      },
    ],
  },
  {
    path: '/teleport',
    name: 'Teleport',
    redirect: '/teleport/base',
    component: TeleportMainLayout,
    meta: {
      title: 'Teleport',
      icon: 'icon-chuansong',
    },
    children: [
      {
        path: '/teleport/base',
        name: 'TeleportBase',
        component: ModalBase,
        meta: {
          title: '模态窗',
        },
      },
    ],
  },
  {
    path: '/suspense',
    name: 'Suspense',
    redirect: '/suspense/basic-usage',
    component: SuspenseMainLayout,
    meta: {
      title: 'Suspense',
      icon: 'icon-yibu',
    },
    children: [
      {
        path: '/suspense/basic-usage',
        name: 'BasicUsage',
        component: BasicUsage,
        meta: {
          title: '基础应用',
        },
      },
    ],
  },
  {
    path: '/reactive',
    name: 'Reactive',
    redirect: '/reactive/undo-action',
    component: ReactiveMainLayout,
    meta: {
      title: '响应性',
      icon: 'icon-el-icon-lift',
    },
    children: [
      {
        path: '/reactive/undo-action',
        name: 'UndoAction',
        component: UndoAction,
        meta: {
          title: '撤销/重做',
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
