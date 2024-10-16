import { defineStore } from 'pinia'

export const Store1 = defineStore('counter1', {
  state: () => ({
    isLoggedIn: false,
    count: 0,
    userAccount: [],
    savingsHistory: [],
    expenseHistory: [],
    totalTransactionHistory: [],
    userIdCount: 1,
    superUser: { email: 'Christian@bank.com', secret: 'Munich@26' },
    showAccountFormStatus: false,
    showSavingsFormStatus: false,
    showExpenseFormStatus: false,
    showDeleteAccountFormStatus: false
  }),

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'store-1',
        storage: localStorage,
        paths: [
          'userAccount',
          'savingsHistory',
          'expenseHistory',
          'totalTransactionHistory',
          'userIdCount'
        ]
      }
    ]
  },
  getters: {
    userData: (state) => state.userAccount,
    getFullName: (state) => state.superUser.email.split('@')[0],
    fullHistory: (state) => state.totalTransactionHistory,
    getCredentials: (state) => state.superUser,
    getLoginStatus: (state) => state.isLoggedIn
  },
  actions: {
    login() {
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
    },
    getDate() {
      const currentDate = new Date()
      const options = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
      return currentDate.toLocaleString('en-US', options)
    },

    addUser(name, initialBalance) {
      const userCreated = {
        accountID: this.userIdCount++,
        accountName: name,
        balance: Number(initialBalance),
        created: this.getDate(),
        updated: '-'
      }
      this.userAccount.push(userCreated)
      this.totalTransactionHistory.push({
        accountID: userCreated.accountID,
        user: userCreated.accountName,
        amount: userCreated.balance,
        type: 'Account Created',
        oldBalance: '-',
        newBalance: userCreated.balance,
        created: userCreated.created,
        updated: '-'
      })
      console.log(this.userAccount)
      console.log(this.totalTransactionHistory)
    },
    deleteUser(id) {
      const account = this.userAccount.find((acc) => acc.accountID === id)
      console.log(`Deleting Account is:${account}`)

      this.totalTransactionHistory.push({
        accountID: id,
        user: account.accountName,

        type: 'Account Deleted',
        oldBalance: account.balance,
        amount: '-',
        newBalance: '-',
        created: account.created,
        updated: this.getDate()
      })

      this.userAccount = this.userAccount.filter((user) => user.accountID !== id)
      console.log(`Deleted User Account: ${id}`)

      console.log(this.userAccount)
    },

    updateSaving(id, saving) {
      const account = this.userAccount.find((acc) => acc.accountID === id)
      if (account) {
        account.updated = this.getDate()
        account.balance += saving
        this.savingsHistory.push({
          user: account.accountName,
          savings: saving,
          updated: account.updated
        })
        this.totalTransactionHistory.push({
          accountID: account.accountID,
          user: account.accountName,
          type: 'Credit',
          oldBalance: account.balance - saving,
          amount: `+${saving}`,
          newBalance: account.balance,
          updated: account.updated,
          created: account.created
        })
        console.log(this.savingsHistory)
      }
    },

    updateExpense(id, expense) {
      const account = this.userAccount.find((acc) => acc.accountID === id)
      if (account && account.balance >= expense) {
        account.updated = this.getDate()
        account.balance -= Number(expense)
        this.expenseHistory.push({
          user: account.accountName,
          expense: Number(expense),
          updated: account.updated
        })
        this.totalTransactionHistory.push({
          accountID: account.accountID,
          user: account.accountName,
          type: 'Debit',
          oldBalance: account.balance + expense,
          amount: `-${expense}`,
          newBalance: account.balance,
          updated: account.updated,
          created: account.created
        })
      }
    },
    selectedAccountHistory(id) {
      console.log('Specific User History Method is called...')
      const filteredTransactions = this.totalTransactionHistory.filter(
        (acc) => acc.accountID === id
      )

      // Check if there are any filtered results, return 0 if none
      return filteredTransactions.length > 0 ? filteredTransactions : 0
    },
    clearLogs() {
      this.totalTransactionHistory.length = 0
      this.savingsHistory.length = 0
      this.expenseHistory.length = 0
    },

    // These are your toggle functions, make sure they're inside actions
    toggleAccountForm() {
      this.showAccountFormStatus = !this.showAccountFormStatus
    },

    toggleSavingsForm() {
      this.showSavingsFormStatus = !this.showSavingsFormStatus
    },

    toggleExpenseForm() {
      this.showExpenseFormStatus = !this.showExpenseFormStatus
    },

    toggleDeleteAccountForm() {
      this.showDeleteAccountFormStatus = !this.showDeleteAccountFormStatus
    }
  }
})
