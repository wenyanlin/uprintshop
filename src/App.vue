<template>
  <Navigation />
  <main class="min-h-dvh">
    <RouterView />
  </main>
  <SiteFooter />
  <BackToTop class="fixed right-4 bottom-24 text-primary" />
</template>

<script setup>
import Cookies from 'js-cookie';
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';
import BackToTop from './components/BackToTop.vue';
import SiteFooter from './components/SiteFooter.vue';
import Navigation from './components/SiteHeader.vue';

const route = useRoute();
const lenis = inject('lenis');

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

watch(
  () => route.path,
  () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0, immediate: true });
    }
  },
);
</script>

<style scoped></style>
