// 初步认识 Iterator
let arry = [1, 2, 3];

let iterator = arry[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// 实现可迭代接口
let obj = {                          // 实现了可迭代接口 iterable， 内部必须实现 Symbol.iterator 方法
  arry: [4, 5, 6],
  [Symbol.iterator]: function() {    
    let index = 0;
    return {                         // 实现了迭代器接口  iterator，内部必须实现 next() 方法
      next: () => {
        return {                     // 实现了迭代结果接口 iterationResult， 内部要有 value 和 done 属性
          value: this.arry[index++],
          done: index > this.arry.length
        }
      }
    }
  }
};

for(let item of obj) {
  console.log(item);
}

/**
 * 迭代器模式
 */
(function(){
  const todos = {
    life: ['吃饭', '睡觉', '打豆豆'],
    work: ['上网', '划水', '写bug'],
    learn: ['小说', '电影', '直播'],
    // 使用普通方式将遍历与数据解构
    each: function(cb) {
      let all = [...this.life, ...this.work, ...this.learn];
      for(let item of all) {
        cb(item);
      }
    },
    // 使用可迭代接口实现解耦合
    [Symbol.iterator]: function() {
      let index = 0;
      let all = [...this.life, ...this.work, ...this.learn];
      return {
        next() {
          return {
            value: all[index],
            done: index ++ >= all.length
          }
        }
      }
    }
  };
  

  todos.each(item => {
    console.log(`普通方式实现遍历与数据解构：${item}`);
  });

  for(let item of todos) {
    console.log(`可迭代接口实现遍历与数据解构：${item}`);
  }

})()