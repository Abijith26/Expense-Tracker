<script setup>
// import { Store } from '@/stores/store'
import { storeToRefs } from 'pinia'
import { Store1 } from '@/stores/store1'
import { Teleport } from 'vue'
import AccountsForm from '@/views/accountForm.vue'
import SavingsForm from '@/views/savingsForm.vue'
import ExpenseForm from '@/views/expenseForm.vue'
import DashHeading from '@/components/dashHeading.vue'

import DeleteAccountForm from '@/views/DeleteAccountForm.vue'
import TabsDashBoard from './tabsDashBoard.vue'

const storeData = Store1()

const { toggleAccountForm, toggleSavingsForm, toggleExpenseForm, toggleDeleteAccountForm } =
  storeData
const {
  showAccountFormStatus,
  showSavingsFormStatus,
  showExpenseFormStatus,
  showDeleteAccountFormStatus
} = storeToRefs(storeData)

// const { toggleAccountForm, toggleSavingsForm, toggleExpenseForm } = storeData
// const { userAccount } = toRef(stateAccount, 'userAccount')

// Function to get the length of userAccount array
// const userAccountLength = computed(() => userAccount.value.length)

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

// Expense Form
const openExpenseForm = () => {
  toggleExpenseForm()
}

// Closing the form
const closeExpenseForm = () => {
  toggleExpenseForm()
}

// Delete Account Form
const openDeleteAccountForm = () => {
  toggleDeleteAccountForm()
}

// Closing the form
const closeDeleteAccountForm = () => {
  toggleDeleteAccountForm()
}

const logOut = () => {
  router.push('/')
}
import router from '@/router'
</script>
<template>
  <div
    :class="[
      'container',
      {
        'blur-background':
          showAccountFormStatus ||
          showSavingsFormStatus ||
          showExpenseFormStatus ||
          showDeleteAccountFormStatus
      }
    ]"
  >
    <!-- sidebar -->
    <aside>
      <nav class="nav-style">
        <ul>
          <li @click="openAccountForm">Create Account</li>
          <li @click="openSavingsForm">Update Salary</li>
          <li @click="openExpenseForm">Update Expense</li>
          <li @click="openDeleteAccountForm">Delete Account</li>
          <li @click="logOut">Log-Out</li>
        </ul>
      </nav>
    </aside>
    <!-- Main Content -->
    <main>
      <div class="heading-container">
        <DashHeading />
        <!-- <nav class="tabs">
          <a>Home</a>
          <a>Logs</a>
        </nav> -->
      </div>
      <TabsDashBoard />
      <!-- <AccountsTable1 /> -->
      <!-- <TotalLogs /> -->
    </main>
  </div>
  <!-- To display as a modal -->
  <Teleport to="body">
    <AccountsForm v-if="showAccountFormStatus" @closeForm="closeAccountForm" />
    <SavingsForm v-if="showSavingsFormStatus" @closeForm="closeSavingsForm" />
    <ExpenseForm v-if="showExpenseFormStatus" @close-form="closeExpenseForm" />
    <DeleteAccountForm v-if="showDeleteAccountFormStatus" @close-form="closeDeleteAccountForm" />
    <!-- <DeleteAccountForm v-if="showDeleteAccountFormStatus" @close-form="closeDeleteAccountForm" /> -->
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

.heading-container {
  display: flex;
  gap: 15px;
}

/* .tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  font-family: 'Poppins';
  font-weight: 600;
  padding: 2px;
  background: whitesmoke;
  width: 15%;
  border-radius: 5px;
}

.tabs a {
  padding: 5px;
  font-size: 16px;
}

.tabs > a:hover {
  background: red;
  color: white;
  border-radius: 5px;
 
} */
</style>
