<script setup>
import { ref, onMounted } from 'vue';
import { toRaw } from 'vue';
import { MuralPage } from './components/Mural.vue';
import { RegisterPage } from './components/Register.vue';

const API_URL = "http://localhost:4000";

const problems = ref([]);
const topics = ref([]);
const difficulties = ref([]);

const fetchProblems = async () => {
  try {
    const response = await fetch(API_URL + '/problems');
    const data = await response.json();
    problems.value = toRaw(data);
  } catch (error) {
    console.error('Error fetching:', error);
  }
};

const fetchTopics = async () => {
  try {
    const response = await fetch(API_URL + '/topics');
    const data = await response.json();
    topics.value = toRaw(data);
  } catch (error) {
    console.error('Error fetching:', error);
  }
};

const fetchDifficulties = async () => {
  try {
    const response = await fetch(API_URL + '/difficulties');
    const data = await response.json();
    difficulties.value = toRaw(data);
  } catch (error) {
    console.error('Error fetching:', error);
  }
};

const pages = ref([]);
onMounted(() => {
  fetchProblems();
  fetchTopics();
  fetchDifficulties();
  pages.value = [
    { title: 'Mural', component: MuralPage, props: { problems, difficulties, topics }, },
    { title: 'Register', component: RegisterPage, props: {}, },
  ];
});

const activePage = ref(0)
</script>

<template>
  <nav>
    <ul>
        <li v-for="(page, index) in pages" :key="index">
          <a
            :class="{active: activePage == index}"
            @click.prevent="activePage = index"
          >
            {{ page.title }}
          </a>
        </li>
    </ul>
  </nav>
  <component
    v-if="pages[activePage]?.component"
    :is="pages[activePage].component"
    v-bind="pages[activePage].props"
  />
</template>

<style scoped>
nav {
    width: 100%;
    background-color: #f2f2f2;
}

nav > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

nav > ul > li {
    float: left;
}

nav > ul > li > a {
    display: block;
    color: #222222;
    text-align: center;
    padding: 14px 16px;
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
</style>