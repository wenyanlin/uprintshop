<template>
  <section
    class="hero-section w-full bg-no-repeat bg-cover bg-center"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="py-40 grid-responsive">
      <div
        class="col-full text-center *:text-base-100 *:dark:text-base-content"
      >
        <h5 class="uppercase lg:pb-2 animate__animated animate__fadeInUp">
          <slot name="subtitle">subtitle</slot>
        </h5>
        <h1 class="animate__animated animate__fadeInUp">
          <slot name="title">title</slot>
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  backgroundImage: {
    type: String,
    default: '/images/landing.png',
  },
});
</script>

<style lang="scss" scoped>
.hero-section {
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  > div {
    z-index: 2;
  }
}
</style>
