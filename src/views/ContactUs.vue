<template>
  <div class="contact-us">
    <HeroSection>
      <template #subtitle>{{ $t('contactUs.subTitle') }}</template>
      <template #title>{{ $t('contactUs.title') }}</template>
    </HeroSection>
    <div class="flex flex-col items-center space-y-16 lg:space-y-32">
      <section class="pt-32 wow animate__slideInUp">
        <div class="grid-responsive">
          <div class="col-full">
            <LocationBlock :has-title="true">
              <template #subtitle>{{
                $t('contactUs.sections.location.subTitle')
              }}</template>
              <template #title>{{
                $t('contactUs.sections.location.title')
              }}</template>
              <template #address>{{
                $t('contactUs.sections.location.address')
              }}</template>
              <template #telephone>{{
                $t('contactUs.sections.location.telephone')
              }}</template>
              <template #fax>{{
                $t('contactUs.sections.location.fax')
              }}</template>
              <template #map
                ><iframe
                  :src="$t('contactUs.sections.location.map')"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe
              ></template>
            </LocationBlock>
          </div>
        </div>
      </section>
      <section class="wow animate__slideInUp">
        <div class="grid-responsive">
          <div class="col-full">
            <LocationBlock :has-title="true">
              <template #subtitle>{{
                $t('contactUs.sections.location2.subTitle')
              }}</template>
              <template #title>{{
                $t('contactUs.sections.location2.title')
              }}</template>
              <template #address>{{
                $t('contactUs.sections.location2.address')
              }}</template>
              <template #map>
                <iframe
                  :src="$t('contactUs.sections.location2.map')"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe
              ></template>
            </LocationBlock>
          </div>
        </div>
      </section>
      <section class="bg-base-200 wow animate__slideInUp">
        <div class="grid-responsive px-4 py-16 lg:px-0 xl:px-20 lg:py-32">
          <div class="col-span-8 space-y-4">
            <h4>
              {{ $t('contactUs.sections.integrityAndAccountability.title') }}
            </h4>
            <div
              v-html="
                DOMPurify.sanitize(
                  parseMarkdown(
                    $t('contactUs.sections.integrityAndAccountability.content'),
                  ),
                )
              "
            ></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import DOMPurify from 'dompurify';
import HeroSection from '../components/HeroSection.vue';
import LocationBlock from '../components/LocationBlock.vue';
import { parseMarkdown } from '../utils/markdown.js';
</script>

<style lang="scss" scoped></style>
