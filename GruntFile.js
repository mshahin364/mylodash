var grunt = require('grunt');
grunt.initConfig({
    concat: {
        js: {
            src: ['src/*/**.js'],
            dest: 'lodash.js'
        }
    },
    uglify: {
        options: {
            banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n;(function(){',//添加banner,
            footer:'})();\n/*!  最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
        },
        uglodash:{
            files: {
                './lodash-min.js': ['./lodash.js']
            }
        }

    }
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');



grunt.registerTask('default', [ 'concat','uglify:uglodash' ]);