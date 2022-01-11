/**
 * 模拟函数柯里化方法 curry
 */
const fp = require("lodash/fp");

// 需要柯里化的方法
const add = (a, b, c) => a + b + c;

{
  /**
   * 通过 lodash 提供的 curry 查看结果，即模拟的 curry 需要通过以下的测试用例
   */
  const _add = fp.curry(add);
  console.log(_add(1, 2, 3));
  console.log(_add(1)(2, 3));
  console.log(_add(1)(2)(3));
}

{
  /**
   * 模拟柯里化方法 curry
   * @param {*} fn 需要柯里化的函数
   */
  const curry = (fn) => {
    let length = fn.length;

    return function curried(...args) {
      if (length === args.length) {
        return fn(...args);
      } else {
        return function (...curryArgs) {
          return curried.apply(curried ,args.concat(curryArgs));
        };
      }
    };
  };
  const _add = curry(add);
  console.log(_add(1, 2, 3));
  console.log(_add(1)(2, 3));
  console.log(_add(1)(2)(3));
}