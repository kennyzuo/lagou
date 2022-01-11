/**
 * 函数是一等公民： 1. 函数可以存储在变量中；2.函数可以作为参数传递；3.函数可以作为返回值返回；
 * 高阶函数： 1.函数可以作为参数传递；2.函数可以作为返回值返回；
 */

// 函数表达式 => 函数存储在变量中
const fun = (name) => console.log(name);

// 函数作为参数
let arry = [2, 3, 4, 5, 6];
arry.forEach((item) => console.log(item));

// 函数作为返回值

function funA() {
  return (name) => {
    console.log(name);
  };
}
funA()("xiaodaidai");

// 高阶函数-函数作为参数，模拟数组 forEach
const forEach = (arry, fn) => {
  for (let item of arry) {
    fn(item);
  }
};
// 测试 forEach
forEach(arry, (item) => console.log(item));

// 高阶函数-函数作为参数，模拟数组 filter
const filter = (arry, fn) => {
  let arr = [];
  for (let item of arry) {
    fn(item) && arr.push(item);
  }
  return arr;
};
// 测试 filter
console.log(filter(arry, (item) => item > 4));


// 高阶函数-函数作为参数，模拟 lodash 中 once 函数，场景：支付按钮点击方法只能执行一次
const once = fn => {
  let done = false;
  return function(...args) {
    if(!done) {
      done = true;
      return fn.apply(this, args);
    } 
  }
}
// 测试 once
const pay = once( money => console.log(money));
pay(44);
pay(44);
pay(44);