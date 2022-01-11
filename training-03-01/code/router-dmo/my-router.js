let vm = null;

export default class MyRouter {
  static install(Vue) {
    // 1. 判断插件是否已经被安装
    if (MyRouter.install.installed) {
      return;
    }

    MyRouter.install.installed = true;

    // 2. 记录 Vue 构造函数到全局变量
    vm = Vue;

    // 3. 把创建 Vue 实例时候传入的 router 实例注入到 Vue 实例上
    // 混入
    vm.mixin({
      beforeCreate() {
        if (this.$options.router) {
          vm.prototype.$router = this.$options.router;
          this.$options.router.init();
        }
      }
    });
  }

  constructor(options) {
    this.options = options;

    // key-value，地址-组件
    this.routeMap = {}; 

    this.data = vm.observable({
      current: '/'
    });
  }

  createtRouteMap() {
    // 遍历路由规则，把路由规则解析成 key-value 的形式存储到 routeMap 中
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component;
    });
  }

  init() {
    this.createtRouteMap();
    this.initComponents(vm);
    this.initEvent();
  }

  initComponents(Vue) {
    Vue.component("router-link", {
      props: {
        to: String
      },
      render: function(h) {
        return h(
          "a",
          {
            attrs: {
              href: this.to
            },
            on: {
              click: this.clickHandler
            }
          },
          this.$slots.default
        );
      },
      methods: {
        clickHandler(e) {
          e.preventDefault();
          location.hash = "#" +  this.to;
          this.$router.data.current = this.to;
        }
      }
    });

    const router = this;
    Vue.component("router-view", {
      render(h) {
        let component = router.routeMap[router.data.current];
        return h(component);
      }
    });
  }

  initEvent() {
    window.addEventListener("hashchange", () => {
      this.data.current = location.hash.split('#')[1];
    });
  }
}
