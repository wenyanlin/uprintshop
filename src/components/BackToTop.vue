<template>
  <transition
    name="fade"
    enter-active-class="animate__animated animate__slideInUp"
    leave-active-class="animate__animated animate__fadeOutDown"
    :duration="150"
  >
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="back-to-top btn btn btn-tighter rounded-(--radius-box)"
      aria-label="回到頂部"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// 控制按鈕顯示/隱藏
const isVisible = ref(false);

// 滾動閾值，超過這個距離就顯示按鈕
const scrollThreshold = 300;

// 監聽滾動事件
const handleScroll = () => {
  isVisible.value = window.scrollY > scrollThreshold;
};

// 滾動到頂部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// 組件掛載時添加滾動監聽
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// 組件卸載時移除滾動監聽
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped></style>
