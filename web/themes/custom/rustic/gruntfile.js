/* jshint esversion: 6 */

/**
 * Grunt tasks configuration file.
 *
 * @link http://gruntjs.com/
 */
module.exports = function (grunt) {
    grunt.initConfig({

        /**
         * Package definitions.
         */
        pkg: grunt.file.readJSON("package.json"),

        /**
         * Script linting.
         *
         * @link https://github.com/gruntjs/grunt-contrib-jshint
         */
        jshint: {
            files: [ "gruntfile.js", "assets/js/*.js" ],
            options: {
                jshintrc: true,
                globals: {
                    window: false,
                    document: false,
                    $: true,
                    jQuery: false
                },
                validthis: true
            }
        },

        /**
         * Dart Sass.
         *
         * @link https://www.npmjs.com/package/grunt-dart-sass
         */
        stylelint: {
            all: [ "assets/css/**/*.css" ]
        },

        /**
         * Run tasks whenever watched files change.
         *
         * @link https://github.com/gruntjs/grunt-contrib-watch
         */
        watch: {
            options: {
                reload: true,
                spawn: false
            },

            grunt: {
                files: [ "gruntfile.js" ]
            },

            styles: {
                files: [ "assets/css/**/*.css" ],
                tasks: [ "stylelint" ]
            },

            scripts: {
                files: [ "assets/js/**/*.js" ],
                tasks: [ "jshint" ]
            }
        }
    });

    /**
     * Load NPM task modules.
     */
    grunt.loadNpmTasks("grunt-stylelint");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-notify");


    /**
     * Register task(s).
     */
    grunt.registerTask("default", [ "watch" ]);
};

/* <> */
