var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('You just ran a Gulp task');
});

gulp.task('html', function() {
  console.log("HTML stuff here");
});

gulp.task('styles', function() {
  console.log("CSS stuff here");
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
