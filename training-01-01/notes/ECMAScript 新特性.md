## ECMAScript 新特性

### 概述

ECMAScript 定义了语言层面的规范，包括变量定义、函数声明、逻辑语句等

JavaScript 是 ECMAScript 扩展，在浏览器环境下

- Core - ECMAScript 语言层面实现
- DOM
- BOM

ECMAScript 从 ES5 到 ES6（ES2015） 经历了6年时间，因而新增了很多东西，此后，ECMAScript 保持每年一次的版本迭代，命名按照年份定义，如 ES2015、ES2016 等

### 块级作用域

ES6 之前只有

- 函数作用域
- 全局作用域

ES6 新增 let、const， 他们 定义的变量只作用于块级作用域

块级作用域产生

- { statement } 

此外需要注意 

- for 循环会产生两层嵌套作用域

  >
     ```javascript
      for(let i = 0; i < 4; i++){
        let i = 100;
        // 输出 100，在循环体作用域内部 i 重新声明了； 如果计数器的 i 和循环体的 i 在一个块级作用域下将会报错；
        console.log(i);
      }
     ```
- 在 let const 声明变量之前无法使用变量，不然会报错

### 解构

```javascript
/**
 *** 数组解构
 */
const arry = [1, 2, 3];

{
  const [a, b, c] = arry;
  console.log(a, b, c);
}
{
  // ...rest 只能出现在最后面
  const [a, ...rest] = arry;
  console.log(a, rest);
}

{
  // 简单应用
  let path = "path/router/name";
  let [, , name] = path.split("/");
  console.log(name);
}

/**
 *** 对象解构
 */
const obj = {
  a: 1,
  b: 2,
  c: 3,
  name: "",
};

{
  const { a, b, c } = obj;
  console.log(a, b, c);
}

{
  const name = "xiaodaidai";
  // 属性重命名
  const { name: objName } = obj;
  console.log(objName);
}

{
  // 属性重命名后赋默认值
  const { name: objName = "xiaodaidai" } = obj;
  console.log(objName);
}

{
  // 简单应用
  let { log, dir } = console;
  log("log");
  dir("dir");
}

```

### 模版字符串

- 可以插值、换行、支持表达式
- 带标签的模版字符串

```javascript
const name = 'xiaodaidai'
const msg = `i love you, ${name}`;

const address = 'jiangsu suzhou';

function tagFun(strings, name, addrss){
  // strings 是一个数组，这里就是 result 被 ${name}， ${address} 分割的字符数组
  // 打印结果是 [ 'hi, ', ', my address is ', '' ] 'xiaodaidai' 'jiangsu suzhou'
  console.log(strings, name, address)
  return strings[0] + name + strings[1] + address + strings[2];
}
const result = 	tagFun`hi, ${name}, my address is ${address}`;
console.log(result)
```



### 字符串、对象扩展方法

字符串

- includes
- startsWith
- endsWith

对象

- assign 返回值与 target 相等，可以实现对象浅拷贝 
- is 1. 解决数字正负 0 不等； 2. 解决 NaN === NaN false 问题；

```javascript
-0 === +0           // true
NaN === NaN         // false
Object.is(+0, -0);  // false
Object.is(NaN, NaN) // true
```



### 参数默认值与剩余参数

参数默认值

```javascript
function defaultParams(paramA, paramB = true) {} // 带有默认值的参数必须在最后面
```

剩余参数

```javascript
// ES5 
function funA() {
  // 通过 arguments 实现
  console.log(arguments[0]); // 伪数组
}

// ES6 通过 ... 操作符实现; 只能在参数最后一位且只能使用一次
function funB(...args){   
  console.log(args[0]);
}
```

### 对象字面量增强

```javascript

const a = 1;
const funA = () => { console.log('this is funA'); };
const obj = {
  a,                    // 属性名称简写
  funA,                 // 方法简写
  [Math.random()]: 111  // 计算属性名，属性名可以使用表达式
};
```

### Proxy Reflect

Proxy  对比 Object.defineProperty 优点

- 强大的监听能力
- 可以监视数组方法
- 对原始对象没有侵入

|       handler 方法       |                           触发方式                           |
| :----------------------: | :----------------------------------------------------------: |
|           get            |                         读取某个属性                         |
|           set            |                         写入某个属性                         |
|           has            |                          in 操作符                           |
|      deleteProperty      |                        delete 操作符                         |
|      getPrototypeOf      |                   Object.getPrototypeOf()                    |
|      setPrototypeOf      |                   Object.setPrototypeOf()                    |
|       isExtensible       |                    Object.isExtensible()                     |
|    preventExtensions     |                  Object.preventExtensions()                  |
| getOwnPropertyDescriptor |              Object.getOwnPropertyDescriptor()               |
|      defineProperty      |                   Object.defineProperty()                    |
|         ownKeys          | Object.getOwnPropertyNames()、Object.getOwnPropertySymbols() |
|          apply           |                         调用一个函数                         |
|        construct         |                     用 new 调用一个函数                      |



Reflect 对象统一了对象的操作方式

```javascript
// Reflect 对象统一了对象的操作方式
const objA = {
  name: 'xiaozuo',
  age: 18,
  sex: 0
};
console.log('name' in objA)  // true
console.log(delete objA['sex']);
console.log(objA.keys);

// 统一使用 Reflect 内置方法
console.log(Reflect.has(objA, 'name'))  // true
console.log(Reflect.deleteProperty(objA, 'age'));
console.log(Reflect.ownKeys(objA));
```



### class Symbol Promise

class 语法示例

