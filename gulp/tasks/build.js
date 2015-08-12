var gulp = require('gulp');
var notify = require('gulp-notify');

gulp.task('build', ['html', 'browserify', 'styles', 'images']);
