/**
 * 使用帮助函数 _average 重构 averageDollarValue， 使用函数组合方式实现
 */

const cars = require("./01.js");
const fp = require("lodash/fp");

let _average = (xs) => fp.reduce(fp.add, 0, xs) / xs.length; // 无需改动
// old function
let averageDollarValueOld = (cars) => {
  let doller_values = fp.map((car) => car.doller_value, cars);
  return _average(doller_values);
};

console.log(averageDollarValueOld(cars));

// new function
let averageDollarValue = fp.flowRight(
  _average,
  fp.map((car) => car.doller_value)
);
console.log(averageDollarValue(cars));
