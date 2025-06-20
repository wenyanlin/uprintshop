import { onUnmounted, ref, watch } from 'vue';

/**
 * @description 實現一個數字從0到達目標值的動畫
 * @param {Ref<number>} targetValue - 目標數字 (一個ref物件)
 * @param {number} duration - 動畫持續時間（毫秒）
 * @returns {Ref<number>} - 動畫過程中顯示的數字
 */
export function useCounterAnimation(targetValue, duration = 2000) {
  const displayValue = ref(0);
  let animationFrameId = null;

  const animate = (startTime) => {
    const now = performance.now();
    const progress = Math.min((now - startTime) / duration, 1);

    displayValue.value = Math.floor(progress * targetValue.value);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(() => animate(startTime));
    } else {
      displayValue.value = targetValue.value;
      animationFrameId = null;
    }
  };

  const startAnimation = () => {
    if (animationFrameId) return;

    const startTime = performance.now();
    animate(startTime);
  };

  watch(targetValue, (newValue, oldValue) => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    displayValue.value = 0;
  });

  onUnmounted(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });

  return {
    displayValue,
    startAnimation,
  };
}
