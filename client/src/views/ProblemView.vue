<template>
    <div>
      <h2 v-if="problem.title" >{{ problem.title }}</h2>
      <h3 v-if="problem.topic">Topic: {{ topics.find(x => x.id == problem.topic).name }}</h3>
      <h3 v-if="problem.difficulty">Difficulty: {{ difficulties.find(x => x.id == problem.difficulty).name }}</h3>
      <p v-if="problem.input">Input Description: {{ problem.input }}</p>
      <p v-if="problem.output">Output Description: {{ problem.output }}</p>
      <p v-if="problem.time">Time Limit: {{ problem.time }}</p>
      <p v-if="problem.memory">Memory Limit: {{ problem.memory }}</p>
      <p v-if="problem.statment">Statement: {{ problem.statment }}</p>
      <p v-if="problem.statmentInput">Statement Input: {{ problem.statmentInput }}</p>
      <p v-if="problem.statmentOutput">Statement Output: {{ problem.statmentOutput }}</p>
    </div>
  </template>
  
  <script>  
  export default {
    props: {
      id: String,
    },
    data() {
    return {
      problem: null,
      topics: null,
      difficulties: null
    };
  },
  methods: {
    fetchData() {
        fetch('http://localhost:4000/problems', {
        method: 'GET',
      })
        .then((response) => {
          response.json().then((data) => {
            this.problem = data.find(x => x.id == this.id);
          });
        })
        .catch((err) => {
          console.error(err);
        });
      fetch('http://localhost:4000/topics', {
        method: "GET",
      })
        .then((response) => {
          response.json().then((data) => {
            this.topics = data;
          });
        })
        .catch((err) => {
          console.error(err);
        });
      fetch('http://localhost:4000/difficulties', {
        method: "GET",
      })
        .then((response) => {
          response.json().then((data) => {
            this.difficulties = data;
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  beforeMount() {
   this.fetchData();
  },
};
</script>
  