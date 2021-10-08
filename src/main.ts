import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import lodash from 'lodash'

const app = createApp(App)


app.use(routes)
app.config.globalProperties._ = lodash
app.mount('#app')
