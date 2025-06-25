<template>
  <div class="investor-relations">
    <HeroSection>
      <template #subtitle>{{ $t('investorRelations.subTitle') }}</template>
      <template #title>{{ $t('investorRelations.title') }}</template>
    </HeroSection>
    <div class="flex flex-col items-center">
      <div class="grid-responsive md:my-16">
        <nav
          aria-label="側邊導航"
          class="z-10 bg-base-100 col-span-4 border-b border-base-300 md:border-none md:col-span-2 lg:col-span-3 h-fit md:sticky top-18 mb-8 wow animate__slideInUp md:mb-0 md:top-28"
        >
          <ul class="w-full list-none flex flex-col lg:w-fit">
            <li v-for="item in menuItems" :key="item.id">
              <RouterLink
                :to="
                  item.path
                    ? `/investor-relations/${item.path}`
                    : '/investor-relations'
                "
                class="inline-block py-2 text-lg text-base-content/80 text-wrap btn btn-ghost w-full h-full md:text-left"
                >{{ item.name }}</RouterLink
              >
            </li>
          </ul>
        </nav>
        <div
          class="col-span-4 px-4 md:px-0 md:col-span-6 lg:col-span-9 animate__animated animate__fadeIn"
        >
          <h2>
            {{ currentItem.name }}
          </h2>
          <p class="pt-2 text-base-content/80" v-if="currentItem?.content">
            {{ currentItem.content }}
          </p>
          <div class="flex flex-col mt-8">
            <div
              class="-mx-4 flex flex-col gap-0 border-b border-base-300 last:border-none md:mx-0 md:flex-row md:gap-4"
              v-for="dateCategory in currentData"
              :key="dateCategory.date"
            >
              <div
                class="min-w-32 text-xl px-4 py-4 text-nowrap text-base-content md:px-0"
              >
                {{ dateCategory.date }}
              </div>
              <div class="w-full flex flex-col">
                <a
                  :href="`/api/file/${information.filePath}`"
                  class="w-full flex gap-4 items-start py-4 pl-4 hover:bg-base-200 active:translate-y-0.5 duration-150"
                  v-for="information in dateCategory.information"
                  :key="information.subject"
                  target="_blank"
                >
                  <div class="min-h-7 flex items-center">
                    <IconFileText
                      class="text-primary stroke-2 text-xl aspect-square"
                    />
                  </div>
                  <p class="w-full">{{ information.subject }}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, useRoute } from 'vue-router';
import HeroSection from '../components/HeroSection.vue';
import { useInvestorRelationsStore } from '../stores/investorRelations';
const { tm, rt, locale } = useI18n();

const irStore = useInvestorRelationsStore();
const { currentData, currentCategory } = storeToRefs(irStore);

const {
  switchCategory,
  refreshCategory,
  // preloadCategories,
  clearCache,
  // hasCachedData
} = irStore;

const route = useRoute();
const currentItem = computed(() => {
  const param = route.params.data ?? '';
  const item = menuItems.value.find((item) => item.path === param);
  return item || menuItems.value[0];
});

const rawMenuItems = [
  { id: 1, path: '' },
  {
    id: 2,
    path: 'listing-documents',
  },
  { id: 3, path: 'financial-reports' },
  { id: 4, path: 'corporate-governance' },
  { id: 5, path: 'monthly-returns' },
  { id: 6, path: 'document-on-display' },
];

const menuItems = computed(() => {
  return tm('investorRelations.nav')
    .map((item, index) => ({
      id: rawMenuItems[index].id,
      path: rawMenuItems[index].path,
      name: item?.name ? rt(item.name) : '',
      content: item?.content ? rt(item.content) : null,
    }))
    .filter(Boolean);
});

const refreshCurrentCategory = async () => {
  try {
    await refreshCategory(currentCategory.value);
  } catch (err) {
    console.error('重新載入失敗:', err);
  }
};

const loadCategoryData = async (cat) => {
  await irStore.fetchIRData(cat);
};

const switchToCategory = async (cat) => {
  try {
    await switchCategory(cat);
  } catch (err) {
    console.error('切換類別失敗:', err);
  }
};

// const preloadAll = async () => {
//   await preloadCategories([1, 2, 3, 4, 5])
// }

const clearAllCache = () => {
  clearCache();
};

watch(
  locale,
  async (newLocale) => {
    await refreshCurrentCategory();
  },
  { immediate: true },
);

watch(
  currentItem,
  async (newItem) => {
    await switchToCategory(newItem.id);
  },
  { immediate: true },
);

onMounted(async () => {});
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  font-weight: 600;
  color: var(--color-info);
}
</style>
