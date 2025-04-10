// src/globalProperties.js
export default {
  install(app) {
    app.config.globalProperties.$isDev = import.meta.env.DEV
    app.config.globalProperties.$appName = 'Speedy Bites'
  },
}
