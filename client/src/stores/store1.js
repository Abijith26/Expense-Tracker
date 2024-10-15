import { defineStore } from 'pinia'

export const Store1 = defineStore('counter1', {
  state: () => ({
    count: 0,
    userAccount: [],
    savingsHistory: [],
    expenseHistory: [],
    totalTransactionHistory: [],
    userIdCount: 1,
    superUser: { email: 'Christian@bank.com', secret: 'Munich' },
    showAccountFormStatus: false,
    showSavingsFormStatus: false,
    showExpenseFormStatus: false,
    showDeleteAccountFormStatus: false
  }),
  getters: {
    userData: (state) => state.userAccount,
    getFullName: (state) => state.superUser.email.split('@')[0],
    fullHistory: (state) => state.totalTransactionHistory
  },
  actions: {
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
      this.userAccount.push({
        accountID: this.userIdCount++,
        accountName: name,
        balance: Number(initialBalance),
        created: this.getDate(),
        updated: '-'
      })
      console.log(this.userAccount)
    },
    deleteUser(id) {
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
          updated: account.updated
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
          amount: `${expense}`,
          newBalance: account.balance,
          updated: account.updated
        })
      }
    },
    selectedAccountHistory(id) {
      console.log('Specific User History Method is called...')

      return this.fullHistory.filter((acc) => acc.accountID === id)
    },
    clearLogs() {
      this.fullHistory.length = 0
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
