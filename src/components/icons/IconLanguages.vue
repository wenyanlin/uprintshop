<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    style="width: 1em; height: 1em"
    class="cursor-pointer stroke-current stroke-2"
    @click="toggleLocale"
  >
    <g>
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
    </g>
    <g>
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </g>
  </svg>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const availableLocales = ref(['en', 'zh']);

const toggleLocale = () => {
  const currentIndex = availableLocales.value.indexOf(locale.value);
  // 計算下一個語言的索引，實現循環切換
  const nextIndex = (currentIndex + 1) % availableLocales.value.length;
  const newLocale = availableLocales.value[nextIndex];
  // 如果新的語言與當前不同，則進行切換
  if (locale.value !== newLocale) {
    locale.value = newLocale;
  }
};
</script>
