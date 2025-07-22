import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/routes'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')