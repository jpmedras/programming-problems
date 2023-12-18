<script setup>
import ProblemSection from '../components/ProblemSection.vue'
</script>

<template>
  <div class="mural">
    <ProblemSection />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .mural {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
