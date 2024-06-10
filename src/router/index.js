import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const route = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: route
})

export default router
