<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#10B981' // Tailwind emerald-500
  },
  height: {
    type: Number,
    default: 3
  },
  duration: {
    type: Number,
    default: 2000
  }
});

const progress = ref(0);
const opacity = ref(0);
const interval = ref<NodeJS.Timeout | null>(null);
const timeout = ref<NodeJS.Timeout | null>(null);

// Method to reset progress
const reset = () => {
  if (interval.value) clearInterval(interval.value);
  if (timeout.value) clearTimeout(timeout.value);
  progress.value = 0;
  opacity.value = 0;
};

// Method to start progress animation
const start = () => {
  reset();
  opacity.value = 1;
  
  // Fast initial progress
  progress.value = 30;
  
  // Gradually increase progress to simulate loading
  interval.value = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 3;
    }
  }, 200);
};

// Method to complete progress animation
const complete = () => {
  if (interval.value) clearInterval(interval.value);
  
  // Complete the progress bar
  progress.value = 100;
  
  // After animation completes, hide the bar
  timeout.value = setTimeout(() => {
    opacity.value = 0;
    
    // Reset progress after fade out
    timeout.value = setTimeout(() => {
      progress.value = 0;
    }, 300);
  }, 500);
};

// Watch loading prop changes
watch(() => props.loading, (newVal) => {
  if (newVal) {
    start();
  } else {
    complete();
  }
}, { immediate: true });

// Clean up intervals and timeouts
onBeforeUnmount(() => {
  if (interval.value) clearInterval(interval.value);
  if (timeout.value) clearTimeout(timeout.value);
});
</script>

<template>
  <div 
    class="loading-bar fixed top-0 left-0 right-0 z-50 transition-opacity duration-300" 
    :style="{
      opacity,
      height: `${height}px`
    }"
  >
    <div 
      class="h-full transition-all ease-out duration-300"
      :style="{
        width: `${progress}%`,
        backgroundColor: color
      }"
    ></div>
  </div>
</template>

<style scoped>
.loading-bar {
  pointer-events: none;
}
</style>