<template>
  <div id="form">
  <label>Title:</label>
  <input v-model="this.title" placeholder="LOL Lovers">

  <label>Topic:</label>
  <select v-model="this.topic">
    <option
      v-for="(topicOption, index) in this.topics"
      :key="index"
      :value="topicOption.id"
    >
      {{ topicOption.name }}
    </option>
  </select>

  <label>Difficulty:</label>
  <section
    v-for="(difficultyOption, index) in difficulties"
    :key="difficultyOption.id"
    class="radio-input"
  >
    <input type="radio" :id="difficultyOption.name" :value="difficultyOption.id" v-model="this.difficulty">
    <label :for="difficultyOption.name">{{ difficultyOption.name }}</label>
  </section>

  <label>Time limit per test:</label>
  <input v-model="this.time" placeholder="3 seconds">

  <label>Memory limit per test:</label>
  <input v-model="this.memory" placeholder="1024 megabytes">

  <label>Input:</label>
  <input v-model="this.input" placeholder="standard input">

  <label>Output:</label>
  <input v-model="this.output" placeholder="standard output">

  <label style="white-space: pre-line;">Statment:</label>
  <textarea v-model="this.statment" placeholder="Problem statment"></textarea>

  <label style="white-space: pre-line;">Input:</label>
  <textarea v-model="this.statmentInput" placeholder="Input description"></textarea>

  <label style="white-space: pre-line;">Output:</label>
  <textarea v-model="this.statmentOutput" placeholder="Output description"></textarea>

  <button
    type="submit"
    @click="this.submitForm()"
  >
    Submit
  </button>
  <p v-if="!this.status">Try again...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: true,

      topics: null,
      difficulties: null,

      title: null,
      topic: 1,
      difficulty: 1,
      time: null,
      memory: null,
      input: null,
      output: null,
      statment: null,
      statmentInput: null,
      statmentOutput: null
    };
  },
  methods: {
    submitForm() {
        if (
            this.title.trim() === '' ||
            this.topic == null ||
            this.difficulty == null ||
            this.statment.trim() === '' ||
            this.statmentInput.trim() === '' ||
            this.statmentOutput.trim() === ''
            ) {
              this.resp = 0;
              return; 
            }

            fetch('http://localhost:4000/problems', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  title: this.title,
                  topic: this.topic,
                  difficulty: this.difficulty,
                  time: this.time,
                  memory: this.memory,
                  input: this.input,
                  output: this.output,
                  statment: this.statment,
                  statmentInput: this.statmentInput,
                  statmentOutput: this.statmentOutput,
                }),
            })
            .then(response => response.json())
            .then(data => this.resp = data)
            .catch((err) => {
              console.error(err);
            });
    },
    fetchData() {
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
}
</script>

<style scoped>
#form {
  display: inline-block;
}

input,
textarea {
  font-family: 'Courier New', Courier, monospace;
}

label {
  display: block;
  margin-bottom: 5px; /* Adicionei uma margem inferior menor entre os rótulos */
}

input, select, textarea, button {
  width: 100%;
  margin-bottom: 10px; /* Adicionei uma margem inferior para separação vertical */
}

section > input, section > label {
  width: auto;
  display: inline;
  margin-right: 3px;
}

button {
  cursor: pointer;
}
</style>