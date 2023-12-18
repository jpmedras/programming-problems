import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import MuralView from '../views/MuralView.vue'
import ProblemView from '../views/ProblemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mural',
      component: MuralView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/:id',
      name: 'problem',
      component: ProblemView,
      props: true
    },
  ]
})

export default router
