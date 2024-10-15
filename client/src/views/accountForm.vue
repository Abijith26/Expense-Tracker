<script setup>
import { ref } from 'vue'
// import { Store } from '@/stores/store'
// import { Store1 } from '@/stores/store1'
import { Store1 } from '@/stores/store1'
// Importing Toast Alert and its CSS
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

// const storeData = Store()

// const { addUser } = storeData

const storeData = Store1()

const { addUser } = storeData

// State variables to store the credentials from the super-user
const accountName = ref('')
const initialBalance = ref(0)

const emit = defineEmits(['closeForm'])

const createAccount = () => {
  if (initialBalance.value > 0) {
    addUser(accountName.value, initialBalance.value)
    // Calling the Toaster Alert to display the error message
    toast.success('Created Account Successfully ', {
      position: toast.POSITION.TOP_CENTER
    })
    console.log('Account created...')
    emit('closeForm')
  } else {
    // Calling the Toaster Alert to display the error message
    toast.error('Deposit atleast $1', {
      position: toast.POSITION.TOP_CENTER
    })
  }
}
</script>
<template>
  <div class="background">
    <form class="form-container" @submit.prevent="createAccount">
      <button class="cancel-button" @click="$emit('closeForm')">❌</button>
      <!-- Account Name Field -->
      <div class="field-container">
        <label for="account-name">Account Name</label>
        <input
          type="text"
          id="account-name"
          required
          placeholder="Eg. Smith"
          v-model="accountName"
        />
      </div>
      <!-- Amount Field -->
      <div class="field-container">
        <label for="initial-amount">Initial Amount</label>
        <input type="number" id="initial-amount" v-model="initialBalance" required />
      </div>
      <button class="button-style">Create</button>
    </form>
  </div>
</template>
<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: min-content;
  height: min-content;
  background-color: #e5e5e5;
  padding: 50px;
  border-radius: 5%;
  z-index: 999;
  /* Fixing its position */
  position: fixed;
  top: 15%;
  left: 40%;
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

.field-container > label {
  color: #495057;
}

/* Hide the spin buttons in WebKit browsers */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Hide spin buttons in Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

.field-container > input:hover,
.field-container > input:focus {
  outline: none;
  border-color: #05060f;
}
.cancel-button {
  /* padding-block: 0.8rem;
  padding-inline: 1.25rem; */
  /* font-size: 15px; */
  /* text-align: center; */
  /* border-radius: 8px; */
  border: none;
  font-weight: bold;
  background: none;
  position: absolute;
  top: 15px;
  right: 15px;
  /* background-color: white; */
  /* color: black; */
  transition: 0.4s ease-in-out;
}

.cancel-button:hover {
  cursor: pointer;
}
.button-style {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.8rem;
  padding-inline: 1.25rem;
  background-color: rgb(0 107 179);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
  margin-top: 15px;
}

.button-style:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.button-style:hover .icon {
  transform: translate(4px);
}

.button-style:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.button-style::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}
</style>
