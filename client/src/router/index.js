import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index'
import login from '@/views/login'
import user from '@/views/user'
import member from '@/views/member'
import subject from '@/views/subject'
import article from '@/views/article'

Vue.use(Router)

const router = new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        Auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/member',
      component: member,
      children: [
        {
          path: '',
          name: 'list',
          component: resolve => require(['../views/memberList.vue'],resolve),
          meta: {
            Auth: true
          }
        },
        {
          path: 'userinfo/:id',
          name: 'memberCenter',
          component: resolve => require(['../views/memberCenter.vue'],resolve),
          meta: {
            Auth: true
          }
        },
        {
          path: 'regist',
          name: 'memberRegist',
          component: resolve => require(['../views/memberRegist.vue'],resolve),
          meta: {
            Auth: true
          }
        },
        {
          path: 'pay',
          name: 'memberPay',
          component: resolve => require(['../views/memberPay.vue'],resolve),
          meta: {
            Auth: true
          }
        },
        {
          path: 'payup',
          name: 'memberPayup',
          component: resolve => require(['../views/memberPayup.vue'],resolve),
          meta: {
            Auth: true
          }
        },
        {
          path: 'payrecord',
          name: 'memberPayrecord',
          component: resolve => require(['../views/memberPayrecordList.vue'],resolve),
          meta: {
            Auth: true
          }
        },
        {
          path: 'costrecord',
          name: 'memberCostrecord',
          component: resolve => require(['../views/memberCostrecordList.vue'],resolve),
          meta: {
            Auth: true
          }
        },
        {
          path: 'operatingrecord',
          name: 'operatingrecord',
          component: resolve => require(['../views/operatingrecordList.vue'],resolve),
          meta: {
            Auth: true
          }
        },
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      children: [
        {
          path: 'updatepass',
          name: 'updatepassword',
          component: resolve => require(['../views/updatepassword.vue'],resolve),
          meta: {
            Auth: true
          }
        },
        {
          path: 'pay',
          name: 'userPay',
          component: resolve => require(['../views/userPay.vue'],resolve),
          meta: {
            Auth: true
          }
        },
        {
          path: 'payrecord',
          name: 'userPayrecord',
          component: resolve => require(['../views/userPayrecordList.vue'],resolve),
          meta: {
            Auth: true
          }
        },
        {
          path: 'costrecord',
          name: 'useCostrecord',
          component: resolve => require(['../views/userCostrecordList.vue'],resolve),
          meta: {
            Auth: true
          }
        },
      ]
    },
    {
      path: '/article',
      name: 'article',
      component: article,
      children: [
        {
          path: 'list',
          name: 'articlelist',
          component: resolve => require(['../views/articlelist.vue'],resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: 'detail',
          name: 'articledetail',
          component: resolve => require(['../views/articledetail.vue'],resolve)
        },
        {
          path: 'search',
          name: 'searchlist',
          component: resolve => require(['../views/searchlist.vue'],resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        },
      ]
    },
  ]
})

router.beforeEach((to,from,next) => {
  var token = sessionStorage.getItem('token');
  if (to.meta.Auth) {
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }else{
    next();
  }
})

export default router


