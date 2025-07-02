<template>
  <div
    class="location-block w-full flex flex-wrap gap-8 md:flex-nowrap"
    :class="flexDirection"
  >
    <div
      :class="{
        'md:w-7/12': flexDirection === 'flex-row',
      }"
      class="relative duration-300 grayscale-80 w-full hover:grayscale-0"
    >
      <div
        :class="{
          'md:h-128': mapHeight === 'xl',
          'md:h-96': mapHeight === 'normal',
          'md:h-80': mapHeight === 'sm',
        }"
        class="overflow-hidden w-full h-80 md:rounded-(--radius-box) wow animate__slideInUp"
      >
        <slot name="map">#map</slot>
      </div>
    </div>
    <div class="w-full px-4 sm:px-2 md:px-0 md:w-5/12 space-y-8">
      <div class="wow animate__slideInUp">
        <p class="text-primary pb-2" v-if="$slots.subtitle">
          <slot name="subtitle"></slot>
        </p>
        <h2><slot name="title">#title</slot></h2>
      </div>
      <address
        itemscope
        itemtype="https://schema.org/Organization"
        class="wow animate__slideInUp"
      >
        <dl class="pl-0 space-y-4 *:flex *:gap-4">
          <div v-if="$slots.address">
            <dt class="text-base-content/60 text-nowrap uppercase" v-if="hasTitle">
              {{ $t('locationBlock.address') }}
            </dt>
            <dd
              itemprop="address"
              itemscope
              itemtype="https://schema.org/PostalAddress"
            >
              <span itemprop="streetAddress">
                <slot name="address"></slot>
              </span>
            </dd>
          </div>
          <div v-if="$slots.telephone">
            <dt class="text-base-content/60 text-nowrap uppercase" v-if="hasTitle">
              {{ $t('locationBlock.telephone') }}
            </dt>
            <dd><slot name="telephone"></slot></dd>
          </div>
          <div v-if="$slots.fax">
            <dt class="text-base-content/60 text-nowrap uppercase" v-if="hasTitle">
              {{ $t('locationBlock.facsimile') }}
            </dt>
            <dd itemprop="faxNumber"><slot name="fax"></slot></dd>
          </div>
          <div v-if="$slots.other">
            <slot name="other"></slot>
          </div>
        </dl>
      </address>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  hasTitle: {
    type: Boolean,
    default: true,
  },
  flexDirection: {
    type: String,
    default: 'flex-row',
    validator: (value) => ['flex-row', 'flex-col'].includes(value),
  },
  mapHeight: {
    type: String,
    default: 'normal',
    validator: (value) => ['xl', 'normal', 'sm'].includes(value),
  },
});
</script>

<style lang="scss" scoped></style>
