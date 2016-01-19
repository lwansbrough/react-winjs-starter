var browserify = require('browserify'),
  babelify = require('babelify'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),
  handleErrors = require('../util/handleErrors'),
  buffer = require('vinyl-buffer'),
  source = require('vinyl-source-stream'),
  uglify = require('gulp-uglify');


gulp.task('browserify', function() {

    return browserify({
        entries: ['./src/js/app'],
        paths: [
          './src/js/'
        ],
        debug: true
    })
    .transform(babelify.configure({
      optional: ['runtime']
    }))
    .bundle()
    .on('error', handleErrors)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./js'))
    .pipe(gulp.dest('./dist/js'));
});
