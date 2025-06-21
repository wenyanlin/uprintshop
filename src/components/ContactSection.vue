<template>
  <section class="contact-section wow animate__fadeIn">
    <div class="grid-responsive py-16 md:py-32 lg:py-64">
      <div class="col-full text-center">
        <div class="mb-16 *:transition-all *:duration-300 *:ease-in-out">
          <h4
            class="w-full text-base-content/50 pb-2 font-normal wow animate__slideInUp"
          >
            {{ t('subTitle') }}
          </h4>
          <h2 class="wow animate__slideInUp" data-wow-delay="0.1s">
            {{ t('title') }}
          </h2>
        </div>
        <RouterLink
          to="/contact-us"
          class="btn btn-primary btn-arrow btn-wide wow animate__slideInUp"
          data-wow-delay="0.2s"
          >{{ t('button') }}</RouterLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

const { t } = useI18n({
  messages: {
    en: {
      subTitle: 'Get in Touch',
      title: 'Let the next chapter of excellence begin here.',
      button: 'Contact Us',
    },
    zh: {
      subTitle: '取得聯繫',
      title: '讓下一段精彩，從這裡開始',
      button: '聯絡我們',
    },
  },
});
</script>

<style lang="scss" scoped>
.contact-section {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background:
      linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 20%,
        rgba(255, 255, 255, 0) 100%
      ),
      url(/images/map.jpg);
    background-size: cover, cover;
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    filter: blur(2px) grayscale(100%);
    opacity: 0.5;
    transition: filter 0.3s ease-in-out;
  }

  @media (hover: hover) {
    &:has(.btn:hover) {
      &::before {
        filter: grayscale(0%);
      }

      @media (min-width: 40rem) {
        h4,
        h2 {
          letter-spacing: 0.25rem;
        }
      }

      h4 {
        transform: translateY(-0.75rem);
      }
      h2 {
        transform: translateY(-0.5rem);
      }
    }
  }
}
</style>
