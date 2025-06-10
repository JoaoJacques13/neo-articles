import { createRouter, createWebHistory } from 'vue-router'
import ArticlesPage from '../pages/ArticlesPage.vue' 
import ArticleDetail from '../pages/ArticleDetail.vue' 

const routes = [
  { path: '/', redirect: '/articles' },
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
