<template>
  <div class="privacy-security">
    <HeroSection>
      <template #subtitle>{{ $t('privacySecurity.subTitle') }}</template>
      <template #title>{{ $t('privacySecurity.title') }}</template>
    </HeroSection>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
</script>

<style lang="scss" scoped></style>
