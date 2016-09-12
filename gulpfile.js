var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');


var path = {
    HTML: 'app/index.html',
    ALL: ['app/js/*.js', 'app/js/**/*.js', 'app/app.js', 'app/index.html'],
    JS: ['app/js/*.js', 'app/js/**/*.js', 'app/app.js'],
    MINIFIED_OUT: 'build.min.js',
    DEST_app: 'dist/app',
    DEST_BUILD: 'dist/build',
    DEST: 'dist'
};

gulp.task('transform', function(){
    gulp.src(path.JS)
        .pipe(react())
        .pipe(gulp.dest(path.DEST_app));
});

gulp.task('copy', function(){
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
});

gulp.task('build', function(){
    gulp.src(path.JS)
        .pipe(react())
        .pipe(concat(path.MINIFIED_OUT))
        .pipe(uglify(path.MINIFIED_OUT))
        .pipe(gulp.dest(path.DEST_BUILD));
});