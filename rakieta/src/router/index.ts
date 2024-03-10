import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import TopBarLayout from '../layouts/TopbarLayout.vue'
import ProfileView from '../views/ProfileView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: TopBarLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactView
        },
        {
          path: 'profile',
          name: 'profile',
          component: ProfileView
        },
      ]
    },
  ]
})

export default router
