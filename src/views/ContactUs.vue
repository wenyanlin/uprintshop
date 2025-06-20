<template>
  <div class="contact-us">
    <HeroSection>
      <template #subtitle>{{ $t('contactUs.subTitle') }}</template>
      <template #title>{{ $t('contactUs.title') }}</template>
    </HeroSection>
    <div class="flex flex-col items-center">
      <section class="py-16 lg:my-32 wow animate__slideInUp">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d274.22265072063095!2d114.10337293192829!3d22.373047616453043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8e4926c455d%3A0x767f9e2689b8c21!2z5p2x5Y2X5bel5qWt5aSn5buI!5e0!3m2!1szh-TW!2stw!4v1748419945532!5m2!1szh-TW!2stw"
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
