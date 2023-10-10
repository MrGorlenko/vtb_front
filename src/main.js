import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import { Vue3Mq } from "vue3-mq"
import axios from 'axios'
import VueAxios from 'vue-axios'
import { initYandexMetrika } from 'yandex-metrika-vue3';

import App from './App.vue'

const routes = [
  { path: '/', component: () => import('./App.vue') },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});

const app = createApp(App)
app.use(Vue3Mq, {
  preset: 'wordpress'
});
app.use(VueAxios, axios);
app.use(initYandexMetrika, {
  router,
  id: 95199342,
  env: process.env.NODE_ENV || 'production',
  options: {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  },
});
app.mount('#app');
