
const obj = {
  [Symbol('FunA')]: function () {
    console.log("test symbol");
  },
  [Symbol('FunB')]: function () {
    console.log("test symbol");
  },
};
console.dir(obj);