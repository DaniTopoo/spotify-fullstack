import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'Root',
      redirect:{ name: 'Home' },
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    }, 
    {
        path: '/Search',
        name: 'Search',
        component: ()=> import('../views/SearchView.vue')
    },
]
})

export default router
