// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const Store = defineStore('counter', () => {
  const superUser = { name: 'Christof', secret: 'Munich' }

  return { superUser }
})
