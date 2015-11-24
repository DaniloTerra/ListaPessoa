var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src('./node_modules/angular/angular.js')
      .pipe(gulp.dest('./public/js/'));

  gulp.src('./node_modules/angular-route/angular-route.js')
      .pipe(gulp.dest('./public/js/'));

  gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
      .pipe(gulp.dest('./public/css/'));

  gulp.src('./node_modules/bootstrap/dist/fonts/*.*')
      .pipe(gulp.dest('./public/fonts/'));

  gulp.src('./node_modules/font-awesome/css/font-awesome.css')
      .pipe(gulp.dest('./public/css/'));

  gulp.src('./node_modules/font-awesome/fonts/*.*')
      .pipe(gulp.dest('./public/fonts/'));
});
