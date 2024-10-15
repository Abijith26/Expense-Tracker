<script setup>
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
// Importing Components
import AccountsTable1 from './AccountsTable1.vue'
import TotalLogs from '@/views/totalLogs.vue'
</script>

<template>
  <div class="card">
    <Tabs value="0">
      <TabList>
        <Tab value="0">Home</Tab>
        <Tab value="1">Logs</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0"><AccountsTable1 /></TabPanel>
        <TabPanel value="1"> <TotalLogs /></TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style scoped></style>
