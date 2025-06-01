<template>
  <a
    :href="to"
    target="_blank"
    class="info-block"
    @click="!to && $event.preventDefault()"
  >
    <div
      class="min-h-100 h-full border border-base-300 md:rounded-(--radius-box) overflow-hidden"
    >
      <div
        class="aspect-[3/1] p-8 flex justify-center items-center border-b border-base-300 bg-base-content/1 dark:bg-base-content/90"
      >
        <img :src="src" class="h-full object-contain" :alt="to" v-if="src" />
      </div>
      <div class="p-8 space-y-4">
        <h4><slot name="title"></slot></h4>
        <p class="text-base-content/80">
          <slot name="content"></slot>
        </p>
      </div>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
  },
  src: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
