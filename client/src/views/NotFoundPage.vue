<template>
  <div class="not-found-container">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/login">Go to Login Page</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

h1 {
  font-size: 48px;
  margin-bottom: 16px;
  color: #ff6f61;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
}

a {
  font-size: 16px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
