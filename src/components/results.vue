<script setup lang="ts">
import {useQuizStore} from "@/stores/quiz";

const quizStore = useQuizStore()

</script>

<template>
  <header class="header">
    <template v-if="quizStore.correctAnswersCount === quizStore.randomSortedQuestions.length">
      <h1 class="header__result-title-txt">Поздравляем!</h1>
      <p class="header__result-additional-txt">Вы правильно ответили на все вопросы. <br> Вы действительно отлично разбираетесь в IT.</p>
    </template>
    <template v-else-if="quizStore.correctAnswersCount === 0">
      <h1 class="header__result-title-txt">Упс :(</h1>
      <p class="header__result-additional-txt">Вы неправильно ответили на все вопросы. <br> Нужно подучить теорию.</p>
    </template>
    <template v-else>
      <h1 class="header__result-title-txt">Хороший результат!</h1>
      <p class="header__result-additional-txt">Вы правильно ответили на {{ quizStore.correctAnswersCount }} вопросов. <br> Так держать!</p>
    </template>
  </header>

  <main class="main">
    <div :class="[answer.isCorrect ? 'correct' : 'incorrect', 'main__result_block']" v-for="(answer, index) in quizStore.userAnswers" :key="index">
      <h3 class="main__result_block-title-txt">{{ answer.question }}</h3>
      <span class="main__result_block-additional-txt">{{ answer.userAnswer }}</span>
    </div>

    <button
        v-if="quizStore.correctAnswersCount !== quizStore.randomSortedQuestions.length"
        type="button"
        class="main__btn-try-again"
        @click="quizStore.resetQuiz()"
    >
      Пройти еще раз
    </button>
  </main>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  .header__result-title-txt {
    font-size: 48px;
    font-weight: bolder;
  }
  .header__result-additional-txt {
    font-size: 24px;
  }
}

.main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  .main__result_block{
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 20px;
    &.correct {
      background-color: #E5F5E1;
    }

    &.incorrect {
      background-color: #FFE0E0;
    }
    .main__result_block-title-txt {
      font-size: 20px;
      font-weight: bold;
    }
    .main__result_block-additional-txt {
      font-size: 16px;
    }
  }
  .main__btn-try-again{
    width: fit-content;
    margin-top: 20px;
    background-color: #3300FF;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 16px 30px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>