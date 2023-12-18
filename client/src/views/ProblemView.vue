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
  export default {
    props: {
      id: Number,
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
        method: "GET",
      })
        .then((response) => {
          response.json().then((data) => {
            console.log(this.id)
            this.problem = data.filter(x => x.id === this.id);
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
  