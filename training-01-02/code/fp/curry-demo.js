// 使用 lodash 的 curry 方法
// const { curry } = require("lodash");

const curry = fn => {
  let length = fn.length;
	return function curried(...args) {
    if(length === args.length) {
      return fn.apply(fn, args);
    }else {
      return function(...argsArry) {
        return curried(...args.concat(argsArry))
      }
    }
		
	}
}

function checkAge(minAge, age) {
  return age > minAge;
}
const checkAgeCurry = curry(checkAge);
const checkAge18 = checkAgeCurry(18);
console.log(checkAge18(22)); // true
console.log(checkAge18(18));  // false
const checkAge22 = checkAgeCurry(22);
console.log(checkAge22(24)); // true
console.log(checkAge22(16)); // false

// 也可以通过闭包来解决这个问题
const checkAgeNew = (minAge) => {
  return function (age) {
    return age > minAge;
  };
};
const checkAgeNew18 = checkAgeNew(18);
console.log(checkAgeNew18(22)); // true
console.log(checkAgeNew18(18));  // false
const checkAgeNew22 = checkAgeNew(22);
console.log(checkAgeNew22(24)); // true
console.log(checkAgeNew22(16)); // false

