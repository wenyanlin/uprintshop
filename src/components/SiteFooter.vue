<template>
  <footer class="w-full bg-base-content dark:bg-base-100">
    <div class="grid-responsive py-4">
      <div
        class="col-full flex flex-col justify-between items-center gap-4 *:text-base-100 *:dark:text-base-content/50 px-2 sm:px-0 2xl:flex-row"
      >
        <p>
          {{ t('common.footer.copyright') }}
        </p>

        <ul
          class="menu menu-horizontal list-none hidden flex-wrap -order-1 md:flex 2xl:order-none"
        >
          <li v-for="item in menu" :key="item.name">
            <RouterLink
              :to="`/${item.path}`"
              class="w-full btn btn-ghost uppercase px-3"
              >{{ $t(item.i18nKey) }}</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const menu = ref([
  {
    i18nKey: 'common.nav.about_us',
    path: 'about-us',
  },
  {
    i18nKey: 'common.nav.milestone',
    path: 'milestone',
  },
  {
    i18nKey: 'common.nav.corporate_information',
    path: 'corporate-information',
  },
  {
    i18nKey: 'common.nav.our_businesses',
    path: 'our-businesses',
  },
  {
    i18nKey: 'common.nav.investor_relations',
    path: 'investor-relations',
  },
  {
    i18nKey: 'common.nav.contact_us',
    path: 'contact-us',
  },
  {
    i18nKey: 'common.footer.privacy',
    path: 'about-us',
  },
]);
</script>

<style lang="scss" scoped></style>
