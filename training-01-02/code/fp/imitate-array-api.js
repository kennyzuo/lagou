/**
 * 模拟数组方法 map、some、every
 */

const map = (arry, fn) => {
  let arr = [];
  for (let item of arry) {
    arr.push(fn(item));
  }
  return arr;
};

const some = (arry, fn) => {
  let result = false;
  for (let item of arry) {
    result = fn(item);
    if (result) break;
  }
  return result;
};

const every = (arry, fn) => {
  let result = true;
  for (let item of arry) {
    result = fn(item);
    if (!result) break;
  }
  return result;
};

// 测试 map、some、every
let arr = [3, 2, 5, 7, 9, 55, 32, 11];
console.log(
  "map result:",
  map(arr, (item) => item * 2)
);
console.log(
  "some result false:",
  some(arr, (item) => item < -1)
);
console.log(
  "some result true:",
  some(arr, (item) => item > 10)
);
console.log(
  "every result true:",
  every(arr, (item) => item > -1)
);
console.log(
  "every result false:",
  every(arr, (item) => item > 10)
);
