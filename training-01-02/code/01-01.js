const cars = require("./01.js");
const fp = require("lodash/fp");
// console.log(cars);

/**
 * 使用函数组合 fp.flowRight() 重新实现下面函数
 */

let isLastInStockOld = function (cars) {
  // 获取最后一条数据
  let last_car = fp.last(cars);
  // 获取最后一条数据 in_stock 属性值
  return fp.prop("in_stock", last_car);
};

/**
 * 使用 fp.flowRight() 重写
 */
let isLastInStockNew = fp.flowRight(fp.prop('in_stock'), fp.last);
console.log(isLastInStockNew(cars));
