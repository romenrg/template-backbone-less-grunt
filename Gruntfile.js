module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['src/less'],
                    yuicompress: true
                },
                files: {
                    "build/styles.css": 'src/less/styles.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/less/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'watch']);
};
