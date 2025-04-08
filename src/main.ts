import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/base.css'

import App from './App.vue'
import router from './router'

import usePermission from '@/directives/permission'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('permission', usePermission)

app.mount('#app')
