import { createRouter, createWebHistory } from 'vue-router' //createWebHashHistory
import home from '../components/Hello.vue'
import about from '../components/About.vue'
import test from '../components/Test.vue'

//配置路由
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      alias: ['/home', '/hello'], //别名
    },
    {
      path: '/series',
      name: 'series',
      component: () => import('../components/Series.vue'),
      children: [
        { path: '', redirect: '/series/home' },
        { path: 'home', component: () => import('../components/Series/CateHome.vue') },
        { path: 'video', component: () => import('../components/Series/Video.vue') }
      ],
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
  ],
});

export default router