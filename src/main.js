import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

const app = createApp(App)

console.log(import.meta.env.VITE_SERVER_IP)
app.use(router)
app.mount('#app')
