import App from '@/App.vue'
import AccountForm from '@/views/accountForm.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // Redirected to show the login page by default
      redirect: { path: '/login' },
      name: 'app',
      component: App
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    },
    // Just for checking Purpose
    {
      path: '/accountForm',
      name: 'accountForm',
      component: AccountForm
    }
  ]
})

export default router
