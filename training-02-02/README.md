# 左政 ｜ Part 2 | 模块二 | 前端工程化实战-模块化开发与规范化标准

## 简答题

### 第一题 Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程

Webpack 打包的整个过程

- 确定打包入口， 找到入口文件中 require， import 语句寻找依赖，生成依赖树
- 递归遍历依赖树，加载依赖文件
- 通过配置的 rule 中 loader 对不同类型文件类型进行处理
- 将处理后对结果输出到 output 目录

### 第二题 Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路

Loader 和 Plugin 不同点

- Loader 只在加载模块环节工作
- Loader 专注实现资源模块加载
- Plugin 专注解决一些自动化工作，例如：1. 清除 dist 目录；2. 拷贝静态文件至输出目录； 3. 压缩代码
- Plugin 几乎涉及 webpack 构建的所有环节（通过钩子函数机制来实现不同环节的挂载），拥有更宽的能力范围

Loader 实现思路

- loader 返回一个函数
- 函数通过 source 参数获取资源文件
- 对 source 内容处理，返回处理结果，这个结果必须是一段合法的 JavaScript 代码
- 在 rule 规则中配置 loader

loader 类似一个管道，通过 source 传入，可以通过多个 loader 处理（前一个 loader 将处理的结果交给后一个 loader 处理），最终生成 result，这个 result 必须是一段合法的 JavaScript 代码（注意： rule 中配置的 loader 顺序是从数组的最后一个往执行的）

示例代码 code/markdown-loader-demo

Plugin 实现思路

通过钩子机制实现， 在 webpack 工作过程中有很多不同的环节，webpack 给这些环节都预留了钩子（有哪些钩子需要参考官方文档），我们可以通过在钩子上挂载不同的任务来实现一些额外的功能。

自定义的 plugin 可以是一个函数或者是一个包含 apply 方法的对象，正常情况下我们返回一个对象的方式来实现 plugin

示例代码 code/clear-plugin-demo


## 编程题

### 使用 Webpack 实现 Vue 项目打包任务

- code vue-app-bases
