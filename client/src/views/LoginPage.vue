<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>
<template>
  <div class="container">
    <form class="form-container" @submit.prevent="">
      <!-- Username Field -->
      <div class="field-container">
        <label for="super-user-name">Name</label>
        <input
          type="text"
          id="super-user-name"
          required
          placeholder="Eg. Steve"
          v-model="username"
        />
      </div>
      <!-- Password Field -->
      <div class="field-container">
        <label for="super-user-name-password">Password</label>
        <input type="password" id="super-user-name-password" required v-model="password" />
      </div>
    </form>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: lightgrey;
}
.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: min-content;
  height: min-content;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #ff53d4 60%, #62c2fe 90%);
  padding: 70px;
  border-radius: 5%;
}

.field-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: sans-serif;
  font-weight: 600;
}

.field-container > input {
  max-width: 350px;
  height: 44px;
  padding: 5px;
  background-color: whitesmoke;
  border-radius: 0.5rem;
  padding: 0 1rem;
  border: 2px solid transparent;
  font-size: 1rem;
}

.field-container > input:hover,
.field-container > input:focus {
  outline: none;
  border-color: #05060f;
}
</style>
