import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'




const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')