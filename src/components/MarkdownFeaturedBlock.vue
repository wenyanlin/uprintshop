<!-- components/MarkdownFeaturedBlock.vue -->
<template>
  <FeaturedBlock v-bind="$attrs">
    <template v-for="(_, slot) in $slots" #[slot]>
      <slot :name="slot" />
    </template>

    <template #content>
      <div v-html="parsedContent"></div>
    </template>
  </FeaturedBlock>
</template>

<script setup>
import DOMPurify from 'dompurify';
import { computed } from 'vue';
import { parseMarkdown } from '../utils/markdown.js';
import FeaturedBlock from './FeaturedBlock.vue'; // 引入基礎組件

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  markdownContent: {
    type: String,
    required: true,
  },
});

const parsedContent = computed(() => {
  console.log(props.markdownContent);
  return DOMPurify.sanitize(parseMarkdown(props.markdownContent));
});
</script>
