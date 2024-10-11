<script setup>
import { ref } from 'vue'
// import { Store } from '@/stores/store'

// State variables to store the credentials from the super-user
const accountName = ref('')
const initialBalance = ref(0)
</script>
<template>
  <form>
    <!-- Account Name Field -->
    <div class="field-container">
      <label for="account-name">Account Name</label>
      <input type="text" id="account-name" required placeholder="Eg. Smith" v-model="accountName" />
    </div>
    <!-- Amount Field -->
    <div class="field-container">
      <label for="initial-amount">Password</label>
      <input type="number" id="initial-amount" v-model="initialBalance" required />
    </div>
    <button class="button-style">Submit</button>
  </form>
</template>
<style scoped></style>
