<template>
  <div id="app">
    <h1>Управление задачами</h1>
    <AddTask @task-added="addTask" />
    <TaskList
      :tasks="tasks"
      @task-toggled="toggleTask"
      @task-removed="removeTask"
    />
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    AddTask,
    TaskList,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(taskText) {
      this.tasks.push({ text: taskText, completed: false });
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style>
body{
  background-color: #7c7c7c;
}
  #app {
    max-width: 600px;
    margin: 10 auto;
    padding: 20px;
    background-color: #979797;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  h1 {
    text-align: center;
  }
</style>