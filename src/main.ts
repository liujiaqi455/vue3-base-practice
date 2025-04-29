import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/base.css'
import 'animate.css'

import '//at.alicdn.com/t/c/font_4899829_dbpnpe0ev2m.js'

import App from './App.vue'
import router from './router'

import usePermissionBase from '@/directives/permissionBase'
import useDebounce from '@/directives/debounce'

import i18n from './plugins/i18n'

import SvgIcon from '@/components/SvgIcon.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('permissionBase', usePermissionBase)
app.directive('debounce', useDebounce)

app.component('SvgIcon', SvgIcon)

app.use(i18n, {
  greetings: {
    hello: '你好',
  },
})

app.mount('#app')
