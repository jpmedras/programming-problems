<script setup>
import { defineProps } from "vue";
import { ref } from 'vue'
import { ProblemSnapshot } from './ProblemSnapshot.vue';

defineProps({
    title: String,
    problems: Array,
});

const isVisible = ref(false);
</script>

<template>
  <button
      type="button"
      v-on:click.prevent="isVisible = !(isVisible.valueOf())"
  >
      {{ title }}
  </button>
  <p
  :style="'display:' + (isVisible ? (problems.length == 0 ? 'inline' : 'none') : 'none')"
  >
    Não há problemas disponíveis...
  </p>
  <section
    :style="'display:' + (isVisible ? 'block' : 'none')"
  >
    <ProblemSnapshot
      v-for="(problem, index) in problems"
      :key="index"
      :id="problem.id"
      :title="problem.title"
      :topic="problem.topic"
    />
  </section>
</template>

<script>
export default {
  name: 'ProblemSection'
}
</script>

<style scoped>
button {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 0.8%;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 1em;
}

button:hover {
  background-color: #ddd;
}

div {
  padding: 0 0.8%;
  overflow: hidden;
  background-color: #f1f1f1;
}
</style>

