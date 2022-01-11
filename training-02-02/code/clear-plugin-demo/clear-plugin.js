class ClearPlugin {
  apply(compiler) {
    console.log("ClearPlugin Working");
    compiler.hooks.emit.tap("ClearPlugin", (compilation) => {
      // compilation 可以理解为此次打包的上下文
      for (const name in compilation.assets) {
        console.log(name);
        console.log()
        if(name.endsWith('.js')) {
          const contents = compilation.assets[name].source();
          const withoutComments = contents.replace(/\/\*\*+\*\//g, '');
          compilation.assets[name] = {
            source: () => withoutComments,
            size: () => withoutComments.length
          }
        }
      }
    });
  }
}

module.exports = { ClearPlugin };
