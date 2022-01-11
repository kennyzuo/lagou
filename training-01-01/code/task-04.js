(function () {
  var a = 10;
  var obj = {
    a: 20,
    fn() {
      console.log(this.a);
      setTimeout(() => {
        console.log(this.a);
      }, 0);
    },
  };
  obj.fn();
})();

/**
 * 这个示例可以确定箭头函数不会创建自己的 this,它只会从自己的作用域链的上一层继承 this
 */
let a = 200
function test () {
  var a = 10;
  var obj = {
    a: 20,
    fn: () => {
      console.log(this.a);
      setTimeout(() => {
        console.log(this.a);
      }, 0);
    },
  };
  obj.fn();
};

let obj = {
  a: 100
}
test.bind(obj)();
