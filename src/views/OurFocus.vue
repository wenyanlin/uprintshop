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
      <section class="mb-16 wow animate__slideInUp">
        <div class="grid-responsive">
          <div class="col-full">
            <MarkdownFeaturedBlock
              :markdown-content="$t('ourFocus.sections.whatIs.content')"
              content-position="left"
              to="/"
              text=""
            >
              <template #title>{{
                $t('ourFocus.sections.whatIs.title')
              }}</template>
            </MarkdownFeaturedBlock>
          </div>
        </div>
      </section>
      <section class="mb-16 wow animate__slideInUp">
        <div class="grid-responsive">
          <div class="col-full">
            <MarkdownFeaturedBlock
              :markdown-content="$t('ourFocus.sections.benefits.content')"
              content-position="right"
              to="/"
              text=""
              background-image="/images/bg-2.png"
            >
              <template #title>{{
                $t('ourFocus.sections.benefits.title')
              }}</template>
            </MarkdownFeaturedBlock>
          </div>
        </div>
      </section>
      <section class="mb-16 wow animate__slideInUp">
        <div class="grid-responsive">
          <div class="col-full">
            <MarkdownFeaturedBlock
              :markdown-content="
                $t('ourFocus.sections.professionalPartners.content')
              "
              content-position="left"
              to="/"
              text=""
              background-image="/images/bg-3.png"
            >
              <template #title>{{
                $t('ourFocus.sections.professionalPartners.title')
              }}</template>
            </MarkdownFeaturedBlock>
          </div>
        </div>
      </section>
    </div>
    <ContactSection class="wow animate__slideInUp"></ContactSection>
  </div>
</template>

<script setup>
import ContactSection from '../components/ContactSection.vue';
import HeroSection from '../components/HeroSection.vue';
import MarkdownFeaturedBlock from '../components/MarkdownFeaturedBlock.vue';
import MissionStatementSection from '../components/MissionStatementSection.vue';
</script>

<style lang="scss" scoped></style>
