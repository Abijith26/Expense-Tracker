<script setup>
import { Store1 } from '@/stores/store1'
import router from '@/router'

const storeData = Store1()

const logOut = () => {
  router.push('/login')
}
</script>

<template>
  <div class="container">
    <p class="heading">Hello!, Admin &nbsp;{{ storeData.getFullName }}🙂</p>
    <button @click="logOut" class="clear-button">Log-Out</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.heading {
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bolder;
  background-color: grey;
  color: whitesmoke;
  padding: 10px;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
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
