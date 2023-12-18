<script setup>
import ProblemForm from '../components/ProblemForm.vue'
</script>

<template>
    <div class="register">
      <!-- <h2>Form</h2> -->
      <ProblemForm 
      />
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .register {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  