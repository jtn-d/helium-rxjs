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

gulp.task('copy', function() {
  return gulp.src(['bower.json'])
    .pipe(gulp.dest('.tmp/'));  
});

gulp.task('link', function() {
  return gulp.src(['bower_components'])
    .pipe($.sym('.tmp/bower_components'));  
});

// Clean output directory
gulp.task('clean', function () {
  return del(['.tmp', 'dist']);
});

gulp.task('watch', function() {
  runSequence('clean', 'copy', 'link', 'js', function() {
    gulp.watch(['*.html', 'demo/*.html'], ['js']);
  });
});

gulp.task('default', function() {
   runSequence('clean', 'copy', 'link', 'js', function() {
  return gulp.src(['.tmp/**/*.*', '!.tmp/test/**/*.*'])
    .pipe(gulp.dest('dist'));
  });
});