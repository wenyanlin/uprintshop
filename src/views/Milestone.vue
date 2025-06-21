<template>
  <div class="milestone">
    <HeroSection>
      <template #subtitle>{{ $t('milestone.subTitle') }}</template>
      <template #title>{{ $t('milestone.title') }}</template>
    </HeroSection>
    <div class="flex flex-col items-center">
      <section class="my-16 wow animate__slideInUp">
        <div class="grid-responsive">
          <div class="col-full">
            <MarkdownFeaturedBlock
              :markdown-content="$t('milestone.sections.featuredBlock.content')"
              content-position="left"
              background-image="/images/milestone/featuredBlock.jpg"
            >
              <template #title>{{
                $t('milestone.sections.featuredBlock.title')
              }}</template>
            </MarkdownFeaturedBlock>
          </div>
        </div>
      </section>
      <section class="mb-16 lg:my-16">
        <div class="grid-responsive mx-8 lg:mx-0">
          <div
            class="milestone__timeline col-span-4 md:col-span-8 lg:col-start-3 relative"
          >
            <div>
              <div
                class="milestone__timeline__item milestone-responsive grid md:flex gap-x-8 gap-y-4 md:gap-12 mb-16 last:mb-0 wow animate__slideInUp"
                v-for="milestone in milestones"
                :key="milestone.year"
              >
                <div
                  class="milestone-image w-full md:w-64 h-fit aspect-video bg-base-200 overflow-hidden rounded-(--radius-box)"
                >
                  <img
                    :src="`images/milestone/${milestone.year}.jpg`"
                    :alt="milestone.year"
                    class="w-full h-full object-cover"
                  />
                </div>
                <span
                  class="milestone-dot relative mt-5 w-4 h-4 aspect-square bg-primary rounded-full flex-shrink-0"
                ></span>
                <div class="milestone-content flex-1">
                  <div
                    class="text-3xl lg:text-5xl font-bold text-base-content mb-4"
                  >
                    {{ milestone.year }}
                  </div>
                  <div
                    class="text-base-content/80"
                    v-html="milestone.content"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="absolute top-6 left-2 -translate-x-1/2 w-1 h-full bg-base-200 -z-10 wow animate__slideInUp md:h-[calc(100%-9rem)] md:left-78"
            ></div>
          </div>
        </div>
      </section>
    </div>
    <ContactSection></ContactSection>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ContactSection from '../components/ContactSection.vue';
import HeroSection from '../components/HeroSection.vue';
import MarkdownFeaturedBlock from '../components/MarkdownFeaturedBlock.vue';
import { parseMarkdown } from '../utils/markdown.js';

const { tm, rt } = useI18n();

const milestones = computed(() =>
  tm('milestone.milestones')
    .map((item) => ({
      year: rt(item.year),
      content: parseMarkdown(rt(item.content)),
    }))
    .filter(Boolean),
);
</script>

<style lang="scss" scoped>
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
</style>
