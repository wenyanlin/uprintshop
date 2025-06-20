<template>
  <div class="comparison-block w-full">
    <div class="comparison-block__block block-top bg-base-200">
      <p class="text-base-content/50 *:text-base-content/50 text-lg lg:text-xl">
        <slot name="tt">tt</slot>
      </p>
      <p
        class="text-base-content *:text-base-content font-medium text-xl lg:text-2xl"
      >
        <slot name="tb">tb</slot>
      </p>
    </div>
    <div class="comparison-block__block block-bottom bg-base-300">
      <p class="text-base-content/50 *:text-base-content/50 text-lg lg:text-xl">
        <slot name="bt">bt</slot>
      </p>
      <p
        class="text-base-content *:text-base-content font-medium text-xl lg:text-2xl"
      >
        <slot name="bb">bb</slot>
      </p>
    </div>
    <div
      class="comparison-block__block block-right bg-base-content dark:bg-base-content/80"
    >
      <p class="text-base-100/80 *:text-base-100/80 text-lg lg:text-xl">
        <slot name="rt">rt</slot>
      </p>
      <p class="text-base-100 *:text-base-100 font-medium text-xl lg:text-2xl">
        <slot name="rb">rb</slot>
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.comparison-block {
  transform: skewY(0deg);

  @media (min-width: 1024px) {
    transform: skewY(-1deg);
    display: grid;
    grid-template:
      'top right' 1fr
      'bottom right' 1fr
      / 1fr 1fr;
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    @media (min-width: 1024px) {
      padding: 6rem;
    }

    & > p {
      width: 100%;

      &:first-child {
        padding-bottom: 0.5rem;
      }
    }
  }
}
.block-top {
  grid-area: top;
  @media (min-width: 1024px) {
    text-align: right;
  }
}
.block-bottom {
  grid-area: bottom;
  @media (min-width: 1024px) {
    text-align: right;
  }
}
.block-right {
  grid-area: right;
}
</style>
