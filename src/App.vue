<template>
  <Navigation />
  <transition name="fade" mode="out-in">
    <main class="min-h-screen">
      <RouterView />
    </main>
  </transition>
  <SiteFooter />
  <BackToTop class="fixed right-4 bottom-24 text-primary" />
</template>

<script setup>
import Cookies from 'js-cookie';
import { useI18n } from 'vue-i18n';
import BackToTop from './components/BackToTop.vue';
import SiteFooter from './components/SiteFooter.vue';
import Navigation from './components/SiteHeader.vue';

const { locale } = useI18n();
watch(
  locale,
  async (newLocale) => {
    document.documentElement.setAttribute('lang', newLocale);
    localStorage.setItem('locale', newLocale);
    Cookies.set('SiteLanguage', newLocale, { expires: 365, path: '/' });
  },
  { immediate: true },
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
