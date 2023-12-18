<script setup>
  const problem = {
    id: 0,
    title: 'LOL Lovers',
    difficulty: 0,
    topics: [0, 1, 2],
    properties: {
      time: '3 seconds',
      memory: '1024 megabytes',
      input: 'standard input',
      output: 'standard output',
    },
    statment: `There are n food items lying in a row on a long table. Each of these items is either a loaf of bread (denoted as a capital Latin letter 'L' with ASCII code 76) or an onion (denoted as a capital Latin letter 'O' with ASCII code 79). There is at least one loaf of bread and at least one onion on the table.`,
    input: `The first line contains one integer n`,
    output: `Print one integer — a number k such that`,
    examples: [
      {
        input: 
        `3
        LOL`,
        output:
        `-1`,
      },
      {
        input: 
        `3
        LOL`,
        output:
        `-1`,
      },
    ],
    note: 'In the first example, in any division the left and the right part contain one loaf of bread.'
  };
</script>

<template>
  <main>
        <header>
          <h1>{{ problem.title }}</h1>
          <div id="properties">
            <h2>time limit per test: {{ problem.properties.time }}</h2>
            <h2>memory limit per test: {{ problem.properties.memory }}</h2>
            <h2>input: {{ problem.properties.input }}</h2>
            <h2>output: {{ problem.properties.output }}</h2>
          </div>
        </header>
        <p v-html="problem.statment"></p>
        <div id="input">
          <h2>Input</h2>
          <p v-html="problem.input"></p>
        </div>
        <div id="output">
          <h2>Output</h2>
          <p v-html="problem.output"></p>
        </div>
        <div id="examples">
          <h2>Examples</h2>
          <ul>
            <li v-for="example in problem.examples">
              <div id="example-input">
                <h3>input</h3>
                <p v-html="example.input"></p>
              </div>
              <div id="example-output">
                <h3>output</h3>
                <p v-html="example.output"></p>
              </div>
            </li>
          </ul>
        </div>
  </main>
</template>