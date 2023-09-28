// 配置基础路由
export const basicRoutes = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },
  {
    name: '',
    path: '/',
    // component: Layout,
    redirect: '/home',
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          order: 0,
          KeepAlive: true,
        },
      },
      {
        name: 'category',
        path: '/category/:categoryId',
        component: () => import('@/views/category/index.vue'),
        meta: {
          title: '分类',
          KeepAlive: true,
        },
        isHidden: true,
      },
      {
        name: 'tag',
        path: '/tag/:tagId',
        component: () => import('@/views/tag/index.vue'),
        meta: {
          title: '标签',
          KeepAlive: true,
        },
        isHidden: true,
      },
      {
        name: 'archives',
        path: '/archives',
        component: () => import('@/views/archives/index.vue'),
        meta: {
          title: '归档',
          icon: 'mdi:square-rounded-badge',
          order: 1,
          keepAlive: true,
        },
      },
      {
        name: 'friends',
        path: '/friends',
        component: () => import('@/views/friends/index.vue'),
        meta: {
          title: '友人帐',
          icon: 'mdi:human-queue',
          order: 2,
          keepAlive: true,
        },
      },
      {
        name: 'about',
        path: '/about',
        component: () => import('@/views/about/index.vue'),
        meta: {
          title: '关于我',
          icon: 'mdi:emoticon-devil',
          order: 3,
          keepAlive: true,
        },
      },
    ],
  },
];

// 配置404页面
export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
};

// 配置空页面
export const EMPTY_ROUTE = {
  name: 'Empty',
  path: '/:pathMatch(.*)*',
  component: null,
};

// 根据modules动态配置路由
const modules = import.meta.glob('@/router/modules/*.js', { eager: true });
const asyncRoutes = [];
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(modules[key].default);
});

export { asyncRoutes };
