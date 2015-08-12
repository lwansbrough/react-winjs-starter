var gulp = require('gulp');
var sass = require('gulp-sass');
var recess = require('gulp-recess');
var handleErrors = require('../util/handleErrors');


gulp.task('styles', function () {
    return gulp.src('./src/sass/app.sass')
      .pipe(recess())
      .on('error', handleErrors.bind({}, false)) // TODO: maybe we should still compile less files even if Recess is not happy
      .pipe(sass())
      .on('error', handleErrors)
      .pipe(gulp.dest('./dist/css'));
});