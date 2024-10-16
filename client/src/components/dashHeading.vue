<script setup>
import router from '@/router'

const logOut = () => {
  router.push('/login')
}
</script>

<template>
  <div class="container">
    <button @click="logOut" class="clear-button">Log-Out</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;

  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
}

.clear-button {
  padding: 10px;
  font-family: 'Poppins';
  font-weight: 600;
  border: none;
  border-radius: 5px;
  background-color: burlywood;
  width: fit-content;
  height: fit-content;
  transition: all 0.2s ease-in;
}

.clear-button:hover {
  background-color: red;
  color: white;
  cursor: pointer;
}
</style>
