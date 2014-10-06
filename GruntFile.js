var grunt = require('grunt');
grunt.initConfig({
    concat: {
        js: {
            src: ['src/*/**.js'],
            dest: 'lodash.js'
        }
    }
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');



grunt.registerTask('default', [ 'concat' ]);