// 函数组合，将洋葱式代码封装在内部
const compose = (f, g) => {
  return function (value) {
    return g(f(value));
  };
};

const reverse = (arry) => arry.reverse();
const first = (arry) => arry[0];

const last = compose(reverse, first);

console.log(last([1, 2, 3, 4])); // 4
