<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { Store1 } from '@/stores/store1'
import { ref, watch } from 'vue'

const store = Store1()

const { selectedAccountHistory } = store
const userTransactionData = ref([])

function onRowSelect(event) {
  const selectedAccountID = event.data.accountID
  console.log(selectedAccountID)
  const history = selectedAccountHistory(selectedAccountID)
  console.log(history)
  userTransactionData.value = history
  console.log(userTransactionData.value)

  console.log('Data Clicked..')
}

function clearTable() {
  userTransactionData.value = ''
}

// Watch for changes in the transaction history
watch(
  () => store.fullHistory,
  (newHistory) => {
    if (newHistory.length === 0) {
      userTransactionData.value = []
    }
  },
  { deep: true }
)
</script>

<template>
  <div class="userAccount-table">
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
  </div>

  <!-- Specific User Transaction Details -->
  <div class="specific-user-table">
    <div class="container">
      <h3 v-if="userTransactionData.length > 0">Selected User Transactions</h3>
      <button v-if="userTransactionData.length > 0" class="clear-button" @click="clearTable">
        Clear
      </button>
    </div>
    <p class="userTransaction-Title" v-if="userTransactionData.length === 0">No Users selected</p>
    <div class="card" v-if="userTransactionData.length > 0">
      <DataTable
        :value="userTransactionData"
        showGridlines
        :rows="2"
        tableStyle="min-width: 40rem;"
        selectionMode="single"
        scrollable
        scrollHeight="100px"
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

.userAccount-table {
  position: relative;
}

.userTransaction-Title {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  position: fixed;
  bottom: 10%;
  left: 52%;
}

.container {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  padding: 5px;
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
