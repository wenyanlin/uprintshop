<template>
  <div
    class="relative w-fit h-fit border rounded-(--radius-box) overflow-hidden flex items-center"
    :class="
      (isScrolled ? 'border-base-content' : 'border-base-100',
      'dark:border-base-content')
    "
  >
    <span
      class="absolute top-0 h-full transition-transform duration-150 ease-out z-0"
      :class="[
        props.isScrolled ? 'bg-base-content' : 'bg-base-100',
        'dark:bg-base-content',
      ]"
      :style="backgroundStyle"
    >
    </span>
    <button
      v-for="lang in languages"
      :key="lang.code"
      class="h-7 relative border-none transition-colors duration-150 ease-in-out uppercase cursor-pointer text-xs px-2 leading-normal text-nowrap focus:outline-none md:text-sm"
      :style="{ width: `calc(100% / ${languages.length})` }"
      :class="[getTextClass(lang.position), lang.font]"
      @click="switchButton(lang)"
    >
      {{ lang.text }}
    </button>
  </div>
</template>

<script setup>
import Cookies from 'js-cookie';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const languages = [
  { code: 'zh', text: '繁中', position: 'left', font: 'font-noto-sans-tc!' },
  { code: 'en', text: 'ENG', position: 'right', font: 'font-figtree!' },
];
const { locale } = useI18n();
const props = defineProps({
  isScrolled: {
    type: Boolean,
    default: false,
  },
});

const findLangByCode = (code) => languages.find((lang) => lang.code === code);
const initialLang = findLangByCode(Cookies.get('SiteLanguage')) || languages[0];
const active = ref(initialLang.position);

const switchButton = (lang) => {
  active.value = lang.position;
  locale.value = lang.code;
  Cookies.set('SiteLanguage', lang.code);
};

const getTextClass = (buttonPosition) => {
  const isButtonActive = active.value === buttonPosition;
  const lightClass =
    isButtonActive !== props.isScrolled ? 'text-base-content' : 'text-base-100';
  const darkClass = isButtonActive
    ? 'dark:text-base-100'
    : 'dark:text-base-content';
  return [lightClass, darkClass];
};

const backgroundStyle = computed(() => {
  const count = languages.length;
  const index = languages.findIndex((lang) => lang.position === active.value);
  return {
    width: `${100 / count}%`,
    transform: `translateX(${index * 100}%)`,
  };
});
</script>

<style lang="scss" scoped></style>
