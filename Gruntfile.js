/*global module:false*/
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          base: '.',
          keepalive: true
        }
      }
    },
    open: {
      sample: {
        path: "http://127.0.0.1:9001/angularjs.html"
      }
    },
    exec: {
      server: {
        command: 'cd server/node && npm install && ./server.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['open', 'connect']);
  grunt.registerTask('server', ['exec:server']);

};
