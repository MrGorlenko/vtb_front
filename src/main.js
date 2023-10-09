import { createApp } from 'vue'
import { Vue3Mq } from "vue3-mq"
import axios from 'axios'
import VueAxios from 'vue-axios'
import { initYandexMetrika } from 'yandex-metrika-vue3';

import App from './App.vue'

const app = createApp(App)
app.use(Vue3Mq, {
  preset: 'wordpress'
});
app.use(VueAxios, axios);
app.use(initYandexMetrika, {
  id: 95199342,
  options: {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  },
});
app.mount('#app');
