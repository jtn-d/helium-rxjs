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

gulp.task('bower-scripts', function() {
  return gulp.src('.tmp/helium-rxjs-import.html')
    .pipe($.replace('<script src="../', '<script src="bower_components/'))
    .pipe(gulp.dest('.tmp'));
});

gulp.task('bower-imports', function() {
  return gulp.src('.tmp/helium-rxjs-*.html')
    .pipe($.replace('<link rel="import" href="../', '<link rel="import" href="bower_components/'))
    .pipe(gulp.dest('.tmp'));
});

gulp.task('copy:dist', function() {
  return gulp.src(['.tmp/bower.json','.tmp/index.html', '.tmp/demo/**/*'], {base: '.tmp'})
    .pipe(gulp.dest('dist'));
});

gulp.task('vulcanize', function() {
  return gulp.src(['.tmp/helium-rxjs.html'])
    .pipe($.vulcanize({
      abspath: '',
      excludes: [
        '../rxjs/dist/rx.all.js',
        '../rxjs-dom/dist/rx.dom.js',
        '../polymer/polymer.html'
      ],
      redirects: [
        '../polymer/polymer.html|bower_components/polymer/polymer.html',
        '../polymer/polymer-mini.html|bower_components/polymer/polymer-mini.html',
        '../polymer/polymer-micro.html|bower_components/polymer/polymer-micro.html'        
      ],
      stripExcludes: false,
      inlineScripts: true      
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
  runSequence(
    'clean', 'copy', 'link', 'js', 
    'vulcanize', 'copy:dist', function() {
  });
});