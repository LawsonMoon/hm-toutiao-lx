import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '@/views/login'
import home from '@/views/home'
import welcome from '@/views/welcome'
import NotFound from '@/views/404'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/login',
    component: login
  }, {
    path: '/',
    component: home,
    children: [{
      path: '/',
      component: welcome
    }]
  }, {
    path: '*',
    component: NotFound
  }]
})

export default router
