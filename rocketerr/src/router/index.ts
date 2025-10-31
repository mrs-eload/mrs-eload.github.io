import { createRouter, createWebHistory } from 'vue-router'
import SpaceView from '../views/Space.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SpaceView
    },
  ]
})

export default router
