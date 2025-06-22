// import 'element-plus/dist/index.css';
// import 'element-plus/theme-chalk/dark/css-vars.css';
import './assets/styles/main.css';
import i18n from './i18n';
// import pinia from './store';
import IconsPlugin from '@/components/icons';
import Lenis from '@studio-freight/lenis';
import 'animate.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import WOW from 'wow.js';
import App from './App.vue';
import router from './router';

const lenis = new Lenis({
  lerp: 0.1, // 預設是 0.1，數值越小越「黏」，可以根據喜好調整
  wheelMultiplier: 1, // 滾輪速度倍率，預設為 1
  smoothWheel: true, // 確保在所有設備上都有平滑滾動
});

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(IconsPlugin);
app.use(pinia);
app.provide('lenis', lenis);
app.mount('#app');

new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: true,
  live: true,
}).init();

function raf(time) {
  lenis.raf(time); // 讓 Lenis 更新滾動位置
  requestAnimationFrame(raf); // 請求下一幀繼續執行
}

requestAnimationFrame(raf);
