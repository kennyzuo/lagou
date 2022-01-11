const obj = {
  a: 100,
  b: 'xiaodaidai'
};

const objProxy = new Proxy(obj, {
  get(target, property){
    console.log('get ', property);
    return target[property];
  },
  set(target, property, value){
    console.log('set ', property);
    target[property] = value;
  }
});


/** 打印：
 * get a 
 * 100
 * set b
 */
console.log(objProxy.a);  
objProxy.b = 'hello world;'


// 使用 reflect 重写上面的 proxy 实现

const reflectProxy = new Proxy(obj, {
  get(target, property) {
    console.log(property, target[property]);
    return Reflect.get(target, property);
  }
});

console.log(reflectProxy.a);

// Reflect 对象统一了对象的操作方式
const objA = {
  name: 'xiaozuo',
  age: 18,
  sex: 0
};
console.log('name' in objA)  // true
console.log(delete objA['sex']);
console.log(objA.keys);

// 统一使用 Reflect 内置方法

console.log(Reflect.has(objA, 'name'))  // true
console.log(Reflect.deleteProperty(objA, 'age'));
console.log(Reflect.ownKeys(objA));
