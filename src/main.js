import './assets/tailwind.css'
import './assets/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { IMaskDirective } from 'vue-imask';
const app = createApp(App)

app.directive('imask', IMaskDirective);
app.use(router)

app.use(createPinia())
app.mount('#app')
