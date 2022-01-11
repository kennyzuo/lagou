/**
 * 实现一个 记忆函数
 */

const memoize = (fn) => {
  let cached = {};
  return function () {
    let key = JSON.stringify(arguments);
    cached[key] = cached[key] || fn.apply(fn, arguments);
    return cached[key];
  };
};

// 测试
const getArea = (r) => {
  console.log("getArea");
  return Math.PI * r * r;
};

const getAreaCache = memoize(getArea);

// 输出 getArea 一次， 50.26548245743669 三次，说明函数的执行结果被缓存，重复调用不会多次执行
console.log(getAreaCache(4));
console.log(getAreaCache(4));
console.log(getAreaCache(4));
