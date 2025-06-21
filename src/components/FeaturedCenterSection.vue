<template>
  <section
    class="featured-center-section bg-center bg-cover"
    :style="`background-image:url('${backgroundImage}')`"
  >
    <div class="grid-responsive py-24 lg:py-48">
      <div
        class="col-span-4 p-8 bg-base-100/80 backdrop-blur sm:rounded-(--radius-box) md:m-0 md:p-16 md:col-span-8 lg:col-start-3 wow animate__slideInUp"
      >
        <h3 class="pb-4">
          <slot name="title">title</slot>
        </h3>
        <div
          class="text-base-content/80 *:text-base-content/80"
          v-html="parsedContent"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import DOMPurify from 'dompurify';
import { parseMarkdown } from '../utils/markdown.js';
const props = defineProps({
  backgroundImage: {
    type: String,
    default: '/images/gray-pattern.png',
  },
  markdownContent: {
    type: String,
    required: true,
  },
});

const parsedContent = computed(() => {
  return DOMPurify.sanitize(parseMarkdown(props.markdownContent));
});
</script>

<style lang="scss" scoped></style>
