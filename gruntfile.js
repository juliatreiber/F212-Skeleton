module.exports = function(grunt) {

    grunt.initConfig({

        // Read in project settings from package.json
        pkg: grunt.file.readJSON('package.json'),

        // Define configuration for each task

        // concatenate task
        concat: {
            options: {
                // string to put between each file in concatenated output
                separator: ','
            },
            dist: {
                // source files to concatenate
                src: ['src/**/*.js'],
                // location of resulting js file
                dest: 'dist/<%= pkg.name %>.js'

            }
        },

        // uglify task for minification
        uglify: {
            options: {
                // insert filename and timestamp banner into the top of the output, followed by a new line
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    // concatenate all files that exist within src/ and end in .js
                    // creates a file in dist/ that contains minified result
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        //JSHint plugin, if we want it
        jshint: {
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },

        // Watch plugin to listen for changes on the fly. Kind of a memory suck however.
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint, qunit']
        },

        // Less options
        less: {
            development: {
                options: {
                    paths: ["styles/"],
                    cleancss: true
                },
                files: {
                    "styles/css/style.css": "styles/less/test.less"
                }
            }
        },

        handlebars: {
            all: {
                src: 'js/template-nav.js',
                dest: 'js/templates.js'
            }
        }
    });

    // Load in the Grunt plugins we need to satisfy the above
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Set up the tasks. Default is muy importante.
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['jshint', 'less', 'handlebars']);

};