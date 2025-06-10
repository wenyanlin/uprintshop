<template>
  <section class="carousel-section relative flex md:justify-center h-screen">
    <div
      class="absolute bottom-0 left-0 w-full bg-linear-to-b from-transparent from-10 to-neutral-800 dark:to-base-100 hidden md:block"
    >
      <div class="grid-responsive items-center">
        <div
          class="col-full flex flex-col gap-8 pt-16 py-14 space-x-8 px-4 xl:px-0 md:flex-row"
        >
          <BasicCard
            to="/milestone"
            :text="$t('homepage.carousel.infoCards.milestone.cta')"
            icon="IconMilestone"
            icon-color="text-neutral-100"
          >
            <template #title>{{
              $t('homepage.carousel.infoCards.milestone.title')
            }}</template>
            <template #content>{{
              $t('homepage.carousel.infoCards.milestone.content')
            }}</template>
          </BasicCard>
          <BasicCard
            to="/corporate-information"
            :text="$t('homepage.carousel.infoCards.corporate.cta')"
            icon="IconBuilding"
            icon-color="text-neutral-100"
          >
            <template #title>{{
              $t('homepage.carousel.infoCards.corporate.title')
            }}</template>
            <template #content>{{
              $t('homepage.carousel.infoCards.corporate.content')
            }}</template>
          </BasicCard>
          <BasicCard
            to="/our-businesses"
            :text="$t('homepage.carousel.infoCards.group.cta')"
            icon="IconGroup"
            icon-color="text-neutral-100"
          >
            <template #title>{{
              $t('homepage.carousel.infoCards.group.title')
            }}</template>
            <template #content>{{
              $t('homepage.carousel.infoCards.group.content')
            }}</template>
          </BasicCard>
        </div>
      </div>
    </div>
    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      :class="[{ active: currentIndex === index }]"
      class="carousel-image absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center -z-10"
    >
      <img
        :src="slide.image"
        :alt="$t(`homepage.carousel.slides.${index}.alt`)"
        class="w-full h-full object-cover brightness-50"
      />
    </div>

    <div
      class="grid-responsive items-center relative my-0 md:mb-32 min-h-48 px-4 lg:px-0"
      @mouseenter="pauseAutoPlay"
      @mouseleave="resumeAutoPlay"
    >
      <div
        class="font-figtree col-span-1 hidden flex-col justify-center gap-4 px-4 md:flex lg:col-span-2"
      >
        <div
          v-for="(_, index) in slides"
          :key="index"
          class="carousel-indicator w-4 text-center leading-none cursor-pointer relative text-neutral-300 hover:text-neutral-100"
          :class="[{ active: currentIndex === index }]"
          @click="goTo(index)"
        >
          {{ String(index + 1).padStart(2, '0') }}
        </div>
      </div>
      <!-- <div class="col-span-2 flex gap-4 pl-1 md:hidden">
        <div
          v-for="(_, index) in slides"
          :key="index"
          class="w-4 text-center leading-none cursor-pointer relative text-neutral-300 hover:text-neutral-100"
          :class="[{ 'text-primary': currentIndex === index }]"
          @click="goTo(index)"
        >
          {{ String(index + 1).padStart(2, '0') }}
        </div>
      </div> -->
      <div
        class="col-span-4 w-full min-h-56 relative md:min-h-full md:col-span-6 lg:col-span-9 lg:col-start-3"
      >
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          :class="[{ active: currentIndex === index }]"
          class="carousel-item absolute left-0 space-y-8"
        >
          <div class="*:text-white">
            <div
              class="carousel-item__title text-5xl font-medium tracking-wide pb-4 flex flex-col md:text-6xl lg:block"
            >
              <span class="uppercase pb-2 lg:pb-0">{{
                $t(`homepage.carousel.slides.${index}.title`)
              }}</span>
              <span class="uppercase font-light lg:pl-4">{{
                $t(`homepage.carousel.slides.${index}.lightTitle`)
              }}</span>
            </div>
            <p class="carousel-item__subtitle font-light">
              {{ $t(`homepage.carousel.slides.${index}.subtitle`) }}
            </p>
          </div>
          <RouterLink
            :to="slide.btnPath"
            class="carousel-item__btn btn btn-primary btn-wide"
            >{{ $t(`homepage.carousel.slides.${index}.cta`) }}
          </RouterLink>
        </div>
      </div>
      <div
        class="col-span-2 absolute -top-16 h-fit flex items-end text-5xl text-neutral-300 *:stroke-1 *:cursor-pointer md:static md:col-span-1 md:col-start-8 lg:col-start-12 md:flex-col md:justify-end"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          style="width: 1em; height: 1em"
          class="-rotate-90 transition-colors duration-150 hover:text-neutral-100 md:rotate-0"
          @click="prev()"
        >
          <path d="m8 14 4-4 4 4" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          style="width: 1em; height: 1em"
          class="-rotate-90 transition-colors duration-150 hover:text-neutral-100 md:rotate-0"
          @click="next()"
        >
          <path d="m16 10-4 4-4-4" />
        </svg>
      </div>
    </div>
  </section>
  <section class="md:hidden">
    <div class="w-full bg-base-200">
      <div class="grid-responsive items-center px-16">
        <div class="col-full flex flex-col gap-16 py-16">
          <div class="text-center space-y-4 wow animate__slideInUp">
            <h4 class="uppercase">
              {{ $t('homepage.carousel.infoCards.milestone.title') }}
            </h4>
            <p>
              {{ $t('homepage.carousel.infoCards.milestone.content') }}
            </p>
            <RouterLink
              to="/milestone"
              class="btn btn-neutral btn-wide w-fit"
              >{{ $t('homepage.carousel.infoCards.milestone.cta') }}</RouterLink
            >
          </div>
          <div class="text-center space-y-4 wow animate__slideInUp">
            <h4 class="uppercase">
              {{ $t('homepage.carousel.infoCards.corporate.title') }}
            </h4>
            <p>
              {{ $t('homepage.carousel.infoCards.corporate.content') }}
            </p>
            <RouterLink
              to="/corporate-information"
              class="btn btn-neutral btn-wide w-fit"
              >{{ $t('homepage.carousel.infoCards.corporate.cta') }}</RouterLink
            >
          </div>
          <div class="text-center space-y-4 wow animate__slideInUp">
            <h4 class="uppercase">
              {{ $t('homepage.carousel.infoCards.group.title') }}
            </h4>
            <p>
              {{ $t('homepage.carousel.infoCards.group.content') }}
            </p>
            <RouterLink
              to="/our-businesses"
              class="btn btn-neutral btn-wide w-fit"
              >{{ $t('homepage.carousel.infoCards.group.cta') }}</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import BasicCard from './BasicCard.vue';

