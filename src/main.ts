import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import lodash from 'lodash'
import { createPinia } from 'pinia'

const app = createApp(App)

app.config.globalProperties._ = lodash

app.use(createPinia())
app.use(routes)
app.mount('#app')
