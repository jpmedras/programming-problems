<template>
  <div class="hello">
    <a
      v-if="problems && topics && difficulties"
      v-for="(problem, index) in problems"
      :key="index"
    >
        <h3>Title: <span>{{ problem.title }}</span></h3>
        <h4>Topic: <span>{{ topics.find(x => x.id === problem.topic).name }}</span></h4>
        <h4>Difficulty: <span>{{ difficulties.find(x => x.id === problem.difficulty).name }}</span></h4>
        <h5><span>time limit per test: {{ problem.time }}</span></h5>
        <h5><span>memory limit per test: {{ problem.memory }}</span></h5>
        <h5><span>input: {{ problem.input }}</span></h5>
        <h5><span>output: {{ problem.output }}</span></h5>
        <h6><span>Statment: {{ problem.statment }}</span></h6>
        <h6><span>Statment (input): {{ problem.statmentInput }}</span></h6>
        <h6><span>Statment (output):{{ problem.statmentOutput }}</span></h6>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      problems: null,
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
            this.problems = data;
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

    filter(data) {
      return this.problems
        .filter((problem) => problem[data.prop] == data.value)
    }
  },
  beforeMount() {
   this.fetchData();
  },
};
</script>
<style>
span {
  color: black;
}

button {
padding: 12px 32px;
font-size: 16px;
border-radius: 8px;
}
</style>