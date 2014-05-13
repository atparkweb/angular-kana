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
        }
    });

    grunt.registerTask('default', ['concat', 'uglify', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
