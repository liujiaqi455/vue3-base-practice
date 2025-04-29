import { type App, type Plugin } from 'vue'

export default {
  install(app: App, options) {
    app.config.globalProperties.$t = (path) => {
      return path.split('.').reduce((acc, current) => {
        return acc?.[current]
      }, options)
    }
  },
} as Plugin
