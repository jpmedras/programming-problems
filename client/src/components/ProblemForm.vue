<template>
    <div class="from">
    <label>Title:</label>
    <input v-model="this.title" placeholder="LOL Lovers" />

    <label>Difficulty:</label>
    <section
      v-for="(difficultyOption, index) in difficulties"
      :key="index"
    >
      <input type="radio" :id="difficultyOption.name" :value="difficultyOption.name" v-model="this.difficulty" />
      <label :for="difficultyOption.name">{{ difficultyOption.name }}</label>
    </section>


    <label>Topic:</label>
    <select v-model="this.topic">
    <option
      v-for="(topicOption, index) in this.topics"
      :key="index"
      :value="topicOption.name"
    >
      {{ topicOption.name }}
    </option>
    </select>


    <label>Time limit per test:</label>
    <input v-model="this.time" placeholder="3 seconds" />

    <label>Memory limit per test:</label>
    <input v-model="this.memory" placeholder="1024 megabytes" />
    
    <label>Input:</label>
    <input v-model="this.input" placeholder="standard input" />

    <label>Output:</label>
    <input v-model="this.output" placeholder="standard input" />

    <label style="white-space: pre-line;">Statment:</label>
    <div>
        <textarea v-model="this.statment" placeholder="Problem statment"></textarea>

        <label style="white-space: pre-line;">Input:</label>
        <textarea v-model="this.statmentInput" placeholder="Input description"></textarea>

        <label style="white-space: pre-line;">Output:</label>
        <textarea v-model="this.statmentOutput" placeholder="Output description"></textarea>
    </div>

    <button
        type="submit"
        @click="this.submitForm()"
    >
        Submit
    </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      topics: null,
      difficulties: null,

      title: null,
      topic: null,
      difficulty: null,
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
            ) { return; }

            let data = {};
            this.title && (data.title = this.title);
            this.topic && (data.topic = this.topics.find(x => x.name === this.topic).id);
            this.difficulty && (data.difficulty = this.difficulties.find(x => x.name === this.difficulty).id);
            this.statment && (data.statment = this.statment);
            this.statment && (data.statment = this.statment);
            this.statmentInput && (data.statmentInput = this.statmentInput);
            this.statmentOutput && (data.statmentOutput = this.statmentOutput);

            console.log(data);

            fetch('http://localhost:4000/problems', {
                method: "POST",
                body: data,
            })
            .then((response) => {
            //   response.json().then((data) => {
            //     this.problems = data;
            //   });
            })
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
.inline-input {
  display: inline-block;
}

select, label, input {
  display: block;
  margin: 5px;
}

input,
textarea {
  font-family: 'Courier New', Courier, monospace;
}

input,
select,
textarea,
button {
  margin-bottom: 10px;
}

button {
  cursor: pointer;
}

div {
  margin: 20px;
}
</style>