<template>
  <div class="corporate-information">
    <HeroSection>
      <template #subtitle>{{ $t('corporateInformation.subTitle') }}</template>
      <template #title>{{ $t('corporateInformation.title') }}</template>
    </HeroSection>
    <div class="flex flex-col items-center">
      <section class="relative py-16 lg:py-32 overflow-hidden">
        <div
          class="absolute top-0 inset-0 -z-10 after:absolute after:inset-0 after:z-10 after:bg-gradient-to-b after:from-base-100 after:from-60% after:to-base-100/60"
        >
          <picture>
            <source
              :srcset="imageData.sources.avif"
              type="image/avif"
              sizes="100vw"
            />
            <source
              :srcset="imageData.sources.webp"
              type="image/webp"
              sizes="100vw"
            />
            <img
              :srcset="imageData.sources.jpg"
              :src="imageData.img.src"
              sizes="100vw"
              class="w-full h-full object-cover grayscale-100 dark:grayscale-0"
              alt="..."
              loading="lazy"
            />
          </picture>
        </div>
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
            class="col-span-4 bg-base-100 wow animate__slideInUp"
          >
            <template #title>
              {{ $rt(profile.name) }}
            </template>
            <template #subtitle>{{ $rt(profile.identity) }}</template>
          </ProfileBlock>
          <!-- <div
            class="col-full min-w-40 overflow-x-auto border border-base-300 rounded-(--radius-box) wow animate__slideInUp"
          >
            <table class="w-full text-lg text-base-content bg-base-100">
              <thead class="bg-base-200 font-semibold border-b border-base-300">
                <tr class="*:p-4 *:text-base-content">
                  <td class="w-1/3 lg:w-60">
                    {{
                      $t(
                        'corporateInformation.sections.boardOfDirectors.membersTitle.title',
                      )
                    }}
                  </td>
                  <td>
                    {{
                      $t(
                        'corporateInformation.sections.boardOfDirectors.membersTitle.name',
                      )
                    }}
                  </td>
                  <td>
                    {{
                      $t(
                        'corporateInformation.sections.boardOfDirectors.membersTitle.gender',
                      )
                    }}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="profile in $tm(
                    'corporateInformation.sections.boardOfDirectors.members',
                  )"
                  :key="$rt(profile.name)"
                  class="text-base-content/80 *:p-4 even:bg-base-200"
                >
                  <td>{{ $rt(profile.identity) }}</td>
                  <td class="flex flex-col gap-1 lg:gap-4 lg:flex-row">
                    <span class="font-semibold">{{ $rt(profile.name) }}</span>
                    <span class="text-base-content/50">{{
                      $rt(profile.engName)
                    }}</span>
                  </td>
                  <td>
                    <span
                      class="px-2 py-0.5 rounded-(--radius-box)"
                      :class="getGenderClass($rt(profile.gender))"
                      >{{ getGendarText($rt(profile.gender)) }}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div> -->
        </div>
      </section>
      <section class="md:bg-base-200">
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
      <section>
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
      <section class="md:bg-base-200">
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
import imageData from '@/assets/images/corporate-information/board-of-direction__background.jpg?w=800;1200;1920;2560&format=avif;webp;jpg&as=picture';
import { useI18n } from 'vue-i18n';
import HeroSection from '../components/HeroSection.vue';
import LocationBlock from '../components/LocationBlock.vue';
import ProfileBlock from '../components/ProfileBlock.vue';

const { t } = useI18n();

const getGenderClass = (genderKey) => {
  if (genderKey.includes('female')) {
    return 'gender-female';
  }
  if (genderKey.includes('male')) {
    return 'gender-male';
  }
  // 如果有其他情況，可以回傳一個預設的 class 或空字串
  return 'gender-other';
};

const getGendarText = (genderKey) => t(genderKey);
</script>

<style lang="scss" scoped>
.gender-male {
  background-color: color-mix(in oklab, var(--color-primary) 20%, transparent);
  color: var(--color-primary);
}
.gender-female {
  background-color: color-mix(
    in oklab,
    var(--color-secondary) 20%,
    transparent
  );
  color: var(--color-secondary);
}
.gender-other {
  background-color: var(--color-base-300);
  color: var(--color-base-content);
}
</style>
