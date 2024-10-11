<script setup>
// import { ref } from 'vue'
// import { Store } from '@/stores/store'
import DashboardSection from '@/components/dashboardSection.vue'
import DashHeading from '@/components/dashHeading.vue'

// const storeData = Store()

// Destructuring to get the necessary data as it is of non-reactive type
</script>

<template>
  <div class="dash-container">
    <DashHeading />
    <DashboardSection />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dash-container {
  padding: 10px;
}
</style>
