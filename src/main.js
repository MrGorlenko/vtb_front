import { createApp } from 'vue'
import App from './App.vue'

import { Vue3Mq } from "vue3-mq"

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(Vue3Mq, {
  preset: 'wordpress'
})
app.use(VueAxios, axios)
app.mount('#app')
