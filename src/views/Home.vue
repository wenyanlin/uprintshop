<template>
  <div class="home overflow-hidden">
    <CarouselSection class="min-h-screen" />
    <div class="flex flex-col items-end">
      <FeaturedSection></FeaturedSection>
      <section
        class="home__our-businesses relative mb-32 before:h-[calc(100%-8rem)] md:before:h-[calc(100%-5rem)]"
      >
        <div class="grid-responsive pt-16 px-4 lg:px-0 xl:px-20 lg:pt-32">
          <div
            class="col-span-4 md:col-span-6 lg:pb-12 *:text-base-100 lg:col-span-7"
          >
            <p class="pb-2 text-neutral-100!">
              {{ $t('homepage.sections.ourBusinesses.label') }}
            </p>
            <h3
              class="uppercase text-neutral-100!"
              v-html="
                $t('homepage.sections.ourBusinesses.title').replace(
                  /\n/g,
                  '<br>',
                )
              "
            ></h3>
          </div>
          <div
            class="col-span-2 h-full items-end hidden md:flex lg:col-span-5 lg:pb-12"
          >
            <div class="w-full flex items-center gap-8 h-fit">
              <div class="w-2/3 h-px bg-base-100 hidden lg:flex"></div>
              <RouterLink
                to="/our-businesses"
                class="btn btn-outline btn-wide h-fit hidden md:flex"
                >{{ $t('homepage.sections.ourBusinesses.cta') }}</RouterLink
              >
            </div>
          </div>
          <div
            class="col-span-4 flex gap-1 md:col-span-8 lg:col-span-10 lg:col-start-3 md:gap-8 wow animate__slideInUp"
          >
            <a
              href="https://www.123print.com.hk/"
              target="_blank"
              v-for="(item, index) in ourBusiness"
              :key="item.alt"
              class="flex-1 flex justify-center items-center bg-base-100 py-4 px-2 md:px-16 md:py-8 rounded-(--radius-box) border border-base-300 dark:bg-base-100/80 backdrop-blur"
            >
              <img
                :src="item.src"
                :alt="
                  $t(`homepage.sections.ourBusinesses.businesses.${index}.alt`)
                "
              />
            </a>
          </div>
          <div class="col-full flex justify-center md:hidden">
            <RouterLink
              to="/our-businesses"
              class="btn btn-neutral btn-wide h-fit"
              >{{ $t('homepage.sections.ourBusinesses.cta') }}</RouterLink
            >
          </div>
        </div>
      </section>
      <section class="home__milestone mt-8 mb-32">
        <div class="grid-responsive px-8 lg:px-0">
          <div class="col-full flex justify-center items-end mb-16">
            <div class="text-center">
              <p class="text-primary pb-2">
                {{ $t('homepage.sections.milestone.label') }}
              </p>
              <h2
                class="uppercase"
                v-html="
                  $t('homepage.sections.milestone.title').replace(/\n/g, '<br>')
                "
              ></h2>
            </div>
          </div>
          <div
            class="milestone__timeline col-span-4 md:col-span-8 lg:col-start-3 relative mb-16"
          >
            <div>
              <div
                class="milestone__timeline__item milestone-responsive grid md:flex gap-x-8 gap-y-4 md:gap-12 mb-16 last:mb-0 wow animate__slideInUp"
                v-for="milestone in milestones"
                :key="milestone"
              >
                <div
                  class="milestone-image w-full md:w-64 h-fit aspect-video bg-base-200 overflow-hidden rounded-(--radius-box)"
                >
                  <img src="" alt="" />
                </div>
                <span
                  class="milestone-dot relative mt-5 w-4 h-4 aspect-square bg-primary rounded-full flex-shrink-0"
                ></span>
                <div class="milestone-content flex-1">
                  <div
                    class="font-figtree text-3xl lg:text-5xl font-bold text-base-content mb-4"
                  >
                    {{ milestone.year }}
                  </div>
                  <div
                    class="text-lg lg:text-xl text-base-content/80"
                    v-html="milestone.content"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="absolute top-6 left-2 -translate-x-1/2 w-1 h-full bg-base-200 -z-10 wow animate__slideInUp md:h-[calc(100%-9rem)] md:left-78"
            ></div>
          </div>
          <div class="col-full flex justify-center">
            <RouterLink
              to="/milestone"
              class="btn btn-wide btn-neutral h-fit"
              >{{ $t('homepage.sections.milestone.cta') }}</RouterLink
            >
          </div>
        </div>
      </section>
      <section
        class="home__investor-relations bg-[url(/images/bg-6.jpg)] bg-top bg-cover"
      >
        <div class="grid-responsive py-24 lg:py-48">
          <div
            class="col-span-4 p-8 bg-base-100/80 backdrop-blur sm:rounded-(--radius-box) md:m-0 md:p-16 md:col-span-8 lg:col-start-3 wow animate__slideInUp"
          >
            <h3 class="pb-4">
              {{ $t('homepage.sections.introduction.title') }}
            </h3>
            <p class="text-base-content">
              {{ $t('homepage.sections.introduction.content') }}
            </p>
          </div>
        </div>
      </section>
    </div>
    <ContactSection class="wow animate__slideInUp"></ContactSection>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import CarouselSection from '../components/CarouselSection.vue';
