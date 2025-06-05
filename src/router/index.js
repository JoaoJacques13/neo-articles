import { createRouter, createWebHistory } from 'vue-router'
import ArticlesPage from '../pages/ArticlesPage.vue' 

const routes = [
  { path: '/', redirect: '/articles' },
  { path: '/articles', component: ArticlesPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
