<script setup lang="ts">

import Question from "@/components/question.vue";
import Progressbar from "@/components/progressbar.vue";
</script>

<template>
  <header class="header">
    <h1>Тестирование</h1>
  </header>
  <main class="main">
    <question/>
    <progressbar/>
  </main>
</template>

<style scoped lang="scss">
.header {
  h1 {
    font-size: 48px;
    font-weight: bolder;
  }
}

.main {
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  position: relative;
}
</style>