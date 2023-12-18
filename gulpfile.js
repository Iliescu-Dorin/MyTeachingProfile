const gulp = require('gulp');
const fileInclude = require('gulp-file-include');

gulp.task('html', function() {
  return gulp.src(['src/html/*.html'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src(['src/css/*.css'])
    // Add your CSS processing tasks here if needed
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src(['src/js/*.js'])
    // Add your JS processing tasks here if needed
    .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function() {
  return gulp.src(['src/fonts/*'])
    // Add any font processing tasks here if needed
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function() {
  return gulp.src(['src/images/*'])
    // Add your image processing tasks here if needed
    .pipe(gulp.dest('dist/images'));
});

gulp.task('default', gulp.series('html', 'css', 'js', 'fonts', 'images'));
