const sass = require("sass");
const loadGruntTasks = require("load-grunt-tasks");

const data = {
  pkg: require("./package.json"),
  menus: [
    {
      name: 'Home',
      icon: 'aperture',
      link: 'index.html'
    },
    {
      name: 'About', 
      link: 'about.html'
    }
  ],
  date: new Date(),
};
module.exports = (grunt) => {
  // 设置配置参数
  grunt.initConfig({
    build: {
      options: {
        foo: "bar",
      },
      css: {
        options: {
          foo: "css",
        },
      },
      js: "2",
    },
    clean: {
      build: ["dist"],
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      main: {
        files: {
          "dist/assets/styles/main.css": "src/assets/styles/main.scss",
        },
      },
    },
    babel: {
      options: {
        presets: ["@babel/preset-env"],
        sourceMap: true,
      },
      main: {
        files: {
          "dist/assets/scripts/main.js": "src/assets/scripts/main.js",
        },
      },
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: "src/assets/fonts/",
            src: ["**"],
            dest: "dist/assets/fonts/",
          },
        ],
      },
    },
    swigtemplates: {
      options: {
        templatesDir: "src/",
        defaultContext: data,
      },
      main: {
        files: [
          {
            dest: "dist/",
            src: ["src/*.html"],
          },
        ],
      },
    },
    watch: {
      js: {
        files: ["src/assets/scripts/*.js"],
        tasks: ["babel"],
      },
      css: {
        files: ["src/assets/styles/*.scss"],
        tasks: ["sass"],
      },
      html: {
        files: ["src/**/*.html"],
        tasks: ["swigtemplates"],
      }
    },
  });


  /**
   * 插件使用
   */
  // grunt.loadNpmTasks('grunt-contrib-clean');

  // grunt.loadNpmTasks('grunt-sass');

  // 自动加载所有 grunt 插件中的任务 sass、babel
  loadGruntTasks(grunt);
  grunt.registerTask("build", ["clean", "swigtemplates", "copy", "sass", "babel"]);
  grunt.registerTask("dev", ["swigtemplates", "copy", "sass", "babel", "watch"]);
};
