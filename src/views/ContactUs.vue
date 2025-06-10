<template>
  <div class="contact-us">
    <HeroSection>
      <template #subtitle>Contact Us</template>
      <template #title>聯絡我們</template>
    </HeroSection>
    <div class="flex flex-col items-center">
      <section class="py-16 lg:my-32 wow animate__slideInUp">
        <div class="grid-responsive">
          <div class="col-full">
            <LocationBlock :has-title="true">
              <template #subtitle>HONG KONG OFFICE</template>
              <template #title>香港寫字樓</template>
              <template #address
                >香港新界荃灣青山公路611-619號東南工業大廈8樓D室</template
              >
              <template #telephone>3565 4707</template>
              <template #fax>3914 9127</template>
              <template #map
                ><iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d274.22265072063095!2d114.10337293192829!3d22.373047616453043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8e4926c455d%3A0x767f9e2689b8c21!2z5p2x5Y2X5bel5qWt5aSn5buI!5e0!3m2!1szh-TW!2stw!4v1748419945532!5m2!1szh-TW!2stw"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe
              ></template>
            </LocationBlock>
          </div>
        </div>
      </section>
      <section class="bg-base-200 wow animate__slideInUp">
        <div class="grid-responsive px-4 py-16 lg:px-0 xl:px-20 lg:py-32">
          <div class="col-span-8 space-y-4">
            <h4>誠信與問責</h4>
            <p>
              我們環球印館控股有限公司致力以誠信和全面問責的態度經營業務。我們重視每一位員工和持份者若見證任何不道德或違法行為時都應該有權舉報。
            </p>
            <p>
              如果您真誠擔心公司內有任何不當或違法行為，請透過以下保密渠道聯繫我們：<a
                href="mailto:whistleblowing@123print.com.hk"
                class="btn btn-link"
                >whistleblowing@123print.com.hk</a
              >
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
import LocationBlock from '../components/LocationBlock.vue';
</script>

<style lang="scss" scoped></style>
