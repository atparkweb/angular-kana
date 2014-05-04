module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'src/to_kana.js',
                    'src/bulk_replace.js',
                    'src/kana_service.js'
                ],

                dest: 'angular-kana.js'
            }
        },

        watch: {
            files: ['src/**/*.js'],
            tasks: ['concat']
        }
    });

    grunt.registerTask('default', ['concat']);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
};