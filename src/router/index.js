import { createRouter, createWebHistory } from 'vue-router'
import HomePageVue from '@/views/HomePage.vue'
import FavoritePageVue from '@/views/FavoritePage.vue'
import ReadPageVue from '@/views/ReadPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: HomePageVue
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoritePageVue
    },
    {
      path: '/read',
      name: 'read',
      component: ReadPageVue
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
