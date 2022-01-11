const sass = require("sass");
const loadGruntTasks = require("load-grunt-tasks");

module.exports = (grunt) => {
  grunt.initConfig({
    foo: {
      bar: "my name is xiaodaidai",
    },
    clean: {
      temp: "dist/**",
    },
  });

  grunt.registerTask("simple", () => {
    console.log(`hello grunt~  ${grunt.config("foo.bar")}`);
  });

  grunt.registerTask("default", () => {
    console.log("this is default grunt task!");
  });

  grunt.registerTask("compose", ["simple", "default"]);

   /**
   * 插件使用
   */
  // grunt.loadNpmTasks('grunt-contrib-clean');

  // 自动加载所有 grunt 插件中的任务 sass、babel
  loadGruntTasks(grunt);
};
