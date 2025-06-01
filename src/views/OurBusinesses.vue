<template>
  <div class="our-businesses">
    <HeroSection>
      <template #subtitle>Our Businesses</template>
      <template #title>集團成員</template>
    </HeroSection>
    <div class="flex flex-col items-center">
      <section class="my-16 wow animate__slideInUp">
        <div class="grid-responsive">
          <div class="col-full">
            <FeaturedBlock
              contentPosition="left"
              backgroundImage="/images/bg-3.png"
            >
              <template #title>二十五年征程</template>
              <template #content
                >環球印館控股有限公司，簡稱環球印館控股和環球印館（Universe
                Printshop Holdings
                Limited，港交所：8448），始創於2001年，總部位於活力之都的香港，主營印刷品類及相關業務，以香港為基地,
                近年來大中華地區,更成功拓展海外業務。</template
              >
            </FeaturedBlock>
          </div>
        </div>
      </section>
      <section class="mt-16 mb-0 lg:my-16">
        <div class="grid-responsive">
          <InfoBlock
            :to="brand.url"
            :src="brand.imagePath"
            v-for="brand in brands"
            :key="brand.title"
            class="col-span-4 relative duration-150 our-businesses__brand wow animate__slideInUp"
            :class="{ disabled: !brand.url }"
          >
            <template #title>{{ brand.title }}</template>
            <template #content>{{ brand.content }}</template>
          </InfoBlock>
        </div>
      </section>
    </div>
    <ContactSection class="wow animate__slideInUp"></ContactSection>
  </div>
</template>

<script setup>
import ContactSection from '../components/ContactSection.vue';
import FeaturedBlock from '../components/FeaturedBlock.vue';
import HeroSection from '../components/HeroSection.vue';
import InfoBlock from '../components/InfoBlock.vue';

const brands = [
  {
    title: '環球印刷',
    content:
      '環球印刷集團自2001年發展，從簡單菲林輸出到一站式印刷服務，並投資數碼技術、自助平台，全港設有二十多間門市，結合傳統與數碼印刷，提供設計、生產、銷售全方位服務，致力拓展全球市場。',
    url: 'https://www.123print.com.hk/',
    imagePath: '/images/logo__123print.png',
  },
  {
    title: '印館',
    content:
      '印館有限公司2005年創立於香港，提供多元化印刷服務，包括柯式、噴墨及數碼印刷，產品涵蓋文具、宣傳品至包裝盒等，並提供影印、少量印刷及24小時快印等貼心服務。',
    url: 'https://www.printshop.hk/',
    imagePath: '/images/logo__print-shop.png',
  },
  {
    title: 'Coming Soon...',
    content: '',
    url: '',
    imagePath: '',
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
        border-color: color-mix(
          in oklab,
          var(--color-primary) 60%,
          rgba(0, 0, 0, 0)
        );
        background-color: color-mix(
          in oklab,
          var(--color-primary) 5%,
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
