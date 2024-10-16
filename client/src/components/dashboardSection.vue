<script setup>
import { storeToRefs } from 'pinia'
import { Store1 } from '@/stores/store1'
import { Teleport } from 'vue'
import AccountsForm from '@/views/accountForm.vue'
import SavingsForm from '@/views/savingsForm.vue'
import ExpenseForm from '@/views/expenseForm.vue'

import DeleteAccountForm from '@/views/DeleteAccountForm.vue'
import TabsDashBoard from './tabsDashBoard.vue'
import DashHeading from './dashHeading.vue'

const storeData = Store1()

const { toggleAccountForm, toggleSavingsForm, toggleExpenseForm, toggleDeleteAccountForm } =
  storeData
const {
  showAccountFormStatus,
  showSavingsFormStatus,
  showExpenseFormStatus,
  showDeleteAccountFormStatus
} = storeToRefs(storeData)

// Opening the Create Account form
const openAccountForm = () => {
  toggleAccountForm()
}

// Closing the Create Account form
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
        </ul>
      </nav>
    </aside>
    <!-- Main Content -->
    <main>
      <DashHeading />
      <TabsDashBoard />
    </main>
  </div>
  <!-- To display as a modal -->
  <Teleport to="body">
    <AccountsForm v-if="showAccountFormStatus" @closeForm="closeAccountForm" />
    <SavingsForm v-if="showSavingsFormStatus" @closeForm="closeSavingsForm" />
    <ExpenseForm v-if="showExpenseFormStatus" @close-form="closeExpenseForm" />
    <DeleteAccountForm v-if="showDeleteAccountFormStatus" @close-form="closeDeleteAccountForm" />
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
  align-items: stretch;
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
  padding: 5px;
  background-color: #dae3e5;
  flex-grow: 1;
  border-radius: 5px;
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
