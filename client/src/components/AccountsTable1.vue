<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { Store1 } from '@/stores/store1'
import { ref } from 'vue'

const store = Store1()

const { selectedAccountHistory } = store
const userTransactionData = ref([])

function onRowSelect(event) {
  const selectedAccountID = event.data.accountID
  console.log(selectedAccountID)
  const history = selectedAccountHistory(selectedAccountID)
  console.log(history)
  userTransactionData.value = history
  console.log('Data Clicked..')
}
</script>

<template>
  <p
    v-if="store.userData.length === 0"
    style="text-align: center; font-size: 24px; font-weight: 600"
  >
    User doesn't exist!
  </p>
  <div class="card" v-if="store.userData.length > 0">
    <DataTable
      :value="store.userData"
      showGridlines
      paginator
      :rows="5"
      tableStyle="min-width: 50rem"
      selectionMode="single"
      dataKey="accountID"
      @rowSelect="onRowSelect"
    >
      <Column
        field="accountID"
        header="Account-ID"
        style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
      ></Column>
      <Column
        field="accountName"
        header="Account User"
        style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
      ></Column>
      <Column
        field="balance"
        header="Balance"
        style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
      ></Column>
      <Column
        field="created"
        header="Created-On"
        style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
      ></Column>
      <Column
        field="updated"
        header="Updated-On"
        style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
      ></Column>
    </DataTable>
  </div>

  <!-- Specific User Transaction Details -->
  <p style="text-align: center; font-size: 24px; font-weight: 600">No Users selected</p>
  <div class="card" v-if="userTransactionData.length > 0">
    <DataTable
      :value="userTransactionData"
      showGridlines
      paginator
      :rows="5"
      tableStyle="min-width: 50rem"
      selectionMode="single"
    >
      <Column
        field="accountID"
        header="Account-ID"
        style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
      ></Column>
      <Column
        field="accountName"
        header="Account User"
        style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
      ></Column>
      <Column
        field="balance"
        header="Balance"
        style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
      ></Column>
      <Column
        field="updated"
        header="Updated-On"
        style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
      ></Column>
    </DataTable>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.card {
  background: whitesmoke;
  border: black;
  padding: 2rem;
  border-radius: 10px;
  margin: 1rem;
}
</style>
