import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '数据看板'}
      },
      // 大数据分析
      {
        path: 'dataAnalyze',
        redirect: '/dataAnalyze/dataCenter',
        name: 'dataAnalyze',
        component: () => import('../views/dataAnalyze/index'),
        meta: { title: '大数据分析'},
        children: [
          {
            path: 'dataCenter',
            component: () => import('@/views/dataAnalyze/dataCenter/index'),
            name: 'dataCenter',
            meta: { title: '数据中心' }
          },
          {
            path: 'dataFilter',
            name: 'dataFilter',
            component: () => import('@/views/dataAnalyze/dataFilter/index'),
            meta: { title: '高级筛选' }
          }
        ]
      },
      {
        path: 'recordCenter',
        component: () => import('@/views/recordCenter/index'),
        meta: { title: '长者档案中心'},
        redirect: '/recordCenter/list',
        name: 'recordCenter',
        children:[
          {
            path:'list',
            name:'list',
            component:() => import('../views/recordCenter/list/index'),
            meta: { title: '长者档案中心' }
          },
          {
            path:'details',
            name:'details',
            component:() => import('../views/recordCenter/details/index'),
            meta: { title: '详情' }
          }
        ]
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/index'),
        meta: { title: '直播播放器'}
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
