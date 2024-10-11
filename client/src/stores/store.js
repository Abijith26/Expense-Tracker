// import {  computed } from 'vue'
import { defineStore } from 'pinia'
import { computed } from 'vue'

export const Store = defineStore('counter', () => {
  const superUser = { email: 'Christof@bank.com', secret: 'Munich' }

  const getFullName = computed(() => {
    return superUser.email.split('@')[0]
  })

  return { superUser, getFullName }
})
