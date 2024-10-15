import { defineStore } from 'pinia'
import { computed, ref, reactive } from 'vue'

export const Store = defineStore('finance', () => {
  const getDate = () => {
    const currentDate = new Date()
    return currentDate.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  }

  const superUser = { email: 'Christian@bank.com', secret: 'Munich' }

  let userIdCount = 1
  const userAccounts = ref([
    {
      accountID: userIdCount++,
      accountName: 'Veer',
      balance: 250,
      created: getDate(),
      updated: '-'
    }
  ])

  const savingsHistory = ref([])
  const expenseHistory = ref([])
  // const stateAccount = reactive({
  //   userAccount: [
  //     {
  //       accountID: userIdCount++,
  //       accountName: 'Veer',
  //       balance: 250,
  //       created: getDate(),
  //       updated: '-'
  //     }
  //   ],
  //   savingsHistory: [],
  //   expenseHistory: []
  // })

  const addUser = (name, initialBalance) => {
    const userDetail = {
      accountID: userIdCount++,
      accountName: name,
      balance: initialBalance,
      created: getDate(),
      updated: '-'
    }
    console.log(userDetail)

    userAccounts.value.push(userDetail)
    console.log(`Array after: ${userAccounts.value}`)
  }

  const updateSaving = (id, saving) => {
    const account = userAccounts.value.find((acc) => acc.accountID === id)
    if (account) {
      account.updated = getDate()
      account.balance += saving
      console.log(`Savings Before Update: ${savingsHistory.value}`)

      savingsHistory.value.push({
        user: account.accountName,
        savings: saving,
        updated: account.updated
      })
      console.log(`Savings Updated: ${savingsHistory.value}`)
    }
  }

  const updateExpense = (id, expense) => {
    const account = userAccounts.value.find((acc) => acc.accountID === id)
    if (account && account.balance >= expense) {
      account.updated = getDate()
      account.balance -= expense
      expenseHistory.value.push({
        user: account.accountName,
        expense: expense,
        updated: account.updated
      })
      return true
    }
    return false
  }

  const state = reactive({
    showAccountFormStatus: false,
    showSavingsFormStatus: false,
    showExpenseFormStatus: false
  })

  const toggleAccountForm = () => (state.showAccountFormStatus = !state.showAccountFormStatus)
  const toggleSavingsForm = () => (state.showSavingsFormStatus = !state.showSavingsFormStatus)
  const toggleExpenseForm = () => (state.showExpenseFormStatus = !state.showExpenseFormStatus)

  const getFullName = computed(() => superUser.email.split('@')[0])
  const getUserAccounts = computed(() => [...userAccounts.value])

  return {
    superUser,
    getFullName,
    toggleAccountForm,
    toggleSavingsForm,
    toggleExpenseForm,
    addUser,
    state,
    userAccounts,
    savingsHistory,
    expenseHistory,
    updateSaving,
    updateExpense,
    getUserAccounts
  }
})
