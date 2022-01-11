class Observer {
  constructor(data) {
    this.walk(data)
  }
  walk(data) {
    if (typeof data !== "object") return

    Reflect.ownKeys(data).forEach((key) => {
      this.defineReactive(data, key, data[key])
    })
  }
  defineReactive(data, key, val) {
    const that = this

    let dep = new Dep()

    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        Dep.target && dep.addSub(Dep.target)
        return val
      },
      set(value) {
        if (value === val) return
        val = value
        that.walk(value)
        dep.notify()
      },
    })

    this.walk(val)
  }
}
