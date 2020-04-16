const gulp = require('gulp');
const rollup = require('rollup').rollup;
const rollupBabel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const less = require('gulp-less');
const fileinclude = require('gulp-file-include');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const replace = require('rollup-plugin-replace');
const connect = require('gulp-connect');
const npmcss = require('npm-css');

const paths = {
	html: ['*.html', 'views/*.html'],
	styles: ['components/**/*.less'],
	scripts: ['components/*.js']
};

function connectServer() {
	return connect.server({
		root: 'app',
		livereload: true
	});
}
exports.connectServer = connectServer;

function includeFiles() {
	return gulp.src(['*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('./app'));
}
exports.includeFiles = includeFiles;

function loadHtml() {
	return gulp.src('*.html')
		.pipe(connect.reload());
}
exports.loadHtml = loadHtml;

exports.html = gulp.series(includeFiles, loadHtml);

function buildCSS() {
	return gulp.src(paths.styles)
		.pipe(less())
		.pipe(concat('app.css'))
		.pipe(gulp.dest('app/stylesheets'))
		.pipe(connect.reload());
}
exports.buildCSS = buildCSS;

function buildJS() {
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
}
exports.buildJS = buildJS;

// Rerun the task when a file changes
function watch(done) {
	gulp.watch(paths.html, html);
	gulp.watch(paths.styles, buildCSS);
	gulp.watch(paths.scripts, buildJS);
	done();
}
exports.watch = watch;

exports.build = gulp.series(includeFiles, buildCSS, buildJS);

// The default task (called when you run `gulp` from cli)
exports.default = gulp.series(
	exports.includeFiles,
	exports.connectServer,
	exports.buildCSS,
	exports.buildJS,
	exports.watch
);