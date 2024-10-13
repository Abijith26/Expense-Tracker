import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

export const Store = defineStore('counter', () => {
  const superUser = { email: 'Christof@bank.com', secret: 'Munich' }

  // User ID Count
  let userIdCount = 1

  // Creating array to store the account information
  const stateAccount = reactive({
    userAccount: [{ accountID: userIdCount++, accountName: 'Veer', balance: 250 }],
    savingsHistory: [],
    expenseHistory: []
  })

  // Function to add users to the accounts array
  const addUser = (name, initialBalance) => {
    const userDetail = {
      accountID: userIdCount++,
      accountName: name,
      balance: initialBalance
    }

    stateAccount.userAccount.push(userDetail)
    // }
    // for checking purpose
    console.log(stateAccount.userAccount)
  }

  // Function to update the savings
  const updateSaving = (id, saving) => {
    stateAccount.userAccount.forEach((account, index) => {
      if (index + 1 === id) {
        const addedSavings = {
          user: account.accountName,
          savings: saving
        }
        stateAccount.savingsHistory.push(addedSavings)
        console.log(stateAccount.savingsHistory)

        account.balance += saving
      }
    })
    console.log('Account Savings updated')

    console.log(stateAccount.userAccount)
  }

  // Function to update the expense
  const updateExpense = (id, expense) => {
    stateAccount.userAccount.forEach((account, index) => {
      if (index + 1 === id && account.balance > expense) {
        const occuredExpense = {
          user: account.accountName,
          expense: expense
        }
        stateAccount.expenseHistory.push(occuredExpense)
        account.balance -= expense
        return 'true'
      } else {
        return 'false'
      }
    })
    console.log('Account Expense updated')

    console.log(stateAccount.userAccount)
  }

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
    addUser,
    state,
    stateAccount,
    updateSaving,
    updateExpense
  }
})
