<template>
    <div id="das">
      <input
        v-model="task"
        @keyup.enter="addTask"
        placeholder="Добавьте новую задачу..."
      />
      <button @click="addTask">Добавить</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        task: '',
      };
    },
    methods: {
      addTask() {
        if (this.task.trim()) {
          this.$emit('task-added', this.task);
          this.task = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  input {
    padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  flex: 1; 
  font-size: 16px;
  }

  input:focus {
  border-color: #007bff; 
  outline: none; 
}

  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 50px;
  }
  button:hover {
    background-color: #0056b3;
  }

  #das{
    margin-left: 50px;
    margin-top: 15px;
  }
  </style>