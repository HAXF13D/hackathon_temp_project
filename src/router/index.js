import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SwapView from '../views/SwapView.vue'
import AchievementsView from '../views/AchievementsView.vue'
import LogInView from '../views/LogInView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/swap',
    component: SwapView
  },
  {
    path: '/achievements',
    component: AchievementsView
  },
  {
    path: '/login',
    component: LogInView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
