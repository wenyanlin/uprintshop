<template>
  <div class="privacy-security">
    <HeroSection>
      <template #subtitle>{{ $t('privacySecurity.subTitle') }}</template>
      <template #title>{{ $t('privacySecurity.title') }}</template>
    </HeroSection>
    <div class="flex flex-col items-center">
      <section class="my-16">
        <div class="grid-responsive">
          <div class="col-full">
            <div
              class="markdown-content text-base-content/80 *:text-base-content/80 **:text-base-content/80"
              v-html="
                DOMPurify.sanitize(parseMarkdown($t('privacySecurity.content')))
              "
            ></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import DOMPurify from 'dompurify';
import HeroSection from '../components/HeroSection.vue';
import { parseMarkdown } from '../utils/markdown';
</script>

<style lang="scss" scoped>
.markdown-content {
  :deep(p) {
    margin-bottom: 1rem;
    line-height: 2;
  }
  :deep(ol) {
    list-style-type: decimal;
    padding-left: 2rem;
    margin-bottom: 1rem;
    li {
      padding-left: 0.4rem;
      line-height: 2;
    }
  }
  :deep(ul) {
    list-style: disc;
  }

  :deep(blockquote) {
    border: 1px var(--color-base-300) solid;
    border-radius: var(--radius-box);
    background-color: var(--color-base-200);
    width: fit-content;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    margin-bottom: 1rem;

    p {
      margin: 0;
    }
  }

  :deep(a) {
    color: var(--color-primary);
    text-decoration: underline;
    text-underline-offset: 0.25rem;
  }

  :deep(h5) {
    margin-bottom: 0.5rem;
    color: var(--color-accent);
  }
  :deep(hr) {
    margin-block: 2rem;
    color: var(--color-base-300);
  }
}
</style>
