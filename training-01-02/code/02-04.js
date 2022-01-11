/**
 * 使用 Maybe 重写 ex4， 不要有 if 语句
 */
const { Maybe, Container } = require("./support");
const fp = require("lodash/fp");

let ex4Old = (n) => {
  if (n) return parseInt(n);
};

console.log(ex4Old(null));
console.log(ex4Old('22'));

let ex4 = (n) => {
  return Maybe.of(n).map(parseInt);
};
console.log(ex4(undefined));
console.log(ex4('22'));