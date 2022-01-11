// 实现这个项目的构建任务
const { src, dest, parallel, series, watch } = require("gulp");
const del = require("del");
const browserSync = require("browser-sync");
const loadPlugins = require("gulp-load-plugins");

const bs = browserSync.create();
const plugins = loadPlugins();

const data = {
  menus: [
    {
      name: "Home",
      icon: "aperture",
      link: "index.html",
    },
    {
      name: "Features",
      link: "features.html",
    },
    {
      name: "About",
      link: "about.html",
    },
    {
      name: "Contact",
      link: "#",
      children: [
        {
          name: "Twitter",
          link: "https://twitter.com/w_zce",
        },
        {
          name: "About",
          link: "https://weibo.com/zceme",
        },
        {
          name: "divider",
        },
        {
          name: "About",
          link: "https://github.com/zce",
        },
      ],
    },
  ],
  pkg: require("./package.json"),
  date: new Date(),
};
const style = () => {
  return src("src/assets/styles/*.scss", { base: "src" })
    .pipe(plugins.sass())
    .pipe(dest("temp"))
    .pipe(bs.reload({ stream: true }));
};

const script = () => {
  return src("src/assets/scripts/*.js", { base: "src" })
    .pipe(plugins.babel())
    .pipe(dest("temp"))
    .pipe(bs.reload({ stream: true }));
};

const page = () => {
  return src("src/**/*.html", { base: "src" })
    .pipe(plugins.swig({ data, defaults: { cache: false } }))
    .pipe(dest("temp"))
    .pipe(bs.reload({ stream: true }));
};

const image = () => {
  return src("src/assets/images/**", { base: "src" })
    .pipe(plugins.imagemin())
    .pipe(dest("release"));
};

const font = () => {
  return src("src/assets/fonts/**", { base: "src" })
    .pipe(plugins.imagemin())
    .pipe(dest("release"));
};

const extra = () => {
  return src("public/**", { base: "public" }).pipe(dest("release"));
};

const clean = () => {
  return del(["gulp-dist", "temp"]);
};

const serve = () => {
  // watch("src/assets/fonts/**", font);
  // watch("src/assets/images/**", image);
  // watch("public/**", extra);

  watch("src/assets/scripts/*.js", script);
  watch("src/assets/styles/*.scss", style);
  watch("src/*.html", page);

  watch(
    ["src/assets/images/**", "public/**", "src/assets/fonts/**"],
    bs.reload
  );

  bs.init({
    notify: false,
    port: 8080,
    // files: "gulp-dist/**",
    server: {
      baseDir: ["temp", "src", "public"],
      routes: {
        "/node_modules": "node_modules",
      },
    },
  });
};

const jsCondition = (file) => {
  console.log(file.path);
  let result = /\.js$/.test(file.path);
  return result;
};

const useref = () => {
  return (
    src("temp/*.html", { base: "temp" })
      .pipe(plugins.useref({ serachPath: ["temp", "."] }))
      // html js css
      .pipe(plugins.if(jsCondition, plugins.uglify()))
      .pipe(plugins.if("*.css", plugins.cleanCss()))
      .pipe(
        plugins.if(
          "*.html",
          plugins.htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
          })
        )
      )
      .pipe(dest("release"))
  );
};

const compile = parallel(style, script, page);
const build = series(
  clean,
  parallel(series(compile, useref), image, font, extra)
);
const dev = series(compile, serve);
module.exports = {
  useref,
  clean,
  compile,
  build,
  dev,
};
