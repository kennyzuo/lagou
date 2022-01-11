import moduleRouters from '@/module/router';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login/Login.vue'),
    meta: {
      keepAlive: true,
      allowAnonymous: true
    }
  },
  {
    path: '/',
    redirect: {
      name: 'home-page'
    },
    meta: {
      keepAlive: true
    },
    component: () => import('@/components/main/Main.vue'),
    children: [
      {
        path: 'external/:url',
        name: 'external',
        component: () => import('@/components/external/IFrameContainer.vue')
      }
    ]
  }
].concat(moduleRouters);

const router = new VueRouter({
  routes
});

export default router;
