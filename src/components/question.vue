<script setup lang="ts">
import {useQuizStore} from "@/stores/quiz";
import {ref} from "vue";

const quizStore = useQuizStore();
const userAnswer = ref('');

const doAnswer = () => {
  quizStore.makeAnswer(userAnswer.value);
  userAnswer.value = '';
};
</script>

<template>
  <div class="question">
    <div class="question__problem">
      <h2>
        {{ quizStore.randomSortedQuestions[quizStore.currentQuestion].question }}
      </h2>
    </div>
    <div class="question__answers">
      <label
          class="question__answer-block"
          v-for="(answer, index) in quizStore.randomSortedQuestions[quizStore.currentQuestion].answers" :key="index">
        <input
            class="question__answer-btn-default"
            type="radio"
            :value="answer.text"
            v-model="userAnswer"
            @change="doAnswer"
        />
        <span class="question__answer-btn-custom"></span>
        <span class="question__answer-text">{{ answer.text }}</span>
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.question {
  border-radius: 20px;
  padding: 40px;
  background: #F7F7F7;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  .question__problem{
    h2{
      font-size: 24px;
      font-weight: bold;
    }
  }
  .question__answers {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .question__answer-block {
      display: flex;
      gap: 20px;
      cursor: pointer;
      .question__answer-btn-default {
        display: none;
      }
      .question__answer-btn-custom {
        width: 20px;
        height: 20px;
        border: 1px solid currentColor;
        border-radius: 50%;
        transition: background-color 0.3s, 0.3s;
      }
      .question__answer-text {
        word-wrap: break-word;
        flex: 1;
        font-size: 16px;
      }
    }
    .question__answer-block:hover .question__answer-btn-custom {
      background-color: #3300FF;
      border-color: #3300FF;
    }
  }
}





</style>