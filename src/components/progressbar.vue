<script setup lang="ts">
import { computed } from "vue";
import { useQuizStore } from "@/stores/quiz";

const quizStore = useQuizStore();

const progress = computed(() => {
  return Math.ceil(
      (quizStore.currentQuestion / quizStore.randomSortedQuestions.length) * 100
  );
});
</script>

<template>
  <div class="progressbar-container">
    <div class="progressbar">
      <div class="progressbar__progress" :style="{ width: `${progress}%` }"></div>
    </div>
    <div class="progressbar__legend-block">
      <span class="progressbar__legend-item">0</span>
      <span class="progressbar__legend-item">100</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.progressbar-container {
  width: 100%;
  .progressbar {
    height: 12px;
    width: 100%;
    background-color: #f7f7f7;
    border-radius: 99px;
    .progressbar__progress {
      height: 100%;
      background-color: #3300ff;
      border-radius: inherit;
      transition: width 0.3s ease;
    }
  }
  .progressbar__legend-block {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .progressbar__legend-item {
      font-size: 16px;
      font-weight: bold;
    }
  }
}

</style>
