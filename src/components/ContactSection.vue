<template>
  <section class="contact-block">
    <div class="grid-responsive py-16 md:py-32 lg:py-64">
      <div class="col-full text-center">
        <div class="mb-16">
          <h4 class="w-full text-base-content/50 pb-2 font-normal">
            {{ t('subTitle') }}
          </h4>
          <h2>{{ t('title') }}</h2>
        </div>
        <RouterLink to="/contact-us" class="btn btn-primary btn-wide">{{
          t('button')
        }}</RouterLink>
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

<style lang="scss" scoped></style>