import ContactSection from '../components/ContactSection.vue';
import FeaturedSection from '../components/FeaturedSection.vue';
import { parseMarkdown } from '../utils/markdown.js';

const { tm, rt } = useI18n();

const rawMilestones = [
  {
    id: '2024-1',
    year: 2024,
    content: '開始大規模海外業務交付',
    highlight: '全球拓展',
  },
  {
    id: '2018-1',
    year: 2018,
    content: '環球印館控股有限公司在香港聯合交易所GEM上市',
    highlight: '公開上市',
  },
  {
    id: '2005-1',
    year: 2005,
    content: '推出「Print Shop」連鎖店印刷服務概念，開創香港印刷零售新模式',
    highlight: '品牌創立',
  },
  {
    id: '2003-1',
    year: 2003,
    content: '環球印刷註冊成立，以「Universe」品牌開始商業營運',
    highlight: '集團成立',
  },
];

const ourBusiness = [
  {
    url: 'https://www.123print.com.hk/',
    src: '/images/logo__123print.png',
  },
  {
    url: 'https://www.printshop.hk/',
    src: '/images/logo__print-shop.png',
  },
];

const milestones = computed(() => {
  return tm('homepage.sections.milestone.items')
    .map((milestone) => ({
      id: rt(milestone.id),
      year: rt(milestone.year),
      content: parseMarkdown(rt(milestone.content)),
      highlight: rt(milestone.highlight),
    }))
    .filter(Boolean);
});
</script>

<style lang="scss" scoped>
.home {
  &__our-businesses {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--color-primary);
      width: 100%;
      z-index: -1;
    }
  }

  &__milestone {
    .milestone-responsive {
      grid-template-areas:
        'dot image'
        'dot content';
      grid-template-columns: auto 1fr;
    }

    .milestone-dot {
      grid-area: dot;
    }

    .milestone-image {
      grid-area: image;
    }

    .milestone-content {
      grid-area: content;
    }
    .milestone__timeline__item:first-of-type span {
      &::after {
        content: '';
        position: absolute;
        display: block;
        top: -0.5rem;
        left: -0.5rem;
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        border: 1px var(--color-primary) solid;
        animation: wave 2s ease-in-out 0s infinite;
      }
      &::before {
        content: '';
        position: absolute;
        display: block;
        top: -0.5rem;
        left: -0.5rem;
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        border: 1px var(--color-primary) solid;
        animation: wave 2s ease-in-out 0.6s infinite;
      }
    }

    @keyframes wave {
      0% {
        transform: scale(0);
      }
      75% {
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  }
}
</style>
