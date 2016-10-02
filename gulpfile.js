var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('build-js', function(){
    return gulp
    .src('./angular/**/*.js')
    // .pipe($.uglify())
    .pipe($.concat('bundle.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('build-css', function(){
    return gulp.src('./styles/*.scss')
        .pipe($.sass())
        .pipe($.concat('bundle.css'))
        .pipe(gulp.dest('./'));
});