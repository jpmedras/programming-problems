<script setup>
import { ref } from 'vue'

const title =  ref();
const selectedDifficulty = ref('Easy');
const selectedTopic = ref();
const time = ref();
const memory = ref();
const input = ref();
const output = ref();
const statment = ref();
const statmentInput = ref();
const statmentOutput = ref();

const count = ref(1)
const examplesInput = ref([]);
const examplesOutput = ref([]);

const difficulties = [
    {text: 'easy', value: 'Easy'},
    {text: 'medium', value: 'Medium'},
    {text: 'hard', value: 'Hard'},
];

const topics = [
    {text: 'String', value: 'string'},
    {text: 'Array', value: 'array'},
    {text: 'Loop', value: 'loop'},
];

function submitForm() {
    console.log(!title.value)
    if (
        title.value.trim() === '' ||
        selectedTopic.value.length == 0 ||
        statment.value.trim() === '' ||
        statmentInput.value.trim() === '' ||
        statmentOutput.value.trim() === '' ||
        examplesInput.value.some((text) => text.trim() === '') ||
        examplesOutput.value.some((text) => text.trim() === '')
    ) {
        return
    }
    console.log('deu certo');
}
</script>

<script>
export default {
  name: 'RegisterPage'
}
</script>

<template>
    <label>Title:</label>
    <input v-model="title" placeholder="LOL Lovers" />

    <label>Difficulty:</label>
    <template
        v-for="(difficulty, index) in difficulties"
        :key="index"
    >
        <input type="radio" :id="difficulty.text" :value="difficulty.value" v-model="selectedDifficulty" class="inline-input" />
        <label :for="difficulty.text" class="inline-input">{{ difficulty.value }}</label>
    </template>

    <label>Topic:</label>
    <select v-model="selectedTopic">
        <option
            v-for="(topic, index) in topics"
            :key="index"
            :value="topic.value"
            >
            {{ topic.text }}
        </option>
    </select>

    <label>Time limit per test:</label>
    <input v-model="time" placeholder="3 seconds" />

    <label>Memory limit per test:</label>
    <input v-model="memory" placeholder="1024 megabytes" />

    <label>Input:</label>
    <input v-model="input" placeholder="standard input" />

    <label>Output:</label>
    <input v-model="output" placeholder="standard input" />

    <label style="white-space: pre-line;">Statment:</label>
    <div >
        <textarea v-model="statment" placeholder="Problem statment"></textarea>

        <label style="white-space: pre-line;">Input:</label>
        <textarea v-model="statmentInput" placeholder="Input description"></textarea>

        <label style="white-space: pre-line;">Output:</label>
        <textarea v-model="statmentOutput" placeholder="Output description"></textarea>
    </div>

    <button type="button" @click="count++">+</button>
    <button type="button" @click="count > 1 ? count-- : count">-</button>

    <template
        v-for="(n, index) in count"
        :key="index"
    >
        <label for="example{{ n }}">Example {{ n }}:</label>
        <div>
            <label style="white-space: pre-line;">Input:</label>
            <textarea v-model="examplesInput[n - 1]"></textarea>
            <label style="white-space: pre-line;">Output:</label>
            <textarea v-model="examplesOutput[n - 1]"></textarea>
        </div>
    </template>

    <button
        type="submit"
        @click="submitForm()"
    >
        Submit
    </button>
    
</template>

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