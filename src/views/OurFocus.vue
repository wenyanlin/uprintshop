<template>
  <div class="our-focus">
    <HeroSection>
      <template #subtitle>{{ $t('ourFocus.subTitle') }}</template>
      <template #title>{{ $t('ourFocus.title') }}</template>
    </HeroSection>
    <div class="flex flex-col items-center">
      <MissionStatementSection
        ><template #default>{{
          $t('ourFocus.missionStatement')
        }}</template></MissionStatementSection
      >
      <section class="mb-16 bg-base-200 lg:bg-transparent">
        <div
          class="grid-responsive px-0 py-16 items-center relative before:col-full before:absolute before:inset-x-0 before:bg-base-200 before:rounded-(--radius-box) before:-z-10 lg:before:inset-y-0 xl:before:inset-y-32"
        >
          <div
            class="px-8 col-span-4 md:p-0 md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-5 xl:col-start-2 wow animate__slideInUp"
          >
            <h3 class="pb-4">{{ $t('ourFocus.sections.whatIs.title') }}</h3>
            <div
              class="text-base-content/80 *:text-base-content/80"
              v-html="
                DOMPurify.sanitize(
                  parseMarkdown($t('ourFocus.sections.whatIs.content')),
                )
              "
            ></div>
          </div>
          <div
            class="col-span-4 md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-start-7 xl:col-span-5 wow animate__slideInUp"
          >
            <AdvancedProductivityEcosystem v-if="locale === 'zh'" />
            <AdvancedProductivityEcosystemEng v-if="locale === 'en'" />
          </div>
          <!-- <div class="col-full">
            <MarkdownFeaturedBlock
              :markdown-content="$t('ourFocus.sections.whatIs.content')"
              content-position="left"
              to="/"
              text=""
              background-image="/images/our-focus/whatIs__background.jpg"
            >
              <template #title>{{
                $t('ourFocus.sections.whatIs.title')
              }}</template>
            </MarkdownFeaturedBlock>
          </div> -->
        </div>
      </section>
      <section class="mb-16 md:my-32 our-focus__benefits">
        <div
          class="grid-responsive our-focus__benefits__inner relative before:hidden lg:before:inline-block lg:before:w-200 lg:before:h-72 after:hidden after:left-0 lg:after:inline-block xl:after:left-20"
        >
          <div
            class="sm:col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2 w-full h-96 md:rounded-(--radius-box) bg-cover bg-center absolute top-0 -z-10 wow animate__slideInUp"
            style="
              background-image: url('/images/our-focus/benefits__background.jpg');
            "
          ></div>
          <div
            class="col-span-4 shadow-none p-8 text-left md:text-center mt-96 md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3 md:mt-80 lg:mt-64 md:p-12 lg:py-16 lg:px-32 bg-base-100 md:rounded-(--radius-box) md:shadow wow animate__slideInUp"
          >
            <h3 class="pb-4">{{ $t('ourFocus.sections.benefits.title') }}</h3>
            <div
              class="text-base-content/80 *:text-base-content/80"
              v-html="
                DOMPurify.sanitize(
                  parseMarkdown($t('ourFocus.sections.benefits.content')),
                )
              "
            ></div>
          </div>
        </div>
      </section>
      <!-- <section class="mb-16 wow animate__slideInUp">
        <div class="grid-responsive">
          <div class="col-full">
            <MarkdownFeaturedBlock
              :markdown-content="$t('ourFocus.sections.benefits.content')"
              content-position="right"
              to="/"
              text=""
              background-image="/images/our-focus/benefits__background.jpg"
            >
              <template #title>{{
                $t('ourFocus.sections.benefits.title')
              }}</template>
            </MarkdownFeaturedBlock>
          </div>
        </div>
      </section> -->
      <FeaturedCenterSection
        :markdown-content="$t('ourFocus.sections.professionalPartners.content')"
        :image-data="imageFeaturedCenterSection"
      >
        <template #title>{{
          $t('ourFocus.sections.professionalPartners.title')
        }}</template>
      </FeaturedCenterSection>
    </div>
    <ContactSection></ContactSection>
  </div>
</template>

<script setup>
import imageFeaturedCenterSection from '@/assets/images/our-focus/whatIs__background.jpg?w=800;1200;1920;2560&format=avif;webp;jpg&as=picture';
import DOMPurify from 'dompurify';
import { useI18n } from 'vue-i18n';
import ContactSection from '../components/ContactSection.vue';
import FeaturedCenterSection from '../components/FeaturedCenterSection.vue';
import HeroSection from '../components/HeroSection.vue';
import AdvancedProductivityEcosystem from '../components/images/AdvancedProductivityEcosystem.vue';
import AdvancedProductivityEcosystemEng from '../components/images/AdvancedProductivityEcosystemEng.vue';
import MissionStatementSection from '../components/MissionStatementSection.vue';
import { parseMarkdown } from '../utils/markdown.js';
const { locale } = useI18n();
</script>

<style lang="scss" scoped>
.our-focus__benefits {
  &__inner {
    &::before {
      content: '';
      background-color: var(--color-primary);
      opacity: 20%;
      position: absolute;
      top: -4rem;
      right: 0;
      border-radius: var(--radius-box);
      z-index: -11;
    }
    &::after {
      content: '';
      width: 15rem;
      height: 15rem;
      background-color: var(--color-base-300);
      opacity: 50%;
      position: absolute;
      bottom: 4rem;
      border-radius: var(--radius-box);
      z-index: -11;
    }
  }
}
</style>
