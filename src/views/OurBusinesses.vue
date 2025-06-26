<template>
  <div class="our-businesses">
    <HeroSection>
      <template #subtitle>{{ $t('ourBusinesses.subTitle') }}</template>
      <template #title>{{ $t('ourBusinesses.title') }}</template>
    </HeroSection>
    <div class="flex flex-col items-center">
      <section class="my-16 wow animate__slideInUp">
        <div class="grid-responsive">
          <div class="col-full">
            <MarkdownFeaturedBlock
              :markdown-content="
                $t('ourBusinesses.sections.featuredBlock.content')
              "
              content-position="left"
              to="/"
              text=""
              background-image="/images/our-businesses/featuredBlock__background.png"
            >
              <template #title>{{
                $t('ourBusinesses.sections.featuredBlock.title')
              }}</template>
            </MarkdownFeaturedBlock>
          </div>
        </div>
      </section>
      <section class="mt-16 mb-0 lg:my-16">
        <div class="grid-responsive">
          <InfoBlock
            :to="brand.url"
            :src="brand.imagePath"
            v-for="(brand, index) in brands"
            :key="brand.title"
            class="col-span-4 relative duration-150 our-businesses__brand wow animate__slideInUp"
            :class="{ disabled: !brand.url }"
            :data-wow-delay="`${0.1 * index}s`"
          >
            <template #title>{{ $t(brand.title) }}</template>
            <template #content>{{ $t(brand.content) }}</template>
          </InfoBlock>
        </div>
      </section>
    </div>
    <ContactSection></ContactSection>
  </div>
</template>

<script setup>
import ContactSection from '../components/ContactSection.vue';
import HeroSection from '../components/HeroSection.vue';
import InfoBlock from '../components/InfoBlock.vue';
import MarkdownFeaturedBlock from '../components/MarkdownFeaturedBlock.vue';

const brands = [
  {
    title: 'ourBusinesses.brands.123print.title',
    content: 'ourBusinesses.brands.123print.content',
    url: 'https://www.123print.com.hk/',
    imagePath: '/images/our-businesses/logo__123print.png',
  },
  {
    title: 'ourBusinesses.brands.printshop.title',
    content: 'ourBusinesses.brands.printshop.content',
    url: 'https://www.printshop.hk/',
    imagePath: '/images/our-businesses/logo__print-shop.png',
  },
  {
    title: 'ourBusinesses.brands.photo520.title',
    content: 'ourBusinesses.brands.photo520.content',
    url: 'http://www.photo520.com',
    imagePath: '/images/our-businesses/logo__photo-520.png',
  },
];
</script>

<style lang="scss" scoped>
.our-businesses {
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
      background-color: var(--color-base-100);
      z-index: -1;
    }
  }
  @media (hover: hover) {
    @supports selector(:has(*)) {
      &:has(.our-businesses__brand:not(.disabled):hover)
        .our-businesses__brand:not(:hover) {
        opacity: 0.6;
        filter: grayscale(1);
      }
    }

    @supports not selector(:has(*)) {
      .our-businesses__brand {
        opacity: 0.6;
        filter: grayscale(1);
      }

      .our-businesses__brand:hover {
        opacity: 1;
        filter: grayscale(0);
      }
    }

    .our-businesses__brand:not(.disabled):hover {
      &::before {
        // border-color: color-mix(
        //   in oklab,
        //   var(--color-primary) 60%,
        //   rgba(0, 0, 0, 0)
        // );
        background-color: color-mix(
          in oklab,
          var(--color-primary) 10%,
          rgba(0, 0, 0, 0)
        );
      }
    }

    .disabled {
      cursor: default;
      opacity: 0.6;
    }
  }
}
</style>
