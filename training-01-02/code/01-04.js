/**
 * 使用 flowRight 写一个 sanitizeNames() 函数，返回一个下划线链接的小写字符串，把数组中的 name 转换为这种形式：
 * 例如： sanitizeNames(["Hello World"]) => ["hello_world"]
 */
const fp = require("lodash/fp");
// 无需改动，并在 sanitizeNames 中使用
let _underscore = fp.replace(/\W+/g, "_");

const sanitizeNames = fp.map(fp.flowRight(_underscore, fp.toLower));
console.log(sanitizeNames(["Hello World", "Hello Lagou"]));
