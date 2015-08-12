var changed = require('gulp-changed'),
  gulp = require('gulp');

gulp.task('html', function() {
  var dest = './dist';
	return gulp.src('./src/index.html')
		.pipe(changed(dest))
		.pipe(gulp.dest(dest));
});
