<script setup>
import ProblemTable from '../components/ProblemTable.vue'
</script>

<template>
  <div class="mural">
    <ProblemTable />
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
