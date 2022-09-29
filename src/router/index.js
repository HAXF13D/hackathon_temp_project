import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SwapView from '../views/SwapView.vue'
import AchievementsView from '../views/AchievementsView.vue'
import LogInView from '../views/LogInView.vue'
import StartView from '../views/StartView.vue'
import CatalogView from '../views/CatalogView.vue'

const routes = [
  {
    path: '/',
    component: StartView
  },
  {
    path: '/news',
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
  },
  {
    path: '/catalog',
    component: CatalogView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
