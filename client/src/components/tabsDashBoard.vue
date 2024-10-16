<script setup>
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import { ref } from 'vue'
// Importing Components
import AccountsTable1 from './AccountsTable1.vue'
import TotalLogs from '@/views/totalLogs.vue'

// Reactive variable to track the active tab
const activeTab = ref('0')
</script>

<template>
  <div class="card">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0" :class="{ 'active-tab': activeTab === '0' }" class="tab-style">Home</Tab>
        <Tab value="1" :class="{ 'active-tab': activeTab === '1' }" class="tab-style">Logs</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0"><AccountsTable1 /></TabPanel>
        <TabPanel value="1"> <TotalLogs /></TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style scoped>
.tab-style {
  padding: 10px 12px;
  border-radius: 5px;
  margin: 5px;
}
.active-tab {
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border-radius: 4px;
}
</style>
