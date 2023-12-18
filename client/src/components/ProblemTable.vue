<template>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Difficulty</th>
        <th>Topic</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="problem in problems" :key="problem.id" @click="goToProblemDetail(problem.id)">
        <td>{{ problem.title }}</td>
        <td>{{ problem.difficulty }}</td>
        <td>{{ problem.topic }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      problems: null,
      topics: null,
      difficulties: null
    };
  },
  methods: {
    goToProblemDetail(problemId) {
      this.$router.push({ path: `/${problemId}`, params: {id: problemId} });
    },
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

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px; /* Adicionei uma margem superior para espaçamento visual */
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #eee;
  cursor: pointer;
}
</style>