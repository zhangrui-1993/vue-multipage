import Vue from 'vue'
import Router from 'vue-router'
import SubModule1 from '../pages/sub-module1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/sub-module1'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/sub-module1',
      name: 'subModule1',
      component: SubModule1
    },
    {
      path: '/helloword',
      name: 'helloword',
      component: () => import('@/components/Nav/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test.vue')
    }
  ]
})
