// Load Gulp
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');
  plumber = require('gulp-plumber');
  less = require('gulp-less');
  cssmin = require('gulp-cssmin');
  babel = require('gulp-babel');

// Minify Custom JS: Run manually with: "gulp build-js"
gulp.task('build-js', function() {
  return gulp.src(['component/dw-appbar.js'])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('dw-appbar_es5.js'))
    .pipe(uglify())
    .pipe(gulp.dest('component'));
});

// Default task
gulp.task('watch', function() {
    // gulp.watch('public/css/**/*.less', ['build-css']);
    gulp.watch('component/*.js', ['build-js']);  //es6
});


// Default Task
gulp.task('default', ['build-js']);
// gulp.task('default', ['build-js', 'build-libs', 'build-ie', 'build-css']);
