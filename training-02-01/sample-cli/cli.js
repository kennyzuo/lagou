#!/usr/bin/env node

/**
 * Node cli 应用入口文件必须要有这样的文件头
 * 如果是 Linux 或者 macos 还需要修改 cli.js 文件读写权限为 755
 * 即执行 chmod 755 cli.js 实现修改
 */

// console.log('sample-cli working');

const inquirer = require("inquirer");
const path = require("path");
const ejs = require("ejs");
const fs = require("fs");

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "Project name?",
//     },
//   ])
//   .then((answers) => {
//     console.log(answers);
//   });

const templPath = path.join(__dirname, "templates");
const destPath = process.cwd();


const readFileAndCopy = (filepath) => {
  ejs.renderFile(filepath, (err, result) => { 
    if(err) throw err;
    let _path = filepath.replace(templPath, destPath);
    fs.writeFileSync(_path, result);
  })
}

const mkdir = filepath => {
  let _path = filepath.replace(templPath, destPath);
  fs.mkdirSync(_path);
}

readdir = dirpath => {
  // 读取文件夹
  fs.readdir(dirpath, (err, files) => {
    if(err) throw err;
    files.forEach(file => {
      let fpath = path.join(dirpath, file)
      let stat = fs.statSync(fpath);
      // 还有文件夹递归读取
      if(stat.isDirectory()) {
        mkdir(fpath);
        readdir(fpath);
      }else { 
        readFileAndCopy(fpath);
      }
    })
  })
};

readdir(templPath);