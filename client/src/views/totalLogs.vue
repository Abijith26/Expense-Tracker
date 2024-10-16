<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { Store1 } from '@/stores/store1'

const store = Store1()

const { clearLogs } = store

// console.log(store.userData)

function deleteLogs() {
  console.log('Clear Log Button Clicked..')
  clearLogs()
}
</script>

<template>
  <p
    v-if="store.fullHistory.length === 0"
    style="text-align: center; font-size: 24px; font-weight: 600"
  >
    No Transaction Done yet 😕!
  </p>
  <div class="card" v-if="store.fullHistory.length > 0">
    <button class="clear-button" @click="deleteLogs">Clear All Logs</button>
    <div class="table-container">
      <DataTable
        :value="store.fullHistory"
        showGridlines
        paginator
        :rows="10"
        tableStyle="min-width: 50rem"
        selectionMode="single"
        sortField="updated"
        :sortOrder="-1"
      >
        <Column
          field="accountID"
          header="Account-ID"
          style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
        ></Column>
        <Column
          field="user"
          header="Account Name"
          style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
        ></Column>
        <Column
          field="type"
          header="Type"
          style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
        ></Column>
        <Column
          field="oldBalance"
          header="Old Balance"
          style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
        ></Column>
        <Column
          field="amount"
          header="Amount"
          style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
        ></Column>
        <Column
          field="newBalance"
          header="New Balance"
          style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
        ></Column>

        <Column
          field="updated"
          header="Updated-On"
          style="padding: 5px; font-family: 'Poppins'; font-weight: 400; font-style: normal"
        ></Column>
      </DataTable>
    </div>
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

.table-container {
  margin-top: 10px;
}

.clear-button {
  padding: 10px;
  font-family: 'Poppins';
  font-weight: 600;
  border: none;
  border-radius: 5px;
  background-color: burlywood;
  transition: all 0.2s ease-in;
}

.clear-button:hover {
  background-color: red;
  color: white;
  cursor: pointer;
}
</style>
