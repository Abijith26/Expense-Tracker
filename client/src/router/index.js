import App from '@/App.vue'

import DashboardPage from '@/views/DashboardPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Store1 } from '@/stores/store1'

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
      component: DashboardPage,
      meta: { requiresAuth: true }
    },
    // Catch-all route for 404 (must be the last route)
    {
      path: '/:pathMatch(.*)*', // This is the catch-all route
      name: 'NotFound',
      component: NotFoundPage
    }
  ]
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const store = Store1()

  // Check if the route requires authentication
  if (to.meta.requiresAuth && !store.getLoginStatus) {
    // If not logged in, redirect to the login page
    next({ name: 'login' })
  } else {
    // proceed to the requested route
    next()
  }
})

export default router
