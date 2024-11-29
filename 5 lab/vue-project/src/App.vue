<template>
  <div id="app">
    <h1>Случайные Пользователи</h1>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Поиск по имени или электронной почте..."
    />
    <div class="card-container">
      <div class="card" v-for="user in filteredUsers" :key="user.id">
        <h2>{{ user.firstname }} {{ user.lastname }}</h2>
        <p>Email: {{ user.email }}</p>
        <p>Username: {{ user.username }}</p>
        <p>Website: {{ user.website }}</p>
        <p>IP: {{ user.ip }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      searchQuery: '',
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => {
        const nameMatch = user.firstname.toLowerCase().includes(this.searchQuery.toLowerCase());
        const emailMatch = user.email.toLowerCase().includes(this.searchQuery.toLowerCase());
        return nameMatch || emailMatch;
      });
    },
  },
  mounted() {
    fetch('https://fakerapi.it/api/v2/users?_quantity=10&_gender=male')
      .then(response => response.json())
      .then(data => {
        this.users = data.data;
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  },
};
</script>

<style>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
  }

  h1 {
    text-align: center;
    color: #333;
  }

  input {
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px; 
    justify-items: center; 
  }

  .card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    transition: transform 0.2s;
  }

  .card:hover {
    transform: translateY(-5px); 
  }

  .user-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 15px;
    border: 2px solid #007bff; 
  }

  .card h2 {
    font-size: 18px;
    margin: 10px 0;
    color: #007bff; 
  }

  .card p {
    margin: 5px 0;
    color: #555; 
  }
</style>