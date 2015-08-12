var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('watch', function() {
	gulp.watch('./src/js/**', ['browserify']);
	gulp.watch('./src/images/**', ['images']);
	gulp.watch('./src/sass/**', ['styles']);
	gulp.watch('./src/index.html', ['html']);
  
  gulp.watch(['./dist/**']).on('change', function(file) {
    gutil.log('Distribution change detected:', file.path);
  });
});
