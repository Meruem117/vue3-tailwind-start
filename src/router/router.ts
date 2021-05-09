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
        { path: 'home', name: 'series/home', component: () => import('../components/Series/Cate/CateHome.vue') },
        { path: 'plot', name: 'series/plot', component: () => import('../components/Series/Cate/CatePlot.vue') },
        { path: 'action', name: 'series/action', component: () => import('../components/Series/Cate/CateAction.vue') },
        { path: 'fiction', name: 'series/fiction', component: () => import('../components/Series/Cate/CateFiction.vue') },
        { path: 'life', name: 'series/life', component: () => import('../components/Series/Cate/CateLife.vue') },
        { path: 'horror', name: 'series/horror', component: () => import('../components/Series/Cate/CateHorror.vue') },
        { path: 'comic', name: 'series/comic', component: () => import('../components/Series/Cate/CateComic.vue') },
        // { path: ':cate', component: () => import('../components/Series/Cate.vue') },
        { path: 'search', name: 'series/search', component: () => import('../components/Series/SearchSeries.vue') },
        { path: 'video/:vid', name: 'series/video', component: () => import('../components/Series/Video.vue') },
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