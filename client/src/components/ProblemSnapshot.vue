<script setup>
import { defineProps } from "vue";

defineProps({
    id: Number,
    title: String,
    topic: String,
});
</script>

<script>
export default {
  name: 'ProblemSnapshot'
}
</script>

<template>
    <a
        href="problem/{{ id }}"
        @click.prevent="console.log({ id })"

    >
        <h3>{{ title }}</h3>
        <h4>{{ topic }}</h4>
    </a>
</template>

<style scoped>
a {
    text-decoration: none;
    display: block;
    padding: 0.5%;
    margin: 0.5%;
    border-style: solid;
}

a:hover {
    background-color: #ddd;
}
</style>

