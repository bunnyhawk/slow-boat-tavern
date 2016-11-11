const gulp = require('gulp');
var eslint = require('gulp-eslint');
var rollup = require('rollup').rollup;
var rollupBabel = require('rollup-plugin-babel');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var less = require('gulp-less');
var fileinclude = require('gulp-file-include');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var replace = require('rollup-plugin-replace');
var connect = require('gulp-connect');
var npmcss = require('npm-css');

var paths = {
	html: ['*.html', 'views/*.html'],
	styles: ['components/**/*.less'],
	scripts: ['components/*.js']
};

gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true
	});
});

gulp.task('fileinclude', function() {
	gulp.src(['*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('./app'));
});

gulp.task('html', function () {
	gulp.src('*.html')
		.pipe(connect.reload());
});

gulp.task('build-less', function(){
	return gulp.src(paths.styles)
		.pipe(less())
		.pipe(concat('app.css'))
		.pipe(gulp.dest('app/stylesheets'))
		.pipe(connect.reload());
});

gulp.task('scripts', function() {
	return rollup({
		entry: "components/app.js",
		plugins: [
			nodeResolve({
				jsnext: true
			}),
			commonjs(),
			rollupBabel({
				exclude: 'node_modules/**',
				presets: ['es2015-rollup'],
			}),
		]	
	}).then(function(bundle) {
		return bundle.write({
      dest: 'app/scripts/main.js'
    });
	}).then(function() {
		return connect.reload()
	});
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch(paths.html, ['html', 'fileinclude']);
	gulp.watch(paths.styles, ['build-less']);
	gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('build', ['fileinclude', 'build-less', 'scripts']);

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['fileinclude', 'connect', 'build-less', 'scripts', 'watch']);