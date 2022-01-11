
/**
 * 报错，是因为在 let 声明变量之前，由于 TDZ（暂时性死区）的存在，使用会报错
 */
var tmp = 123;
if(true) {
  console.log(tmp);
  let tmp;
}