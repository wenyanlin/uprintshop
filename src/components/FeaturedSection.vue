<template>
  <section class="featured-section my-32 flex flex-col items-end space-y-8">
    <div class="grid-responsive px-4 lg:px-0 xl:px-20 wow animate__slideInUp">
      <div
        class="col-full flex flex-col justify-between md:items-end md:flex-row"
      >
        <div>
          <p class="text-primary pb-2">
            {{ $t('homepage.sections.featured.label') }}
          </p>
          <h3
            class="uppercase"
            v-html="
              $t('homepage.sections.featured.title').replace(/\n/g, '<br>')
            "
          ></h3>
        </div>
        <RouterLink
          to="/about-us"
          class="btn btn-neutral btn-wide w-fit h-fit hidden md:block"
          >{{ $t('homepage.sections.featured.cta') }}</RouterLink
        >
      </div>
    </div>
    <div
      class="max-h-128 bg-accent xl:w-[calc(50vw+34.5rem)] 2xl:w-[calc(50vw+42.5rem)] overflow-hidden xl:rounded-l-(--radius-box) wow animate__slideInUp"
    >
      <img src="/images/bg-5.jpg" alt="" class="w-full object-cover" />
    </div>
    <div class="grid-responsive wow animate__slideInUp">
      <div
        class="col-full flex flex-wrap justify-between gap-y-8 md:gap-8 md:flex-nowrap"
      >
        <div class="w-1/2 flex flex-col items-center md:flex-row md:gap-6">
          <IconMedal class="text-5xl lg:text-7xl text-accent" />
          <div>
            <div
              class="font-figtree font-bold text-base-content text-center text-5xl lg:text-6xl"
            >
              {{ $t('homepage.sections.featured.stats.experience.number') }}
            </div>
            <p class="text-base-content text-center md:text-left">
              {{ $t('homepage.sections.featured.stats.experience.label') }}
            </p>
          </div>
        </div>
        <div class="w-1/2 flex flex-col items-center md:flex-row md:gap-6">
          <IconBuilding class="text-5xl lg:text-7xl text-accent" />
          <div>
            <div
              class="font-figtree font-bold text-base-content text-center text-5xl lg:text-6xl"
            >
              {{ $t('homepage.sections.featured.stats.business.number') }}
            </div>
            <p class="text-base-content md:text-left">
              {{ $t('homepage.sections.featured.stats.business.label') }}
            </p>
          </div>
        </div>
        <div class="w-1/2 flex flex-col items-center md:flex-row md:gap-6">
          <IconMapPinHouse class="text-5xl lg:text-7xl text-accent" />
          <div>
            <div
              class="font-figtree font-bold text-base-content text-center text-5xl lg:text-6xl"
            >
              {{ $t('homepage.sections.featured.stats.locations.number') }}
            </div>
            <p class="text-base-content md:text-left">
              {{ $t('homepage.sections.featured.stats.locations.label') }}
            </p>
          </div>
        </div>
        <div class="w-1/2 flex flex-col items-center md:flex-row md:gap-6">
          <IconGroup class="text-5xl lg:text-7xl text-accent" />
          <div>
            <div
              class="font-figtree font-bold text-base-content text-center text-5xl lg:text-6xl"
            >
              {{ $t('homepage.sections.featured.stats.employees.number') }}
            </div>
            <p class="text-base-content md:text-left">
              {{ $t('homepage.sections.featured.stats.employees.label') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <RouterLink
        to="/about-us"
        class="btn btn-neutral btn-wide w-fit h-fit mt-8 md:hidden"
        >{{ $t('homepage.sections.featured.cta') }}</RouterLink
      >
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import IconBuilding from './icons/IconBuilding.vue';
import IconGroup from './icons/IconGroup.vue';
import IconMapPinHouse from './icons/IconMapPinHouse.vue';
import IconMedal from './icons/IconMedal.vue';
</script>

<style lang="scss" scoped></style>
