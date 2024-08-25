<script setup lang="ts">
import {useQuizStore} from "@/stores/quiz";
import Quiz from "@/components/quiz.vue";
import Results from "@/components/results.vue";

const store = useQuizStore()

</script>

<template>

  <quiz v-if="!store.isQuizCompleted"/>

  <results v-else/>

</template>

<style scoped>

</style>
