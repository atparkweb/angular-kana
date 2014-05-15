module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'src/main.js',
                    'src/directives/to_kana.js',
                    'src/services/*.js'
                ],

                dest: 'angular-kana.js'
            }
        },

        uglify: {
            dist: {
                options: {
                    preserveComments: false,
                    mangle: {
                        except: ['angular']
                    },
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */'
                },

                files: {
                    'angular-kana.min.js': ['angular-kana.js']
                }
            }
        },

        watch: {
            files: ['src/**/*.js'],
            tasks: ['concat']
        },

        // Run unit tests with testem
        testem: {
            dist: {
                src: [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'angular-kana.js',
                    'test/unit/**/*.js'
                ],
                options: {
                    framework: 'jasmine'
                }
            },

            dist_min: {
                src: [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'angular-kana.min.js',
                    'test/unit/**/*.js'
                ],
                options: {
                    framework: 'jasmine'
                }
            }
        }
    });

    grunt.registerTask('default', ['concat', 'uglify', 'watch', 'testem.dist_min']);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-testem');
};