```javascript
class Person {
  constructor(name) {
    this.name = name;
  },
  say() {
    console.log(`hi,my name is ${this.name}`)
  },
  // 添加静态方法， 注意 this 内部指向不再指向实例，而是 Person 类型本身
  static create(name) {
    return new Person(name);
  }
}

// new 创建实例
const personA = new Person('xiaozuo');

// 调用静态方法创建实例
const personB = Person.create('xiaodaidai');

/** 
 * 使用 extends 关键字实现继承
 */
class Student extends Person {
  constructor(name, number) {
    super(name);
    this.number = number
  },
  hello() {
    super().say();
    console.log(`my school number is ${this.number}`);
  }
}

```

Symbol 用途

- 可以给对象定义唯一的键值，避免在扩展第三方模块时候键值冲突

- 可以给对象定义私有的成员

示例代码

```javascript
const obj = {
  [Symbol('FunA')]: function () {
    console.log("test symbol");
  },
  [Symbol('FunB')]: function () {
    console.log("test symbol");
  },
};
console.dir(obj);
```

Promise 是 es6 新增的异步编程的标准，主要的 API

- Promise.resolve()
- Promise.reject()
- Promise.all()
- Promise.race()

### Set

示例代码

```javascript
/**
 * Set 示例
 */
(function () {
  const s = new Set();
  s.add(1).add(2).add(3).add(4); // 添加元素， 链式调用

  s.forEach((i) => console.log(i)); // forEach 遍历

  // for of 遍历
  for (let i of s) {
    console.log(i);
  }

  // 删除
  s.delete(1);

  // 判断元素是否存在
  console.log(s.has(1));

  // 清空
  s.clear();

  // 利用 Set 元素唯一性，数组去重
  const arry = [1, 1, 1, 1, 2, 3, 4, 5];
  const result = [...new Set(arry)];
  console.log(result);
})();
```



### Map

示例代码

```javascript
/**
 * Map 示例
 * 与 Object 类似都是键值对，区别是 object 对健只能是字符串
 * Map 解决使用对象作为 key 的问题
 */
(function () {
  const m = new Map();
  const xiaodaidai = { name: "xiaozuo" };
  m.set(xiaodaidai, "xiaodaidai");
  // API 与 Set 类似  m.has() m.delete() m.clear() m.forEach()
  // for of 配合解构遍历 Map
  for (let [key, value] of m) {
    console.log(key, value);
  }
})();
```



### for of

可以遍历

- 数组
- arguments
- dom 获取的伪数组
- Map 、Set 对象

### Iterator 迭代器

示例

```javascript
// 初步认识 Iterator
let arry = [1, 2, 3];

let iterator = arry[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// 实现可迭代接口
let obj = {                          // 实现了可迭代接口 iterable， 内部必须实现 Symbol.iterator 方法
  arry: [4, 5, 6],
  [Symbol.iterator]: function() {    
    let index = 0;
    return {                         // 实现了迭代器接口  iterator，内部必须实现 next() 方法
      next: () => {
        return {                     // 实现了迭代结果接口 iterationResult， 内部要有 value 和 done 属性
          value: this.arry[index++],
          done: index > this.arry.length
        }
      }
    }
  }
};

for(let item of obj) {
  console.log(item);
}
// 打印 4 5 6

```

迭代器模式，使用语言内容提供的统一接口 Symbol.iterator 实现不同数据结构的遍历，让遍历方法与数据结构解耦合

```javascript
/**
 * 迭代器模式
 */
(function(){
  const todos = {
    life: ['吃饭', '睡觉', '打豆豆'],
    work: ['上网', '划水', '写bug'],
    learn: ['小说', '电影', '直播'],
    // 使用普通方式将遍历与数据解构
    each: function(cb) {
      let all = [...this.life, ...this.work, ...this.learn];
      for(let item of all) {
        cb(item);
      }
    },
    // 使用可迭代接口实现解耦合
    [Symbol.iterator]: function() {
      let index = 0;
      let all = [...this.life, ...this.work, ...this.learn];
      return {
        next() {
          return {
            value: all[index],
            done: index ++ >= all.length
          }
        }
      }
    }
  };
  

  todos.each(item => {
    console.log(`普通方式实现遍历与数据解构：${item}`);
  });

  for(let item of todos) {
    console.log(`可迭代接口实现遍历与数据解构：${item}`);
  }

})()
```

### Generator 生成器

生成器是为避免异步编程中回调过深，提供更好的异步编程解决方案；

生成器也可以配合迭代器，简化可迭代接口的实现

示例

```javascript
// Generator 函数

// 简单示例
function* foo() {
  console.log("1111");
  yield 100;
  console.log("2222");
  yield 200;
  console.log("3333");
  yield 300;
}
const generator = foo();
console.log(generator.next()); // 1111  { value: 100, done: false }
console.log(generator.next()); // 2222  { value: 200, done: false }
console.log(generator.next()); // 3333  { value: 300, done: false }
console.log(generator.next()); // { value: undefined, done: true }

// 简单应用
function* createId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const idMarker = createId();
console.log(idMarker.next().value);
console.log(idMarker.next().value);
console.log(idMarker.next().value);
/**
 * 实现可迭代接口
 */
(function () {
  let obj = {                          // 实现了可迭代接口 iterable， 内部必须实现 Symbol.iterator 方法
    arry: [43, 53, 63],
    [Symbol.iterator]: function*() {    
      for(let item of this.arry) {
        yield item;
      }
    }
  };
  for(let item of obj) {
    console.log(item);
  }
})();
```





