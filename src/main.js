import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import router from './router'
import globalProperties from './globalProperties'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.use(globalProperties)

app.mount('#app')
