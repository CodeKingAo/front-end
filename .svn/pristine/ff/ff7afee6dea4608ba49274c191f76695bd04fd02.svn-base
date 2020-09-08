import Vue from 'vue'
import Router from 'vue-router'
import views from './views.js'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('@/components/login.vue')
    },
    {
      path: '/index',
      component: resolve => require(['@/components/index.vue'], resolve),
      children: [
        ...views
      ]
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact'
})

// 路由守卫
var allowPath = ['/login', '/test']
router.beforeEach((to, from, next) => {
  if (sessionStorage.token || allowPath.includes(to.path)) next()
  else next({
    path: '/login'
  });
})

export default router