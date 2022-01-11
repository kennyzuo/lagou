const cars = require("./01.js");
const fp = require("lodash/fp");

/**
 * 使用 fp.flowRight()、fp.prop()、fp.first() 获取第一个 car 的name
 */

let getFirstCarName = fp.flowRight(fp.props('name') , fp.first);
console.log(getFirstCarName(cars));
