import Vue from 'vue'
import Router from 'vue-router'
import Authentication from '@/components/pages/Authentication/Authentication.vue'
import Home from '@/components/pages/Home/Home.vue'
import Ranking from '@/components/pages/Ranking/Ranking.vue'

Vue.use(Router)

export default new Router({
  data: {
    currentRoute: window.location.pathname
  },
  routes: [
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
