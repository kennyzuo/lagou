// 第七题： 浅拷贝-深度拷贝

function shallowCopy(obj) {
  return Object.assign({}, obj);
}

// 使用 JSON stringify 实现简单的深拷贝
function depCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let obj = {
  a: [1, 2, 3],
  b: {
    c: "xiaodaidai",
    d: [4, 5, 6],
  },
};

// let shallowObj = shallowCopy(obj);
// shallowObj.b.c = "xiaozuo";
// console.log(obj);
// console.log(shallowObj);

let depObj = depCopy(obj);
depObj.b.c = "xiaozuo";
console.log(obj);
console.log(depObj);