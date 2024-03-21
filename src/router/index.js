import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'Root',
      redirect:{ name: 'home' },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }, 
    {
        path: '/search',
        name: 'search',
        component: ()=> import('../views/SearchView.vue')
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: ()=> import('../views/ProfileView.vue')
  },
  {
    path: '/playlist/:id',
    name: 'playlist',
    component: ()=> import('../views/PlayListView.vue')
},
  
]
})

export default router
