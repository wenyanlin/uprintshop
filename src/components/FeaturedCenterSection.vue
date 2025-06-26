<template>
  <section class="featured-center-section bg-center bg-cover">
    <div class="absolute inset-0 -z-10">
      <picture v-if="imageData">
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
          :srcset="imageData.sources.jpeg"
          :src="imageData.img.src"
          sizes="100vw"
          class="w-full h-full object-cover brightness-75"
          alt="Featured background"
          loading="lazy"
        />
      </picture>
    </div>
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
  // backgroundImage: {
  //   type: String,
  // },
  imageData: {
    type: Object,
    required: true,
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
