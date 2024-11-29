<template>
    <div>
      <ul>
        <li
          v-for="(task, index) in tasks"
          :key="index"
          :class="{ completed: task.completed }"
        >
          <span @click="toggleTask(index)" class="task-text">{{ task.text }}</span>
          <button @click="removeTask(index)">Удалить</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tasks: Array,
    },
    methods: {
      toggleTask(index) {
        this.$emit('task-toggled', index);
      },
      removeTask(index) {
        this.$emit('task-removed', index);
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  .task-text {
    cursor: pointer;
  }
  button {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #c82333;
  }
  </style>