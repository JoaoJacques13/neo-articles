import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import router from './router'
import store from './store'
import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

createApp(App)
    .use(vuetify)
    .use(router)
    .use(store)
    .mount('#app')
