import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: () => import('../views/RecipeView.vue')
  },
  
  {
    path:'/recipe/:key',
    name: "recipeDetail",
    component: () => import('../views/RecipeDetail.vue')
  },
  {
    path:'/category/recipes/:key',
    name: "CategoryView",
    component: () => import('../views/CategoryView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
