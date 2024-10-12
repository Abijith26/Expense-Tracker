<script setup>
import { Store } from '@/stores/store'
import { toRefs, Teleport } from 'vue'
import AccountsForm from '@/views/accountForm.vue'
import SavingsForm from '@/views/savingsForm.vue'
import DashHeading from '@/components/dashHeading.vue'

const storeData = Store()

const { toggleAccountForm, toggleSavingsForm, state } = storeData

const { showAccountFormStatus, showSavingsFormStatus } = toRefs(state)

// Create Accounts Form
// Opening the form
const openAccountForm = () => {
  toggleAccountForm()
}

// Closing the form
const closeAccountForm = () => {
  toggleAccountForm()
}

// Savings Form
// Opening the form
const openSavingsForm = () => {
  toggleSavingsForm()
}

// Closing the form
const closeSavingsForm = () => {
  toggleSavingsForm()
}
</script>
<template>
  <div
    :class="['container', { 'blur-background': showAccountFormStatus || showSavingsFormStatus }]"
  >
    <!-- sidebar -->
    <aside>
      <nav class="nav-style">
        <ul>
          <li @click="openAccountForm">Create Account</li>
          <li @click="openSavingsForm">Update Salary</li>
          <li>Update Expense</li>
        </ul>
      </nav>
    </aside>
    <!-- Main Content -->
    <main><DashHeading /></main>
  </div>
  <!-- To display as a modal -->
  <Teleport to="body">
    <AccountsForm v-if="showAccountFormStatus" @closeForm="closeAccountForm" />
    <SavingsForm v-if="showSavingsFormStatus" @closeForm="closeSavingsForm" />
  </Teleport>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.blur-background {
  filter: blur(5px);
}

.container {
  display: flex;
  flex-direction: row;
  gap: 15px;
  transition: filter 0.3s ease-in-out;
}

.nav-style {
  background-color: #a1c6ea;
  width: max-content;
  height: 95vh;
  margin-top: 10px;
  padding: 15px;
  border-radius: 5px;
}

.nav-style > ul {
  list-style: none;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-style > ul > li {
  padding: 10px;
}

.nav-style > ul > li:hover {
  border-radius: 5px;
  background-color: #fc738c;
  color: #ffff;
  cursor: pointer;
}

main {
  margin-top: 10px;
  padding: 15px;
  background-color: #dae3e5;
  flex-grow: 1;
  border-radius: 5px;
}
</style>
