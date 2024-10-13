import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const Store = defineStore('counter', () => {
  const superUser = { email: 'Christof@bank.com', secret: 'Munich' }

  const state = reactive({
    showAccountFormStatus: false,
    showSavingsFormStatus: false,
    showExpenseFormStatus: false
  })

  // Toggling Accounts Form
  const toggleAccountForm = () => {
    state.showAccountFormStatus = !state.showAccountFormStatus
    console.log(state.showAccountFormStatus)
  }

  // Toggling Savings Form
  const toggleSavingsForm = () => {
    state.showSavingsFormStatus = !state.showSavingsFormStatus
    console.log(state.showSavingsFormStatus)
  }

  // Toggling Expense Form
  const toggleExpenseForm = () => {
    state.showExpenseFormStatus = !state.showExpenseFormStatus
    console.log(state.showExpenseFormStatus)
  }

  // Getting the Super User Name
  const getFullName = computed(() => {
    return superUser.email.split('@')[0]
  })

  return {
    superUser,
    getFullName,
    toggleAccountForm,
    toggleSavingsForm,
    toggleExpenseForm,
    state
  }
})
