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
            class="col-span-4 md:col-span-6 lg:pb-12 *:text-base-100 lg:col-span-7 wow animate__fadeIn"
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
              <div
                class="w-2/3 h-px bg-base-100 hidden lg:flex dark:bg-base-content wow animate__fadeInLeft"
                data-wow-delay=".1s"
              ></div>
              <RouterLink
                to="/our-businesses"
                class="btn btn-outline btn-arrow btn-wide h-fit hidden md:flex wow animate__fadeIn"
                data-wow-delay=".2s"
                >{{ $t('homepage.sections.ourBusinesses.cta') }}</RouterLink
              >
            </div>
          </div>
          <div
            class="col-span-4 flex gap-1 md:col-span-8 lg:col-span-10 lg:col-start-3 md:gap-8"
          >
            <a
              href="https://www.123print.com.hk/"
              target="_blank"
              v-for="(item, index) in ourBusiness"
              :key="item.alt"
              class="home__our-businesses__brand flex-1 flex justify-center items-center py-4 px-2 transition-filter duration-300 ease-in-out md:px-16 md:py-8 rounded-(--radius-box) border border-base-300 backdrop-blur after:bg-base-100 dark:after:bg-base-content dark:border-base-content before:hidden md:before:block wow animate__slideInUp"
              :data-wow-delay="`${index * 0.1}s`"
            >
              <img
                :src="item.src"
                :alt="
                  $t(`homepage.sections.ourBusinesses.businesses.${index}.alt`)
                "
              />
            </a>
          </div>
          <div
            class="col-full flex justify-center md:hidden wow animate__slideInUp"
          >
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
            <div class="text-center wow animate__fadeInUp">
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
                  <img
                    :src="`images/milestone/${milestone.year}.jpg`"
                    :alt="milestone.year"
                    class="w-full h-full grayscale-50 object-cover transition-filter duration-300 ease-in-out"
                  />
                </div>
                <span
                  class="milestone-dot relative mt-5 w-4 h-4 aspect-square bg-neutral/80 rounded-full flex-shrink-0 transition-all duration-300 ease-in-out"
                ></span>
                <div class="milestone-content flex-1">
                  <div
                    class="milestone-content__year font-figtree text-3xl lg:text-5xl font-bold text-base-content mb-4"
                  >
                    {{ milestone.year }}
                  </div>
                  <div
                    class="milestone-content__content text-lg lg:text-xl text-base-content/80 opacity-80 transition-discrete duration-300 ease-in-out"
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
              class="btn btn-arrow btn-wide btn-neutral h-fit"
              >{{ $t('homepage.sections.milestone.cta') }}</RouterLink
            >
          </div>
        </div>
      </section>
      <FeaturedCenterSection
        :markdown-content="$t('homepage.sections.introduction.content')"
        background-image="/images/bg-6.jpg"
      >
        <template #title>{{
          $t('homepage.sections.introduction.title')
        }}</template></FeaturedCenterSection
      >
    </div>
    <ContactSection class="wow animate__slideInUp"></ContactSection>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import CarouselSection from '../components/CarouselSection.vue';
import ContactSection from '../components/ContactSection.vue';
import FeaturedCenterSection from '../components/FeaturedCenterSection.vue';
import FeaturedSection from '../components/FeaturedSection.vue';
import { parseMarkdown } from '../utils/markdown.js';

const { tm, rt } = useI18n();

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
      transition: height 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    &__brand {
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% + 2rem);
        height: calc(100% + 2rem);
        margin: -1rem;
        border: 1px transparent solid;
        border-radius: 1rem;
        z-index: -2;
        transition: all 0.1s ease-in-out;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: var(--radius-box);
        z-index: -1;
      }
    }

    @media (hover: hover) {
      @supports selector(:has(*)) {
        &:has(.home__our-businesses__brand:not(.disabled):hover) {
          .home__our-businesses__brand:not(:hover) {
            filter: grayscale(1);
          }

          &::before {
            @media (min-width: 48rem) {
              height: calc(100% - 9rem);
            }
            @media (min-width: 64rem) {
              height: calc(100% - 12rem);
            }
          }
        }

        &:has(.btn:hover) {
          &::before {
            @media (min-width: 48rem) {
              height: 90%;
            }
          }
        }
      }
      @supports not selector(:has(*)) {
        .home__our-businesses__brand {
          opacity: 0.6;
          filter: grayscale(1);
        }

        .home__our-businesses__brand:hover {
          opacity: 1;
          filter: grayscale(0);
        }
      }

      .home__our-businesses__brand:not(.disabled):hover {
        &::before {
          // border-color: color-mix(
          //   in oklab,
          //   var(--color-primary) 60%,
          //   rgba(0, 0, 0, 0)
          // );
          backdrop-filter: blur(10px);
          background-color: color-mix(
            in oklab,
            var(--color-primary) 10%,
            transparent
          );
        }
      }

      .disabled {
        cursor: default;
        opacity: 0.6;
      }
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

    @media (hover: hover) {
      @supports selector(:has(*)) {
        &:has(.btn:hover) {
          .milestone-dot {
            background-color: var(--color-primary);
            transform: scale(105%);
          }
          .milestone-image {
            img {
              filter: grayscale(0%);
            }
          }
          .milestone-content__content {
            opacity: 100%;
          }
        }
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
