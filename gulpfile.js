var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass')(require('sass'));

gulp.task('pug', function buildHTML() {
	return gulp.src('src/index.pug').pipe(pug()).pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
	return gulp
		.src('src/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('pug', 'sass'));
