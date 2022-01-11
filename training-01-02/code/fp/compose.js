/**
 * 使用 lodash 的 flowRight 函数实现函数组合
 */
const _ = require("lodash");

const reverse = (arry) => arry.reverse();
const first = (arry) => arry[0];
const toUpper = (s) => s.toUpperCase();

const lastToUpper = _.flowRight(toUpper, first, reverse);
const arry = ["xiaodaidai", "xiaozui", "xiaotian"];
console.log(lastToUpper(arry));

/**
 * 模拟实现 lodash 的 flowRight 函数
 */
const flowRight = (...args) => (value) =>
  args.reverse().reduce((acc, current) => current(acc), value);
const lastToUpperNew = flowRight(toUpper, first, reverse);
const arryNew = ["xiaodaidai", "xiaozui", "xiaotian"];
console.log(lastToUpperNew(arryNew));


// 函数结合律演示
const f0 = flowRight(toUpper, first, reverse);
const f1 = flowRight(flowRight(toUpper, first), reverse);
const f2 = flowRight(toUpper, flowRight(first, reverse));

// 输出结果一致，遵循结合律
console.log(f0(["xiaodaidai", "xiaozui", "xiaotian"]));
console.log(f1(["xiaodaidai", "xiaozui", "xiaotian"]));
console.log(f2(["xiaodaidai", "xiaozui", "xiaotian"]));