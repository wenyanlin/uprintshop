<template>
  <nav
    class="navbar z-40 fixed top-0 transition-colors border-b duration-500 flex flex-col"
    :class="[
      isScrolled
        ? 'bg-base-100 text-base-content border-base-300'
        : 'bg-neutral/0 text-base-100 border-transparent dark:*:text-base-content  ',
    ]"
  >
    <div class="grid-responsive navbar__inner">
      <div class="col-full flex relative">
        <div class="flex-1 py-2">
          <RouterLink
            to="/"
            class="h-12 btn btn-ghost md:h-16 origin-top-left transition-transform duration-300"
            :class="[isScrolled ? 'xl:scale-100' : 'xl:scale-120']"
            ><Logo
          /></RouterLink>
        </div>
        <div class="hidden xl:flex items-center pr-2" @mouseleave="closeSubnav">
          <ul
            class="menu menu-horizontal flex list-none relative"
            @click="closeSubnav"
          >
            <li
              v-for="(item, index) in menu"
              :key="item.name"
              @mouseenter="openSubnav(index)"
              :class="[
                isScrolled
                  ? 'text-base-content'
                  : 'text-base-100 dark:text-base-content  ',
              ]"
            >
              <RouterLink
                :to="`/${item.path}`"
                class="btn btn-ghost uppercase px-3"
                >{{ $t(item.i18nKey) }}</RouterLink
              >
              <ul
                class="absolute top-14 list-none border rounded-(--radius-box) overflow-hidden shadow-xl"
                :class="[
                  isScrolled
                    ? 'bg-base-100 text-base-content border-base-300'
                    : 'bg-neutral/60 text-base-100 border-base-300/50 dark:bg-base-100',
                ]"
                v-if="item.children && isSubNavOpend[index]"
              >
                <li
                  v-for="subitem in item.children"
                  :key="subitem"
                  class="not-last:border-b"
                  :class="[
                    isScrolled
                      ? 'border-base-300'
                      : 'border-base-300/50 dark:*:text-base-content  ',
                  ]"
                >
                  <RouterLink
                    :to="`/${subitem.path}`"
                    class="justify-start w-full btn btn-ghost border-none rounded-none uppercase"
                    >{{ $t(subitem.i18nKey) }}</RouterLink
                  >
                </li>
              </ul>
            </li>
          </ul>
          <div class="text-xl flex items-center *:p-2">
            <div><IconUseDark /></div>
            <div>
              <!-- <IconLanguages /> -->
              <SwitchButton :is-scrolled="isScrolled" />
            </div>
            <!-- <div class="flex">
              <button
                v-for="lang in availableLocales"
                :key="lang"
                @click="switchLocale(lang)"
                :disabled="locale === lang"
                class="btn btn-tighter"
              >
                {{ lang === 'en' ? 'Eng' : '繁中' }}
              </button>
            </div> -->
          </div>
        </div>
        <div class="xl:hidden flex items-center">
          <div class="text-xl flex items-center *:p-2 md:mr-2">
            <div><IconUseDark /></div>
            <div>
              <SwitchButton :is-scrolled="isScrolled" />
              <!-- <IconLanguages /> -->
            </div>
          </div>
          <button
            @click="toggleMobileMenu"
            class="btn btn-ghost btn-tighter md:mr-4"
            :class="{ 'btn-active': isMobileMenuOpen }"
          >
            <svg
              class="w-6 h-6 transition-transform duration-300 pointer-events-none"
              :class="{ 'rotate-90': isMobileMenuOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="isMobileMenuOpen"
      class="w-full border-y border-base-300 bg-base-100 xl:hidden"
    >
      <ul class="menu menu-vertical w-full list-none">
        <li v-for="item in menu" :key="item.i18nKey">
          <RouterLink
            :to="`/${item.path}`"
            class="w-full btn btn-ghost rounded-none text-base-content"
            @click="closeMobileMenu"
            ><span class="container mx-auto text-left">{{
              $t(item.i18nKey)
            }}</span></RouterLink
          >
          <ul class="menu menu-vertical w-full list-none">
            <li v-for="subitem in item.children" :key="subitem.i18nKey">
              <RouterLink
                :to="`/${subitem.path}`"
                class="w-full btn btn-ghost rounded-none text-base-content"
                @click="closeMobileMenu"
                ><span class="container mx-auto text-left">{{
                  $t(subitem.i18nKey)
                }}</span></RouterLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import Logo from '@/components/images/logo.vue';
// import { preLoadCommonModules } from '@/i18n';
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import SwitchButton from './switchButton.vue';

const route = useRoute();
const menu = ref([
  {
    i18nKey: 'nav.aboutUs',
    path: 'about-us',
    children: [
      {
        i18nKey: 'nav.milestone',
        path: 'milestone',
      },
      {
        i18nKey: 'nav.corporateInformation',
        path: 'corporate-information',
      },
    ],
  },
  // {
  //   i18nKey: 'nav.milestone',
  //   path: 'milestone',
  // },
  // {
  //   i18nKey: 'nav.corporateInformation',
  //   path: 'corporate-information',
  // },
  {
    i18nKey: 'nav.ourFocus',
    path: 'our-focus',
  },
  {
    i18nKey: 'nav.ourBusinesses',
    path: 'our-businesses',
  },
  {
    i18nKey: 'nav.investorRelations',
    path: 'investor-relations',
  },
  {
    i18nKey: 'nav.contactUs',
    path: 'contact-us',
  },
]);
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isSubNavOpend = ref(new Array(menu.value.length).fill(false));

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// 監聽路由變化，自動關閉手機選單
watch(route, () => {
  closeMobileMenu();
});

// 監聽視窗大小變化，在桌面端自動關閉手機選單
const handleResize = () => {
  if (window.innerWidth >= 1280) {
    closeMobileMenu();
  }
};

// 點擊外部區域關閉選單
const handleClickOutside = (event) => {
  if (isMobileMenuOpen.value && !event.target.closest('.navbar')) {
    closeMobileMenu();
  }
};

const openSubnav = (index) => {
  isSubNavOpend.value = isSubNavOpend.value.map(() => false);
  isSubNavOpend.value[index] = true;
};

const closeSubnav = () => {
  isSubNavOpend.value = isSubNavOpend.value.map(() => false);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style lang="scss" scoped></style>
