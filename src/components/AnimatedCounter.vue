<template>
  <div ref="cardElement">
    <span>{{ animatedNumber.toLocaleString() }}</span>
    <span>{{ suffix }}</span>
  </div>
</template>

<script setup>
import { useCounterAnimation } from '@/composables/useCounterAnimation';
import { computed, onMounted, onUnmounted, ref } from 'vue';

// 定義組件接收的 props
const props = defineProps({
  stat: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 1500,
  },
});

const cardElement = ref(null);

const numberPart = computed(() => parseInt(props.stat, 10) || 0);
const suffix = computed(() => props.stat.replace(/^\d+/, ''));

// 將計算出來的數字部分（響應式）傳遞給動畫鉤子
const target = computed(() => numberPart.value);
const { displayValue, startAnimation } = useCounterAnimation(
  target,
  props.duration,
);

// 格式化顯示的數字
const animatedNumber = computed(() => Math.floor(displayValue.value));

let observer = null;

onMounted(() => {
  if (!cardElement.value) return;

  // 建立一個觀察器實例，並設定回調函數
  observer = new MutationObserver((mutationsList, obs) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'class'
      ) {
        const targetElement = mutation.target;
        if (targetElement.classList.contains('animate__animated')) {
          startAnimation();
          obs.disconnect();
        }
      }
    }
  });

  observer.observe(cardElement.value, { attributes: true });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
