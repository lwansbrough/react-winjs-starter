var changed = require('gulp-changed'),
  gulp = require('gulp'),
  imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  var dest = './dist/images';
	return gulp.src('./src/images/**')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(dest));
});
