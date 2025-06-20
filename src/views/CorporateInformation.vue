<template>
  <div class="corporate-information">
    <HeroSection>
      <template #subtitle>{{ $t('corporateInformation.subTitle') }}</template>
      <template #title>{{ $t('corporateInformation.title') }}</template>
    </HeroSection>
    <div class="flex flex-col items-center">
      <section class="my-16 lg:my-32">
        <div class="grid-responsive px-4 lg:px-0 xl:px-20">
          <div class="col-full mb-0 lg:mb-8 wow animate__slideInUp">
            <div class="w-full">
              <p class="text-primary pb-2">
                {{
                  $t('corporateInformation.sections.boardOfDirectors.subTitle')
                }}
              </p>
              <h2>
                {{ $t('corporateInformation.sections.boardOfDirectors.title') }}
              </h2>
            </div>
          </div>
          <ProfileBlock
            v-for="profile in $tm(
              'corporateInformation.sections.boardOfDirectors.members',
            )"
            :key="$rt(profile.name)"
            class="col-span-4 wow animate__slideInUp"
          >
            <template #title>{{ $rt(profile.name) }}</template>
            <template #subtitle>{{ $rt(profile.identity) }}</template>
          </ProfileBlock>
        </div>
      </section>
      <section class="md:bg-base-200 wow animate__slideInUp">
        <div class="grid-responsive pt-0 pb-16 md:py-32">
          <div class="col-full">
            <LocationBlock :has-title="false" map-height="sm">
              <template #subtitle>{{
                $t('corporateInformation.sections.HeadQuarter.subTitle')
              }}</template>
              <template #title>{{
                $t('corporateInformation.sections.HeadQuarter.title')
              }}</template>
              <template #address>{{
                $t('corporateInformation.sections.HeadQuarter.address')
              }}</template>
              <template #map
                ><iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.3216882664442!2d114.11015432634089!3d22.350278871820194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040150021e3eef%3A0xf17344ad848362f3!2z55Kw55CD5Y2w5Yi36ZuG5ZyY5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1748434624187!5m2!1szh-TW!2stw"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </template>
            </LocationBlock>
          </div>
        </div>
      </section>
      <section class="wow animate__slideInUp">
        <div class="grid-responsive pt-0 pb-16 md:py-32">
          <div class="col-full">
            <LocationBlock :has-title="false" map-height="sm">
              <template #subtitle>{{
                $t('corporateInformation.sections.RegisteredOffice.subTitle')
              }}</template>
              <template #title>{{
                $t('corporateInformation.sections.RegisteredOffice.title')
              }}</template>
              <template #address>{{
                $t('corporateInformation.sections.RegisteredOffice.address')
              }}</template>
              <template #map>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7317.0505101922845!2d-81.37638383538106!3d19.294185829872152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f25866762ed7ffd%3A0xdea5a002e9d4dba0!2sCricket%20Square!5e0!3m2!1szh-TW!2stw!4v1748434915222!5m2!1szh-TW!2stw"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </template>
            </LocationBlock>
          </div>
        </div>
      </section>
      <section class="md:bg-base-200 wow animate__slideInUp">
        <div class="grid-responsive pt-0 pb-16 md:py-32">
          <div class="col-full">
            <LocationBlock :has-title="false" map-height="sm">
              <template #subtitle>{{
                $t(
                  'corporateInformation.sections.HongKongShareRegistrar.subTitle',
                )
              }}</template>
              <template #title>{{
                $t('corporateInformation.sections.HongKongShareRegistrar.title')
              }}</template>
              <template #address>{{
                $t(
                  'corporateInformation.sections.HongKongShareRegistrar.address',
                )
              }}</template>
              <template #map>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1097.6231574124145!2d114.16405399129908!3d22.279902213467338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040167e08160c9%3A0x6ee7b0dd60046290!2z6YGg5p2x6YeR6J6N5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1748434778923!5m2!1szh-TW!2stw"
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
    </div>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
import LocationBlock from '../components/LocationBlock.vue';
import ProfileBlock from '../components/ProfileBlock.vue';

// const boardOfDirectors = [
//   {
//     name: '林承大',
//     identity: '主席及行政總裁',
//   },
//   {
//     name: '李爽',
//     identity: '執行董事',
//   },
//   {
//     name: '高榮',
//     identity: '執行董事',
//   },
//   {
//     name: '葉子民',
//     identity: '執行董事',
//   },
//   {
//     name: '李振武',
//     identity: '執行董事',
//   },
//   {
//     name: '黃振國',
//     identity: '獨立非執行董事',
//   },
//   {
//     name: '何嘉明',
//     identity: '獨立非執行董事',
//   },
//   {
//     name: '蘇淑韻',
//     identity: '獨立非執行董事',
//   },
//   {
//     name: '蘇恒峯',
//     identity: '公司秘書及執業會計師',
//   },
// ];
</script>

<style lang="scss" scoped></style>