const slides = ref([
  {
    id: 1,
    image: '/images/carousel/01.png',
    // alt: '輪播圖',
    // title: '重新定義可能',
    // lightTitle: '成就非凡印象',
    // subtitle:
    //   '在印刷行業深耕25年，我們構建了從印前設計到後期工藝的全鏈條能力體系。',
    // cta: '關於我們',
    btnPath: '/about-us',
  },
  {
    id: 2,
    image: '/images/carousel/02.jpg',
    // alt: '輪播圖',
    // title: '突破傳統思維',
    // lightTitle: '開創嶄新格局',
    // subtitle:
    //   '在印刷行業深耕25年，我們構建了從印前設計到後期工藝的全鏈條能力體系。',
    // cta: '關於我們',
    btnPath: '/about-us',
  },
  {
    id: 3,
    image: '/images/carousel/03.jpg',
    // alt: '輪播圖',
    // title: '改寫遊戲規則',
    // lightTitle: '帶來深刻改變',
    // subtitle:
    //   '在印刷行業深耕25年，我們構建了從印前設計到後期工藝的全鏈條能力體系。',
    // cta: '關於我們',
    btnPath: '/about-us',
  },
]);

const currentIndex = ref(0);
let autoPlayTimer = null;
const isPaused = ref(false);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prev = () => {
  currentIndex.value =
    currentIndex.value === 0 ? slides.value.length - 1 : currentIndex.value - 1;
};

const goTo = (index) => {
  currentIndex.value = index;
};

const startAutoPlay = () => {
  if (!isPaused.value) {
    autoPlayTimer = setInterval(next, 8000);
  }
};

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

const pauseAutoPlay = () => {
  isPaused.value = true;
  stopAutoPlay();
};

const resumeAutoPlay = () => {
  isPaused.value = false;
  startAutoPlay();
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<style lang="scss" scoped>
.move {
  transform: translateY(100%);
}
.carousel-image {
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 1.2s ease,
    visibility 1.2s ease;

  &.active {
    opacity: 1;
    visibility: visible;
  }
}
.carousel-item {
  visibility: hidden;
  opacity: 0;
  transform:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  .carousel-item__title,
  .carousel-item__subtitle,
  .carousel-item__btn {
    animation: none;
    opacity: 0;
  }

  &.active {
    visibility: visible;
    opacity: 1;
    .carousel-item__title {
      animation: fadeInUp 1.2s ease-in-out forwards;
    }
    .carousel-item__subtitle {
      animation: fadeInUp 1.2s 0.3s ease-in-out forwards;
    }
    .carousel-item__btn {
      animation: fadeInUp 1.2s 0.6s ease-in-out forwards;
    }
  }
}

.carousel-indicator {
  height: 1rem;
  // background-color: color-mix(
  //   in oklab,
  //   var(--color-neutral-200) 60%,
  //   transparent
  // );
  border-radius: var(--radius-box);
  transition:
    height 0.5s linear,
    color 0.15s ease-in-out;
  &::after {
    content: '';
    position: absolute;
    top: 1.5rem;
    width: 1px;
    height: 0;
    background-color: color-mix(
      in oklab,
      var(--color-neutral-200) 60%,
      transparent
    );
    transition: height 0.5s linear;
  }

  &.active {
    font-weight: 600;
    color: var(--color-primary);
    height: 8rem;
    // background-color: color-mix(
    //   in oklab,
    //   var(--color-primary) 60%,
    //   transparent
    // );
    &::after {
      height: 6rem;
    }
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(1rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
