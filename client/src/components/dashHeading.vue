<script setup>
// import { ref } from 'vue'
import { Store } from '@/stores/store'

const storeData = Store()

// Destructuring to get the necessary data as it is of non-reactive type
</script>

<template>
  <p class="heading">Hallo, Herr {{ storeData.getFullName }}!</p>
</template>

<style scoped>
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
</style>
