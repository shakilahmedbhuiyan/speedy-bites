import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)

app.info = {
  name: 'Speedy Bites',
}
app.config.globalProperties.$appName = app.info.name
app.mount('#app')
