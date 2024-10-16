<script setup>
import { ref } from 'vue'
import { Store1 } from '@/stores/store1'
import router from '@/router'

// Importing Toast Alert and its CSS
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

// State variables to store the credentials from the super-user
const superUserEmailID = ref('')
const password = ref('')

function validate() {
  // Password Validation Rules (regex: at least 8 characters, 1 uppercase, 1 number, 1 special character)
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  const passwordResult = passwordRegex.test(password.value)

  // Checking if the password meets the criteria
  if (!passwordResult) {
    toast.error(
      'Password must be at least 8 characters long and include one uppercase letter, one number, and one special character.',
      {
        position: toast.POSITION.TOP_CENTER
      }
    )
    return
  }
  console.log('Function Called...')

  console.log(password.value)

  // Accessing the store
  const storeData = Store1()

  // Correctly accessing the getter for credentials
  const credentials = storeData.getCredentials

  // Destructuring to get the necessary data from the store
  const { email, secret } = credentials

  console.log(`Extraction done - Email: ${email}, Secret: ${secret}`)

  // Validating credentials
  console.log('Validation Starts...')
  if (superUserEmailID.value === email && password.value === secret) {
    console.log('Validation successful!')
    toast.success('Right Credentials --> Logging In', {
      position: toast.POSITION.TOP_CENTER
    })
    router.push('/dashboard')
  } else {
    if (superUserEmailID.value !== email) {
      toast.error('Incorrect email 😕', {
        position: toast.POSITION.TOP_CENTER
      })
    } else if (password.value !== secret) {
      toast.error('Incorrect password 😕', {
        position: toast.POSITION.TOP_CENTER
      })
    } else {
      toast.error('Enter the correct email and password 😕', {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  // Clear fields after validation
  superUserEmailID.value = ''
  password.value = ''
}
</script>
<template>
  <div class="container">
    <form class="form-container" @submit.prevent="validate">
      <p class="title">Login</p>
      <!-- Username Field -->
      <div class="field-container">
        <label for="super-user-name">Email-ID</label>
        <input
          type="email"
          id="super-user-name"
          required
          placeholder="Eg. Steve@xyz.com"
          v-model="superUserEmailID"
        />
      </div>
      <!-- Password Field -->
      <div class="field-container">
        <label for="super-user-name-password">Password</label>
        <input type="password" id="super-user-name-password" v-model="password" required />
      </div>
      <button class="button-style">Login</button>
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

  background: #121212;
  background: linear-gradient(
    135deg,
    #121212 25%,
    #1a1a1a 25%,
    #1a1a1a 50%,
    #121212 50%,
    #121212 75%,
    #1a1a1a 75%,
    #1a1a1a
  );
  background-size: 40px 40px;

  /* Using Animation */
  animation: move 4s linear infinite;
}

/* Animation */
@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
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

.title {
  text-align: center;
  font-weight: 900;
  font-size: 30px;
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
