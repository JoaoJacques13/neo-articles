import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ArticlesPage from '../pages/ArticlesPage.vue' 
import ArticleDetail from '../pages/ArticleDetail.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  { path: '/articles', component: ArticlesPage },
  {
    path: '/articles/:id',
    name: 'ArticleDetail',
    component: ArticleDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
