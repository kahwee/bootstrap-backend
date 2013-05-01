module.exports = function(grunt) {
	var cssPath = 'app/css',
		lessPath = 'app/less';
	var lessDevelopmentFiles = {},
		cssminDevelopmentFiles = {},
		uglifyDevelopmentFiles = {};
	lessDevelopmentFiles[cssPath + '/app.css'] = lessPath + '/app.less';
	cssminDevelopmentFiles[cssPath + '/app.min.css'] = [cssPath + '/app.css'];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/*
		 * LESS compilation
		 * ================
		 */
		less: {
			development: {
				options: {
					paths: [lessPath]
				},
				files: lessDevelopmentFiles
			}
		},

		/*
		 * CSS Minification
		 * ================
		 */
		cssmin: {
			development: {
				files: cssminDevelopmentFiles
			}
		},

		/*
		 * Watch
		 * ============
		 */
		watch: {
			css: {
				files: lessPath + '/**/*.less',
				tasks: ['css']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('css', ['less:development', 'cssmin:development']);
	grunt.registerTask('build', ['css', 'js']);
	grunt.registerTask('default', ['css']);

};
