import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '@/views/layout/Default.vue'

Vue.use(VueRouter)

/**
 * 根据用户权限 动态加载路由
 */
export const asyncRouterMap = [
  
  {
    path: '/school',
    name: 'School',
    component: Default,
    children: [
      {
        path: 'list',
        name: 'SchoolList',
        component: () => import('@/views/page/SchoolList.vue'),
        meta: {
          title: '学校列表',
          icon: '',
          role: []
        }
      },
      {
        path: 'add',
        name: 'AddSchool',
        component: () => import('@/views/page/AddSchool.vue'),
        meta: {
          title: '',
          icon: '',
          role: []
        }
      },
    ]
  },
  {
    path: '/university',
    name: 'University',
    component: Default,
    redirect: '/list',
    children: [
      {
        path: 'list',
        name: 'UniversityList',
        component: () => import('@/views/page/UniversityList.vue'),
        meta: {
          title: '',
          icon: '',
          role: []
        }
      },
      {
        path: 'add',
        name: 'AddUniversity',
        component: () => import('@/views/page/AddUniversity.vue'),
        meta: {
          title: '',
          icon: '',
          role: []
        }
      },
    ]
    
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('@/views/layout/Error.vue'),
    meta: {
      title: '',
      icon: '',
      role: []
    }
  }
]

/**
 * 基本路由
 */
export const constantRouterMap = [
  {
    path: '/',
    name: 'Home',
    component: Default,
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/page/Index.vue'),
        meta: {
          title: '',
          icon: '',
          role: []
        }
      }
    ]
    
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/layout/Login.vue'),
    meta: {
      title: '',
      icon: '',
      role: []
    }
  }
];

export default new VueRouter({
  mode: 'history',
  routes: constantRouterMap
})

