<script setup></script>
<template>
  <div class="container">
    <!-- sidebar -->
    <aside>
      <nav class="nav-style">
        <ul>
          <li>Create Account</li>
          <li>Update Salary</li>
          <li>Update Expense</li>
        </ul>
      </nav>
    </aside>
    <!-- Main Content -->
    <main>
      <p>Hey All</p>
    </main>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.nav-style {
  background-color: #f6d5f7;
  width: max-content;
  height: 85vh;
  margin-top: 10px;
  padding: 15px;
  border-radius: 5px;
}

.nav-style > ul {
  list-style: none;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-style > ul > li {
  padding: 10px;
}

.nav-style > ul > li:hover {
  border-radius: 5px;
  background-color: #f2eddf;
  color: #8c3e3e;
  cursor: pointer;
}

main {
  margin-top: 10px;
  padding: 15px;
  background-color: #d8c2b5;
  flex-grow: 1;
  border-radius: 5px;
}
</style>
