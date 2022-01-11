
const createPromise = (param) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(param);
    }, 10);
  });
};

createPromise("hello")
  .then((res) => {
    return createPromise(res + " lagou");
  })
  .then((res) => {
    return createPromise(res + ", I love you");
  })
  .then((res) => console.log(res));
