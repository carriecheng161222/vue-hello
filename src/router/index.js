import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'item1',
      component: resolve => require(['../pages/item1.vue'], resolve)
    },
    {
      path: '/item2',
      name: 'item2',
      component: resolve => require(['../pages/item2.vue'], resolve)
    },
    {
      path: '/item3',
      name: 'item3',
      component: resolve => require(['../pages/item3.vue'], resolve)
    }
  ]
})
