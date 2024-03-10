import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import TopBarLayout from '../layouts/TopbarLayout.vue'

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
          component: ContactView
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactView
        },
      ]
    },
  ]
})

export default router
