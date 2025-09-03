<template>
  <div
    class="featured-block w-full bg-no-repeat bg-cover lg:rounded-(--radius-box) overflow-hidden"
    :class="backgroundPosition"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div
      class="block lg:hidden w-full h-48 bg-no-repeat bg-cover"
      :class="backgroundPosition"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>
    <div
      class="lg:w-5/12 p-8 lg:p-16 bg-base-100 lg:bg-base-100/90"
      :class="contentPosition"
    >
      <h4 class="pb-4 wow animate__fadeInUp">
        <slot name="title">title</slot>
      </h4>
      <div
        class="text-base-content/80 **:text-base-content/80 wow animate__fadeInUp"
      >
        <slot name="content"> content </slot>
      </div>
      <RouterLink
        :to="to || ''"
        class="mt-8 btn btn-neutral btn-wide wow animate__fadeInUp"
        v-if="text"
        >{{ text }}</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  backgroundImage: {
    type: String,
    default: '/images/bg-1.png',
  },
  to: {
    type: String,
  },
  text: {
    type: String,
  },
  contentPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right', 'center'].includes(value),
  },
});

const contentPosition = computed(() => [
  {
    'ml-auto': props.contentPosition === 'right',
    'mx-auto': props.contentPosition === 'center',
  },
]);

const backgroundPosition = computed(() => [
  {
    'bg-left': props.contentPosition === 'right',
    'bg-right': props.contentPosition === 'left',
    'bg-center': props.contentPosition === 'center',
  },
]);
</script>

<style lang="scss" scoped></style>
