/**
 * 使用 fp.add(x, y) 和 fp.map(f, x) 创建一个能让 functor 里的值增加的函数 ex1
 */
const { Maybe, Container } = require("./support");
const fp = require("lodash/fp");

let maybe = Maybe.of([5, 6, 1]);

let ex1 = fp.map(fp.add(1));


console.log(maybe.map(ex1));
