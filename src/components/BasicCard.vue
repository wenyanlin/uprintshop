<template>
  <div class="basic-card relative">
    <component
      :is="icon"
      :class="iconColor"
      class="opacity-10 absolute -top-12 -left-12 text-8xl origin-top-left stroke-1"
    />
    <div class="space-y-4 relative">
      <h4 class="text-neutral-300 uppercase">
        <slot name="title">title</slot>
      </h4>
      <p class="text-neutral-300">
        <slot name="content">content</slot>
      </p>
      <RouterLink
        :to="to"
        class="mt-6 btn bg-neutral-200 border-neutral-200 text-neutral-800"
        >{{ text }}</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
  },
  text: {
    type: String,
  },
  icon: {
    type: [Object, String],
    default: null,
  },
  iconColor: {
    type: String,
    default: 'text-base-content',
  },
});
</script>

<style lang="scss" scoped></style>
