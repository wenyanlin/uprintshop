// import 'element-plus/dist/index.css';
// import 'element-plus/theme-chalk/dark/css-vars.css';
import './assets/styles/main.css';
import i18n from './i18n';
// import pinia from './store';
import IconsPlugin from '@/components/icons';
import 'animate.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import WOW from 'wow.js';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(IconsPlugin);
app.use(pinia);
app.mount('#app');

new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: -100,
  mobile: true,
  live: true,
}).init();
