// 简答题第一题

/**
 * 不做任何处理，结果输出为 for 循环之后 i 的最终值 10，
 * 原因是因为 var 关键字没有块级作用域，i 变量虽然是在 for 循环中定义，因为变量提升的原因，其实等同于在
 * 代码的开始定义了 i， 所以最终打印的 i 值是循环之后的结果
 */
'use strict';

(function () {
  var a = [];
  for (var i = 0; i < 10; i++) {
    a[i] = function () {
      console.log(i);
    };
  }

  a[6]();
})();

/**
 * 使用 let 定义，输出结果为 6
 * 这是因为 let 是有块级作用域的， 数组成员定义的匿名函数由于闭包的原因将持有循环是 i 的值，所有最终的结果是 6
 */
(function () {
  var a = [];
  for (let i = 0; i < 10; i++) {
    a[i] = function () {
      console.log(i);
    };
  }
  a[6]();
})();