import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddExercise from '../views/AddExercise.vue';
import MyWorkouts from '../views/MyWorkouts.vue';
import exercises from '../views/exercises.vue';
import sleep_time from '../views/sleep_time.vue';
//import help from '../views/help.vue'
//import autocomplete from '../views/autocomplete.vue';
import AddWorkout from '../views/AddWorkout.vue';
//import { Globals } from '@/models/api';


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
      path: '/help',
      name: 'help',
      component: () => import('../views/help.vue')
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
      path: '/MyWorkouts',
      name: 'MyWorkouts',
      component: MyWorkouts
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: exercises
    },
    
    {
      path: '/sleep_time',
      name: 'sleep_time',
      component: sleep_time
    },
    {
      path: '/AddExercise',
      name: 'AddExercise',
      component: AddExercise
    },
    {
      path: '/addWorkout',
      name: 'AddWorkout',
      component: AddWorkout
    },
    
    
    { path: '/login', name: 'login', component: Login },
    
   
    
    {
      path: '/event/:id',
      name: 'eventSingle',
      component: () => import('../views/EventSingle.vue')
    }
  ]
});


