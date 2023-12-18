<template>
    <div>
      <h2>{{ problem.title }}</h2>
      <p>Difficulty: {{ problem.difficulty }}</p>
      <p>Topic: {{ problem.topic }}</p>
      <p>Input Description: {{ problem.inputDescription }}</p>
      <p>Output Description: {{ problem.outputDescription }}</p>
      <p>Time Limit: {{ problem.timeLimit }}</p>
      <p>Memory Limit: {{ problem.memoryLimit }}</p>
      <p>Statement: {{ problem.statement }}</p>
      <p>Statement Input: {{ problem.statementInput }}</p>
      <p>Statement Output: {{ problem.statementOutput }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    props: {
      id: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  