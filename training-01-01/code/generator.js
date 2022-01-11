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
