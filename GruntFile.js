var grunt = require('grunt');
grunt.initConfig({
    concat: {
        options: {
            banner: "(function(){\n window.lodash =  {} ;\n",
            footer: "\n_ = lodash;\n})()"
        },
        js: {

            src: ['src/base.js', 'src/*/**.js'],
            dest: 'lodash.js'
        }
    },
    replace: {
        example: {
            src: ['lodash.js'], // source files array (supports minimatch)
            dest: 'lodash.js', // destination directory or file
            replacements: [{
                from: '_.', // string replacement
                to: 'lodash.'
            }]
        }
    },
    uglify: {
        options: {
            banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n;', //添加banner,
            footer: '' //添加footer
        },
        target: {
            files: {
                './lodash-min.js': ['./lodash.js']
            }
        }

    }
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-text-replace');
grunt.loadNpmTasks('grunt-contrib-uglify');



grunt.registerTask('default', ['concat','replace', 'uglify']);