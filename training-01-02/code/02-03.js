/**
 * 实现一个函数 ex3，使用 safeProp 和 fp.first 找到 user 的名字的首字母
 */
const { Maybe, Container } = require("./support");
const fp = require("lodash/fp");

let safeProp = fp.curry((x, o) => Maybe.of(o[x]));

let user = { id: 2, name: "Albert" };
let ex3 = safeProp("name", user).map(fp.first);
console.log(ex3);
