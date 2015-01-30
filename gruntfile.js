module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig( {
		uglify: {
			my_target: {
				files: {
				'js/script.js': ['components/js/script.js']
				} // files
			} // my target
		}, //uglify
		compass:  {
			dev: {
				options: {
					config: 'config.rb'
				} // option
			} // dev
		}, // compass
		watch: {
			options: { livereload: true },
			scripts: {
				files: ['components/js/*.js'],
				tasks: ['uglify']
			}, //script
			sass: {
				files: ['components/sass/*.scss'],
				tasks: ['compass:dev']
			},//sass
			html: {
				files: ['*.html']
			}
		} //watch
	})//initConfig
	grunt.registerTask('default', 'watch');
} // export
