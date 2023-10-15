import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '../views/CatalogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:page?',
      name: 'home',
      component: CatalogView
    },
    {
      path: '/movie/:movie_id',
      name: 'movie',
      component: () => import('../views/MovieDetailsView.vue')
    },
  ]
})

export default router
