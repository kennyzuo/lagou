const marked = require('marked');

module.exports = source => {
  const html = marked(source);
  return html; // 交给下一个 loader html-loader 处理
}