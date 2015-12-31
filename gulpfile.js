var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');

// Transpile all JS to ES5.
gulp.task('js', function () {
  return gulp.src(['**/*.html', '!bower_components/**/*', '!node_modules/**/*'])
    .pipe($.sourcemaps.init())
    .pipe($.if('*.html', $.crisper({scriptInHead:false}))) // Extract JS from .html files
    .pipe($.if('*.js', $.babel({
        presets: ['es2015']
    })))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/'));
});

// Clean output directory
gulp.task('clean', function () {
  return del(['.tmp', 'dist']);
});

gulp.task('watch', function() {
  runSequence('clean', 'js', function(){
    gulp.watch(['*.html', 'demo/*.html'], ['js']);
  });
});

gulp.task('default', ['clean', 'js'], function() {
});