var notify = require('gulp-notify');

module.exports = function() {

	var args = Array.prototype.slice.call(arguments);
  var kill = args.shift();
  if (typeof kill !== 'boolean') {
    args.unshift(kill);
    kill = true;
  }

	// Send error to notification center with gulp-notify
	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);

	// Keep gulp from hanging on this task
  if (kill) {
	  this.emit('end');
  }
};