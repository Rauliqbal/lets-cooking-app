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
    path:'/artikel',
    name: "ArtikelView",
    component: () => import('../views/ArtikelView.vue')
  },
  {
    path:'/category/recipes/:key',
    name: "CategoryView",
    component: () => import('../views/CategoryView.vue')
  },
  
  {
    path:'/recipe/:key',
    name: "recipeDetail",
    component: () => import('../views/RecipeDetail.vue')
  },
  {
    path:'/search/',
    name: "searchRecipe",
    component: () => import('../views/SearchView.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: "history",
  linkActiveClass: 'active',
})

export default router
