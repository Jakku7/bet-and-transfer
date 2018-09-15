import Vue from 'vue'
import Router from 'vue-router'
import Authentication from '@/components/pages/Authentication/Authentication.vue'
import Home from '@/components/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  data: {
    currentRoute: window.location.pathname
  },
  routes: [
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    }
  ]
})
