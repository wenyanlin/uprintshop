<template>
  <div
    class="profile-block overflow-hidden"
  >
    <div class="aspect-square w-full bg-base-200 rounded-full overflow-hidden">
      <img :src="src" :alt="alt" v-if="src" class="w-full h-full object-cover" />
    </div>
    <div class="p-4 flex flex-col justify-center items-center">
      <h4 class="text-info text-center text-nowrap"><slot name="title"></slot></h4>
      <p class="text-base-content/80 text-center" v-if="$slots.subtitle">
        <slot name="subtitle"></slot>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  }
});
</script>

<style lang="scss" scoped></style>
