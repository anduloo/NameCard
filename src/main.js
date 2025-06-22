import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import '../web/iconfonts/iconfont.js'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.mount('#app') 