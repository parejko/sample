var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/AppBundle/Resources/assets/gfx/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/AppBundle/Resources/public/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('src/AppBundle/Resources/assets/gfx/scss/*/*', ['sass']);
});

gulp.task('js', function() {
  return  gulp.src('src/AppBundle/Resources/assets/js/*')
        .pipe(gulp.dest('web/bundles/app/js'));
});

gulp.task('js:watch', function () {
    gulp.watch('src/AppBundle/Resources/assets/js/*', ['js']);
});

gulp.task('default', function() {

});