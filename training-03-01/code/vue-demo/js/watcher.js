class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb
    Dep.target = this;
    this.oldvalue = vm[key]
    Dep.target = null
  }
  update() {
    let newValue = this.vm[this.key]
    if (newValue !== this.oldvalue) {
      this.cb(newValue)
    }
  }
}
