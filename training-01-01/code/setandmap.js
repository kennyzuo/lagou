/**
 * Set 示例
 */
(function () {
  const s = new Set();
  s.add(1).add(2).add(3).add(4); // 添加元素， 链式调用

  s.forEach((i) => console.log(i)); // forEach 遍历

  // for of 遍历
  for (let i of s) {
    console.log(i);
  }

  // 删除
  s.delete(1);

  // 判断元素是否存在
  console.log(s.has(1));

  // 清空
  s.clear();

  // 利用 Set 元素唯一性，数组去重
  const arry = [1, 1, 1, 1, 2, 3, 4, 5];
  const result = [...new Set(arry)];
  console.log(result);
})();

/**
 * Map 示例
 * 与 object 类似都是键值对，区别是 object 对健只能是字符串
 * Map 解决使用对象作为 key 的问题
 */
(function () {
  const m = new Map();
  const xiaodaidai = { name: "xiaozuo" };
  m.set(xiaodaidai, "xiaodaidai");
  // API 与 Set 类似  m.has() m.delete() m.clear() m.forEach()

  // for of 配合解构遍历 Map
  for (let [key, value] of m) {
    console.log(key, value);
  }
})();
