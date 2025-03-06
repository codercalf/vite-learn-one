import { createRouter } from 'vue-router'
import Index from '../pages/Index.vue'
import preview from '../pages/Preview.vue'
import { createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/preview',
    component: preview,
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
