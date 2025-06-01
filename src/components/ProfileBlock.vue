<template>
  <div
    class="profile-block border border-base-300 rounded-(--radius-box) overflow-hidden"
  >
    <div class="aspect-[2/1] bg-base-200">
      <img :src="src" alt="環球印管控股有限公司企業資訊" v-if="src" />
    </div>
    <div class="p-4">
      <h4 class="text-info"><slot name="title"></slot></h4>
      <p class="text-base-content/80" v-if="$slots.subtitle">
        <slot name="subtitle"></slot>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
