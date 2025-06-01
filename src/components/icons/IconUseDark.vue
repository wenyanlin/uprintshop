<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const sunPath =
  'M49 68.2C59.6039 68.2 68.2 59.6039 68.2 49C68.2 38.3962 59.6039 29.8 49 29.8C38.3962 29.8 29.8 38.3962 29.8 49C29.8 59.6039 38.3962 68.2 49 68.2Z';
const moonPath =
  'M49 68.2C59.6039 68.2 68.2 59.6039 68.2 49C48.6698 58.0157 42.0607 47.4249 49 29.8C38.3962 29.8 29.8 38.3962 29.8 49C29.8 59.6039 38.3962 68.2 49 68.2Z';
</script>
<template>
  <svg
    @click="toggleDark()"
    viewBox="0 0 98 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 1em; height: 1em"
    class="cursor-pointer"
  >
    <path
      :d="isDark ? moonPath : sunPath"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="stroke-current"
      :class="[isDark ? 'dark' : 'light']"
    />
    <g
      stroke-linecap="round"
      stroke-linejoin="round"
      :class="[isDark ? 'dark' : 'light']"
      class="stroke-8 stroke-current"
    >
      <path d="M49 1V10.6" />
      <path d="M49 87.3999V96.9999" />
      <path d="M15.0642 15.0642L21.8322 21.8322" />
      <path d="M76.168 76.168L82.936 82.936" />
      <path d="M1 49H10.6" />
      <path d="M87.3999 49H96.9999" />
      <path d="M21.8322 76.168L15.0642 82.936" />
      <path d="M82.936 15.0642L76.168 21.8322" />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
path {
  transform-origin: center;
  transition:
    transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
    stroke 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) !important;

  &.light {
    transform: rotate(90deg) scale(1);
    stroke-width: 8;
  }
  &.dark {
    transform: rotate(0deg) scale(2);
    stroke-width: 4;
  }
}
g {
  transition: opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) !important;
  &.light {
    opacity: 1;
  }

  &.dark {
    opacity: 0;
  }
}
</style>
