class Vue {
  constructor(options) {
    /**
     * 1. 通过属性保存 options 数据
     * 2. 把 data 成员转换为 getter 和 setter 注入到 vue 实例中
     * 3. 调用 observer 对象，监听数据变化
     * 4. 调用 compiler 对象，解析指令和差值表达式
     */
    this.$options = options
    this.$data = options.data
    this.$methods = options.methods
    this.$el = document.querySelector(options.el)

    this._proxyData(this.$data);
    this._proxyData(this.$methods);

    new Observer(this.$data);

    new Observer(this.$methods);

    new Compiler(this);
  }

  _proxyData(data) {
    /**
     * 遍历 data 中所有属性，定义 getter 和 setter
     */

    Reflect.ownKeys(data).forEach((key) => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key]
        },
        set(value) {
          if (data[key] === value) return
          data[key] = value
        },
      });
    })
  }
}
