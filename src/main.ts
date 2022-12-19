import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.scss'
import store from './core/store'
import router from './core/router'



const app = createApp(App)

app.use(store).use(router).mount('#app')
