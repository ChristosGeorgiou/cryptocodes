var angularFilesort = require('gulp-angular-filesort');
var concat = require('gulp-concat');
var gulp = require('gulp');
var minify = require('gulp-clean-css');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var modRewrite = require('connect-modrewrite');


gulp.task('default', ['sass', 'scripts', 'browser-sync'], function () {
    gulp.watch("./scss/**/**.*", ['sass']);
    gulp.watch("./src/**/*.js", ['scripts']);
});


// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./",
            middleware: [
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }
    });
});

gulp.task('sass', function () {

    return gulp.src("./scss/**/**.scss", {
        read: true,
    })
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(gulp.dest("./assets/css"));

});

gulp.task('scripts', [], function () {

    return gulp.src("./src/**/*.js")
        .pipe(angularFilesort())
        .pipe(sourcemaps.init())
        .pipe(concat("app.min.js", {
            newLine: ';'
        }))
        .pipe(ngAnnotate({
            add: true
        }))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("./assets/scripts"));

});

