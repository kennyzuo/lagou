// gulp 示例

const { series, parallel } = require("gulp");
const fs = require('fs');

const { Transform } = require('stream');

// 简单 gulp 任务示例
exports.foo = (done) => {
  console.log("foo task working");
  done();
};

// callback 异步任务
exports.callback = (done) => {
  console.log("callback task~");
};

// callback 异步错误优先任务
exports.callback_error = (done) => {
  console.log("callback task~");
  done(new Error("task failed"));
};

// promise 异步任务
exports.promise = () => {
  console.log("promise task!");
  return Promise.resolve();
};

// promise error 异步任务
exports.promise_error = () => {
  console.log("promise task!");
  return Promise.reject(new Error("promise task error!"));
};

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

// async await 异步任务
exports.async = async () => {
  await timeout();
  console.log("async task~");
};

// stream 方式异步任务
exports.stream = () => {
  // 读取流
  const read = fs.createReadStream('package.json');
  // 文件转换流
  const transform = new Transform({
    transform: (chunk, encoding, callback) => {
      // 核心转换过程实现
      // chunk => 读取流中读取到到内容 （Buffer）
      const input = chunk.toString();
      console.log(input);
      const output = input.replace('gulp-demo', 'gulp-new-demo');
      callback(null, output);
    }
  })
  // 写入流
  const write = fs.createWriteStream('temp.txt');


  read.pipe(transform).pipe(write);
  return read;
}

// 默认 gulp 任务
exports.default = done => {
  console.log('default task working');
  done();
}

const task1 = (done) => {
  console.log("task1 done");
  done();
};

const task2 = (done) => {
  console.log("task2 done");
  done();
};

const task3 = (done) => {
  console.log("task3 done");
  done();
};

// 并行多任务示例
exports.sync_parallel = parallel(task1, task2, task3);

// 串行多任务示例
exports.async_series = series(task1, task2, task3);

