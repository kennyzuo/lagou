// 模块化文件数组
const modules = [];

modules[0] = (module, webpack_exports, webpack_require) => {
  webpack_require.r(webpack_exports);
  var moduleHeader = webpack_require(1);
  document.body.appendChild(Object(moduleHeader["createHeader"])());
};

modules[1] = (module, webpack_exports, webpack_require) => {
  webpack_require.r(webpack_exports);
  // 
  webpack_require.d(webpack_exports, "createHeader", function () {
    return createHeader;
  });
  const createHeader = () => {
    let el = document.createElement("div");
    el.innerHTML = "Hello Webpack haha";
    el.style.color = "red";
    return el;
  };
};

(function (modules) {
  // 加载好的模块缓存
  const installedModules = {};

  // The require function
  function webpack_require(moduleId) {
    // 缓存中是否存在
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    // Create a new module (and put it into the cache)
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });

    // Execute the module function
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      webpack_require
    );

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }

  // define __esModule on exports
  webpack_require.r = (exports) => {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };

  // define getter function for harmony exports
  webpack_require.d = (exports, name, getter) => {
    if (!webpack_require.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
    }
  };

  // Object.prototype.hasOwnProperty.call
  webpack_require.o = (object, property) => {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  // Load entry module and return exports
  return webpack_require((webpack_require.s = 0));
})(modules);
