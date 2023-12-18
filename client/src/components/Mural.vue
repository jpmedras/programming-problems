<script setup>
import { defineProps } from "vue";
import { ProblemSection } from './ProblemSection.vue';

const props = defineProps({
  problems: Object,
  difficulties: Object,
  topics: Object
});

function filterProblems(difficulty) {
  if (difficulty == null || !Object.keys(props.difficulties).includes(difficulty)) {
    throw new Error(`Difficulty '${difficulty}' is not a valid difficulty`)
  }
      
  return props.problems
    .filter((problem) => problem.difficulty == difficulty)
    .map((problem) => ({
      ...problem,
      topic: props.topics[problem.topic]
  }));
}
</script>

<script>
export default {
  name: 'MuralPage'
}
</script>

<template>
  <main>
    <h1>OI</h1>
    <ProblemSection
      v-for="(difficulty, index) in Object.keys(propos.difficulties)"
      :key="index"
      :title="props.difficulties[difficulty]"
      :problems="filterProblems(difficulty)"
    />
</main>
</template>

<style scoped>
nav {
  display: block;
  width: 100%;
}

nav > ul {
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav > ul > li > a {
  float: left;
  color: #222222;
  text-align: center;
  padding: 1% 1.1%;
  text-decoration: none;
  font-size: 1.2em;
  transition: 0.4s;
}

nav > ul > li > a:hover {
  background-color: #ddd;
  color: black;
}

nav > ul > li > a.active {
  background-color: #04AA6D;
  color: white;
}

h2 {
    font-size: 1em;
}
</style>
