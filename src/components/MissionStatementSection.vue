<template>
  <section class="mission-statement-section my-8 wow animate__slideInUp">
    <div class="grid-responsive">
      <div
        class="mission-statement uppercase col-span-4 leading-normal text-center text-accent font-normal md:col-span-8 lg:col-span-12 2xl:col-span-10 2xl:col-start-2"
      >
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.mission-statement {
  font-size: var(--text-3xl) /* 1.875rem = 30px */;
  line-height: var(
    --tw-leading,
    var(--text-3xl--line-height) /* calc(2.25 / 1.875) ≈ 1.2 */
  );
}

:root[lang='en'] .mission-statement {
  font-size: var(--text-2xl);
  line-height: var(--tw-leading, var(--text-2xl--line-height));
}
</style>
