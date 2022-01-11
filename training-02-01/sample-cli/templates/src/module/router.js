const Main = () => import('@/components/main/Main.vue');
export default [
  {
    path: '/demo',
    component: Main,
    children: [
      {
        path: 'button',
        name: 'demo-button',
        component: () => import('@/module/demo/button.vue'),
        meta: {
          allowAnonymous: true
        }
      },
      {
        path: 'dialog',
        name: 'demo-dialog',
        component: () => import('@/module/demo/dialog.vue'),
        meta: {
          allowAnonymous: true
        }
      },
      {
        path: 'nav',
        name: 'demo-nav',
        component: () => import('@/module/demo/nav.vue'),
        meta: {
          allowAnonymous: true
        }
      },
      {
        path: 'lista',
        name: 'demo-lista',
        component: () => import('@/module/demo/lista.vue'),
        meta: {
          allowAnonymous: true
        }
      },
      {
        path: 'listb',
        name: 'demo-listb',
        component: () => import('@/module/demo/listb.vue'),
        meta: {
          allowAnonymous: true
        }
      },
      {
        path: 'listc',
        name: 'demo-listc',
        component: () => import('@/module/demo/listc.vue'),
        meta: {
          allowAnonymous: true
        }
      },
      {
        path: 'listd',
        name: 'demo-listd',
        component: () => import('@/module/demo/listd.vue'),
        meta: {
          allowAnonymous: true
        }
      },
      {
        path: 'detaila',
        name: 'demo-detaila',
        component: () => import('@/module/demo/detaila.vue'),
        meta: {
          allowAnonymous: true
        }
      },
      {
        path: 'detailb',
        name: 'demo-detailb',
        component: () => import('@/module/demo/detailb.vue'),
        meta: {
          allowAnonymous: true
        }
      }
    ]
  }
];
