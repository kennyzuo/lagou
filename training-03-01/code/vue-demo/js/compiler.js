class Compiler {
  constructor(vm) {
    this.$el = vm.$el
    this.$vm = vm
    this.compiler(this.$el)
  }

  compiler(el) {
    let t = document.createNodeIterator(el, NodeFilter.SHOW_ALL, null, false)
    // 循环遍历对象的下一个节点
    let currNode = null
    while ((currNode = t.nextNode()) !== null) {
      // 节点不为空，就一直循环遍历下去；直到为 null，才中断循环
      if (this.isTextNode(currNode)) {
        this.compilerText(currNode)
      } else if (this.isElementNode(currNode)) {
        this.compilerElement(currNode)
      }
    }
  }
  compilerText(node) {
    let reg = /\{\{(.+?)\}\}/
    if (reg.test(node.textContent)) {
      let key = RegExp.$1.trim()

      new Watcher(this.$vm, key, (val) => {
        node.textContent = val
      }) 
      node.textContent = this.$vm[key]
    }
  }
  compilerElement(node) {
    let attrs = Array.from(node.attributes)
    attrs.forEach((attr) => {
      if (this.isDirective(attr.name)) {
        let directive = attr.name.slice(2)
        let key = attr.nodeValue

        if (this.isEventDirectie(directive)) {
          let arry = directive.split(":")
          directive = arry[0]
          let eventname = arry[1]
          this[directive](node, key, eventname)
        } else {
          this[directive](node, key)
        }
      }
    })
  }
  text(node, key) {
    new Watcher(this.$vm, key, (val) => {
      node.textContent = val
    }) 
    node.textContent = this.$vm[key]
  }
  model(node, key) {
    new Watcher(this.$vm, key, (val) => {
      node.value = val
    })
    node.value = this.$vm[key]

    node.addEventListener('input', (event) => {
      this.$vm[key] = event.target.value
    });
  }
  html(node, key) {
    new Watcher(this.$vm, key, (val) => {
      node.innerHTML = val
    })
    node.innerHTML = this.$vm[key]
  }
  on(node, key, eventname) {
    node.addEventListener(eventname, this.$vm[key].bind(this.$vm))
  }

  isEventDirectie(directive) {
    return directive.startsWith("on:")
  }
  isDirective(attrName) {
    return attrName.startsWith("v-")
  }
  isTextNode(node) {
    return node.nodeType === 3
  }
  isElementNode(node) {
    return node.nodeType === 1
  }
}
