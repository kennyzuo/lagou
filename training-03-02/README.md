# 左政 ｜ Part 3 | 模块二

## 简答题

1. 请简述 Vue 首次渲染的过程

第一步：引入 Vue 时候 进入文件 `entry-runtime-with-compiler.js`

该文件主要是重写 Vue.prototype.$mount 方法，让 $mount 拥有解析 template 模版的能力，及将 template 转换成 render 函数


第二部：初始化静态成员、实例成员

在源码路径 src->platforms->web->runtime->inedex.js 中

初始化了平台相关的指（v-show、v-model）和组件（Transition 、 TranstionGroup）；

同时，定义了 Vue.prototype.__patch__ 方法以及 Vue.prototype.$mount 方法

在源码路径 src->core->inedex.js 中初始化了静态方法（调用了方法 initGlobalAPI ），及

- Vue.set
- Vue.delete
- Vue.nextTick
- Vue.observe
- Vue.use
- Vue.mixin
- Vue.extend
- Vue.directive 、Vue.filter、 Vue.component

在源码 src->core->instance->inedex.js 定义了 Vue 的构造函数，同时给 Vue 原型挂载成员及实例成员（如： 方法 _init、以及常见的 API，还有混入了一些成员：$data $props 等）


第三步：调用 new Vue() 过程

首先在构造函数中调用 _init 方法
- 合并 options 选项
- 设置代理对象（执行 initProxy 方法）
- 调用 $mount 方法，判断是否有 render ，不存在将 template 转换成 render 函数，调用 mountComponent 方法

mountComponent 

- 调用钩子函数 beforeMount
- 定义 updateComponent 方法（更新组件）, 内部调用了 render 函数生成虚拟 dom 传递给 update（调用 __patch__ 方法） 方法生成真实 dom 渲染到页面上
- 创建 Watcher 对象（传递 实例和方法 updateComponent 方法），在 Watcher 内部调用 updateComponent 方法
- 触发 mount 钩子函数

new Watcher(vm, updateComponent)

- 执行 get 方法
- get 方法内部执行 updateComponent 方法
- 触发 mounted 

2. 请简述 Vue 响应式原理。

在构造函数内部执行 _init 方法时候会执行 initState 方法，然后调用 initData 方法

initData 方法
- 将 options data 成员代理到实例对象上，并将他们设置成响应式对象（调用 proxy(data)）
- 调用 observe 方法，创建 Observe 对象

Observe 对象

- 调用 def 函数，为 value 设置属性__ob__（不可枚举）
- 如果 value 是对象调用 walk 方法， walk 内部遍历 value 所有属性，调用 defineReactive 方法
- 如果是数组，调用 protoAugment(value, arrayMethods) 方法，进行数组响应式处理， 然后再调用 observeArray 方法

defineReactive
- 创建 Dep 依赖对象
- 调用 Object.definePrototype ,设置 getter、setter
- 在 get 中收集依赖，判断 Dep.target(在 new Watcher 中赋值，就是当前 Watcher 实例) 是否存在，调用 dep.depend 方法收集依赖，及将当前 Watcher 对象实例添加的 对象 dep 到 subs 数组中
- 在 set 中触发 dep.notify 方法通知依赖更新视图

arrayMethods 对象内部对数组原生方法 `push, pop, shift, unshift, splice, reverse` 进行了重写（响应式处理）
首先调用原生的方法，然后再调用 dep.notify 方法，如果是调用 push 、unshift 方法，需要将新增的成员设置成响应式数据（ observeArray(inserted) ）

observeArray(arry) 遍历数组成员，给数组中的对象转换成响应式对象

Watcher 对象

- Computed Watcher 
- 用户 Watcher
- 渲染 Watcher

渲染 Watacher 会直接调用 get 方法，在内部调用 Watcher update 方法，通过 updateComponent 方法更新视图

用户 Watcher ，会在更新数据时候触发 dep.notify 方法，在 notify 内部会遍历 subs 数组，调用每一个 watcher 实例的 update 方法，然后调用 queueWatcher 判断 watcher 是否被处理，然后调用 flushSchedulerQueue -> watcher.run() -> get() -> getter()
 
3. 请简述虚拟 DOM 中 Key 的作用和好处。

作用，sameVnode 用来对比是否为相同虚拟 DOM

好处，对 dom 进行重用，在进行数据更新时候，可以减少 dom 操作

4. 请简述 Vue 中模板编译的过程。

compileToFunctions(template)
- 先从缓存中加载编译好的 render 函数
- 缓存中没有，调用 complie

compile(template, options)
- 合并 options
- 调用 baseCompile

baseCompile(template.trim(), finalOptions)
- 通过 parse 函数把 template 转换成 AST tree
- 通过 optimize 函数（优化），标记 AST tree 中的静态 sub trees，检测到静态子树，设置为静态，不需要在每次重新渲染的时候重新生成节点，patch 阶段跳过静态子树
- 通过 generate 函数将 AST tree 生成 js 的创建代码


compileToFunctions(template)
- 通过调用 createFunction 将上一步生成的字符串形式 js 代码转换为函数
- render 和 staticRenderFns 初始化完毕，挂载到 Vue 实例的 options 选项中