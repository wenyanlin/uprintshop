<template>
  <div class="about-us">
    <HeroSection>
      <template #subtitle>{{ t('aboutUs.sub_title') }}</template>
      <template #title>{{ t('aboutUs.title') }}</template>
    </HeroSection>
    <div class="flex flex-col items-center">
      <section class="my-16 wow animate__slideInUp">
        <div class="grid-responsive">
          <h2
            class="col-span-4 leading-normal text-center text-accent font-normal upp md:col-span-8 lg:col-span-12 2xl:col-span-8 2xl:col-start-3"
          >
            {{ t('aboutUs.mission_statement') }}
          </h2>
        </div>
      </section>
      <section class="mb-16 wow animate__slideInUp">
        <div class="grid-responsive">
          <div class="col-full">
            <FeaturedBlock
              to="/"
              :text="t('aboutUs.sections.commitment.linkText')"
              contentPosition="left"
            >
              <template #title>{{
                t('aboutUs.sections.commitment.title')
              }}</template>
              <template #content>{{
                t('aboutUs.sections.commitment.content')
              }}</template>
            </FeaturedBlock>
          </div>
        </div>
      </section>
      <section class="mb-16 wow animate__slideInUp">
        <div class="grid-responsive">
          <div class="col-full">
            <FeaturedBlock
              to="/"
              :text="t('aboutUs.sections.commitment.linkText')"
              contentPosition="right"
              backgroundImage="/images/bg-2.png"
            >
              <template #title>{{
                t('aboutUs.sections.longTermValue.title')
              }}</template>
              <template #content>{{
                t('aboutUs.sections.longTermValue.content')
              }}</template>
            </FeaturedBlock>
          </div>
        </div>
      </section>
      <section class="flex flex-col wow animate__slideInUp">
        <div class="grid-responsive mx-2 lg:mx-0">
          <div class="col-full text-center">
            <h2 class="lg:mt-32 mb-8 lg:mb-16">
              <i18n-t keypath="aboutUs.sections.transformation.title">
                <template #highlight>
                  <span
                    class="text-primary"
                    :class="
                      locale === 'en'
                        ? 'text-3xl lg:text-5xl'
                        : 'text-4xl lg:text-6xl'
                    "
                    >{{ t('aboutUs.sections.transformation.highlight') }}</span
                  >
                </template>
              </i18n-t>
            </h2>
          </div>
        </div>
        <ComparisonBlock>
          <template #tt>{{
            t('aboutUs.sections.transformation.comparison.supplier.title')
          }}</template>
          <template #tb>{{
            t('aboutUs.sections.transformation.comparison.supplier.description')
          }}</template>
          <template #bt>{{
            t('aboutUs.sections.transformation.comparison.production.title')
          }}</template>
          <template #bb>{{
            t(
              'aboutUs.sections.transformation.comparison.production.description',
            )
          }}</template>
          <template #rt>{{
            t('aboutUs.sections.transformation.comparison.efficiency.title')
          }}</template>
          <template #rb>
            <ul>
              <li
                v-for="feature in tm(
                  'aboutUs.sections.transformation.comparison.efficiency.features',
                )"
                :key="feature"
              >
                {{ rt(feature) }}
              </li>
            </ul>
          </template>
        </ComparisonBlock>
      </section>
    </div>
    <ContactSection class="wow animate__slideInUp"></ContactSection>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import ComparisonBlock from '../components/ComparisonBlock.vue';
import ContactSection from '../components/ContactSection.vue';
import FeaturedBlock from '../components/FeaturedBlock.vue';
import HeroSection from '../components/HeroSection.vue';

const { t, locale, tm, rt } = useI18n();
</script>

<style lang="scss" scoped></style>
