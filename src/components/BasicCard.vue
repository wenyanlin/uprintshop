<template>
  <div class="basic-card relative">
    <component
      :is="icon"
      :class="iconColor"
      class="opacity-10 absolute -top-12 -left-12 text-8xl origin-top-left stroke-1 transition-opacity duration-300"
    />
    <div class="space-y-4 relative">
      <div class="*:transition-all *:duration-300 *:ease-in-out">
        <h4 class="text-neutral-300 uppercase pb-4">
          <slot name="title">title</slot>
        </h4>
        <p class="text-neutral-300 opacity-80">
          <slot name="content">content</slot>
        </p>
      </div>
      <RouterLink :to="to" class="mt-6 btn btn-outline btn-arrow darkbg">{{
        text
      }}</RouterLink>
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

<style lang="scss" scoped>
.basic-card {
  @media (hover: hover) {
    &:has(.btn:hover) {
      &::before {
        filter: grayscale(0%);
      }

      svg {
        opacity: 20%;
      }

      h4 {
        transform: translateY(-0.25rem);
      }
      p {
        transform: translateY(-0.5rem);
        opacity: 100%;
      }
    }
  }
}
</style>
