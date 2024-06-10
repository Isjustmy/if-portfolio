import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const route = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: route
})

export default router
