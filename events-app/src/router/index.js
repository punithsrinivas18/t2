import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/dietplan',
      name: 'dietplan',
      component: () => import('../views/dietplan.vue')
    },
    {
      path: '/workinghours',
      name: 'workinghours',
      component: () => import('../views/workinghours.vue')
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: () => import('../views/exercises.vue')
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
    },
    
    
    { path: '/login', name: 'login', component: Login },
    
   
    
    {
      path: '/event/:id',
      name: 'eventSingle',
      component: () => import('../views/EventSingle.vue')
    }
  ]
});


