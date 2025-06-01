<template>
  <div class="milestone">
    <HeroSection>
      <template #subtitle>Milestone</template>
      <template #title>里程碑</template>
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
      <section class="mb-16 lg:my-16">
        <div class="grid-responsive mx-8 lg:mx-0">
          <div
            class="milestone__timeline col-span-4 md:col-span-8 lg:col-start-3 relative"
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
                  <img src="" alt="" />
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
                    class="text-lg lg:text-xl text-base-content/80"
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
    <ContactSection class="wow animate__slideInUp"></ContactSection>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import ContactSection from '../components/ContactSection.vue';
import FeaturedBlock from '../components/FeaturedBlock.vue';
import HeroSection from '../components/HeroSection.vue';
import { parseMarkdown } from '../utils/markdown.js';

const rawMilestones = [
  {
    id: '2024-1',
    year: 2024,
    content: '開始大規模海外業務交付',
  },
  {
    id: '2023-1',
    year: 2023,
    content:
      '全面升級旗下[印館線上自助訂單平臺](https://op.printshop.hk)，更進一步拓展電子商務領域應用最新信息技術, 全面升級重構集團信息管理平臺(包括國際知名財務管理平臺)',
  },
  {
    id: '2018-1',
    year: 2018,
    content:
      '環球印館控股有限公司在2018年3月28日以股份代號8448在香港聯合交易所有限公司的GEM上市',
  },
  {
    id: '2010-1',
    year: 2010,
    content: '購入首台八色柯式印刷機',
  },
  {
    id: '2009-1',
    year: 2009,
    content: '在觀塘開設一間店舖',
  },
  {
    id: '2006-1',
    year: 2006,
    content:
      '在香港島開設首兩間店舖，一間位於炮台山，一間位於灣仔。同年，位於新界的首間街舖在元朗開業',
  },
  {
    id: '2005-1',
    year: 2005,
    content:
      '前印館開業，商業名稱為「Print Shop」，2005在香港推出「連鎖店印刷服務」概念，提供印刷服務',
  },
  {
    id: '2004-1',
    year: 2004,
    content:
      '- 首間街舖於2004年4月在觀塘開業\n- 推出我們首個網站[http://www.123print.com.hk](http://www.123print.com.hk)\n- 購入首台四色柯式印刷機，承接大批量柯式印刷業務',
  },
  {
    id: '2003-1',
    year: 2003,
    content:
      '前環球印刷在香港註冊成立為有限公司，開始以商業名稱「Universe」經營業務',
  },
  {
    id: '2001-1',
    year: 2001,
    content: '在觀塘設立生產設施',
  },
];

const milestones = computed(() => {
  return rawMilestones
    .map((milestone) => ({
      ...milestone,
      content: parseMarkdown(milestone?.content),
    }))
    .filter(Boolean);
});
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
