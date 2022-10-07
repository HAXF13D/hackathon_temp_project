import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SwapView from '../views/SwapView.vue'
import AchievementsView from '../views/AchievementsView.vue'
import LogInView from '../views/LogInView.vue'
import StartView from '../views/StartView.vue'
import CatalogView from '../views/CatalogView.vue'
import EventsView from '../views/EventsView.vue'
import UserAddView from '../views/UserAddView.vue'
import EmptyPageView from '../views/EmptyPageView.vue'
import RatingView from '../views/RatingView.vue'
import ProfileView from '../views/ProfileView.vue'

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
  },
  {
    path: '/events',
    component: EventsView
  },
  {
    path: '/useradd',
    component: UserAddView
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: EmptyPageView
  },
  {
    path: '/rating',
    component: RatingView
  },
  {
    path: '/profile',
    component: ProfileView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
