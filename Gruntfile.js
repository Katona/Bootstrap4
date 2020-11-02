"use strict";

const sass = require("sass");

module.exports = function (grunt) {
  require("time-grunt")(grunt);
  require("jit-grunt")(grunt);

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
      },
      dist: {
        files: {
          "css/styles.css": "css/styles.scss",
        },
      },
      implementation: "sass",
    },
    watch: {
      files: "css/*.scss",
      tasks: ["sass"],
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ["css/*.css", "*.html", "js/*.js"],
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./",
          },
        },
      },
    },
  });

  grunt.registerTask("css", ["sass"]);
  grunt.registerTask("default", ["browserSync", "watch"]);
};
