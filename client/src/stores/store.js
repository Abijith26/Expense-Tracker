// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const Store = defineStore('counter', () => {
  const superUser = { email: 'Christof@bank.com', secret: 'Munich' }

  return { superUser }
})
