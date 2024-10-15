File: userAccountTable.vue
<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { Store1 } from '@/stores/store1'
// import { ref, toRef, watch } from 'vue'
import { storeToRefs } from 'pinia'

const storeData = Store1()
// const userAccount = toRef(storeData.stateAccount, 'userAccount')
const { getUserData } = storeToRefs(storeData)

const userAccount = getUserData()
console.log(userAccount)

// const tableData = ref([...userAccount.value])

// Watcher Code

// watch(
//   userAccount,
//   (newVal) => {
//     tableData.value.push = [...newVal]
//     console.log('userAccount updated:', tableData.value)
//   },
//   { deep: true }
// )
</script>

<template>
  <DataTable :value="userAccount" showGridlines responsiveLayout="scroll">
    <Column field="accountID" header="Account-ID"></Column>
    <Column field="accountName" header="Account User"></Column>
    <Column field="balance" header="Balance"></Column>
    <Column field="created" header="Created-On"></Column>
    <Column field="updated" header="Updated-On"></Column>
  </DataTable>
</template>
