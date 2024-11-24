import './assets/tailwind.css'
import './assets/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask';

const app = createApp(App)
app.use(VueTheMask)
app.use(router)

app.use(createPinia())
app.mount('#app')
