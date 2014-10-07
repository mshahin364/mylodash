var grunt = require('grunt');
grunt.initConfig({
    concat: {
        options:{
          banner:"(function(){\n _ = {} ;\n",
          footer:"\n})()"
        },
        js: {

            src: ['src/*/**.js'],
            dest: 'lodash.js'
        }
    },
    uglify: {
        options: {
            banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n;',//添加banner,
            footer:''//添加footer
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