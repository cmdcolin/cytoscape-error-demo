var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');

gulp.task('build', function () {


    gulp.src(['index.html'])
        .pipe(gulp.dest('dist'));

    gulp.src(['index.js'])
        .pipe(browserify())
        .pipe(gulp.dest('dist'));


    return 1;
});
gulp.task('default', ['build']);
