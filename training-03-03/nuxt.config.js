/**
 * Nuxt.js 配置问题
 */

module.exports = {
  router: {
    linkActiveClass: "active",
    extendRoutes(routes, resolve) {
      // 删除默认路由规则
      routes.splice(0)

      routes.push(
        ...[
          {
            path: "/",
            component: resolve(__dirname, "pages/layout/"),
            children: [
              {
                // 默认子路由
                path: "",
                name: "home",
                component: resolve(__dirname, "pages/home/"),
              },
              {
                path: "/login",
                name: "login",
                component: resolve(__dirname, "pages/login/"),
                props: () => {
                  return {
                    isLogin: true,
                  }
                },
              },
              {
                path: "/register",
                name: "register",
                component: resolve(__dirname, "pages/login/"),
                props: () => {
                  return {
                    isLogin: false,
                  }
                },
              },
              {
                path: "/profile/:username",
                name: "profile",
                component: resolve(__dirname, "pages/profile/"),
              },
              {
                path: "/settings",
                name: "settings",
                component: resolve(__dirname, "pages/settings/"),
              },
              {
                path: "/editor",
                name: "editor",
                component: resolve(__dirname, "pages/editor/"),
              },
              {
                path: "/article/:slug",
                name: "article",
                component: resolve(__dirname, "pages/article/"),
              },
            ],
          },
        ]
      )
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  // 注册插件
  plugins: ["~/plugins/request.js", "~/plugins/dayjs.js"],
}
