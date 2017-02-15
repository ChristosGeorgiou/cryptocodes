const angularFilesort = require('gulp-angular-filesort');
const concat = require('gulp-concat');
const gulp = require('gulp');
const minify = require('gulp-clean-css');
const ngAnnotate = require('gulp-ng-annotate');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const modRewrite = require('connect-modrewrite');


gulp.task('default', ['build', 'browser-sync'], () => {
  gulp.watch('./scss/**/**.*', ['sass']);
  gulp.watch('./src/components/**/*.js', ['angular']);
  gulp.watch('./src/**/*.html', ['static']);
});


// Static server
gulp
  .task('browser-sync', () => {
    browserSync.init({
      ui: false,
      server: {
        baseDir: './dist/',
        middleware: [
          modRewrite([
            '!\\.\\w+$ /index.html [L]',
          ]),
        ],
      },
    });
  });

gulp
  .task('build', ['angular', 'libs', 'static', 'sass']);

gulp
  .task('sass', () => gulp
    .src('./scss/**/**.scss', {
      read: true,
    })
    .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(rename({
      suffix: '.min',
      extname: '.css',
    }))
    .pipe(gulp.dest('./dist/static/css')));

gulp
  .task('angular', () => gulp
    .src('./src/components/**/*.js')
    .pipe(angularFilesort())
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js', {
      newLine: ';',
    }))
    // .pipe(ngAnnotate({
    //   add: true,
    // }))
    // .pipe(uglify({
    //   mangle: false,
    // }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/static/scripts')));

gulp.task('static', () => {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist/'));
  gulp.src('./src/static/**/*.*')
    .pipe(gulp.dest('./dist/static'));
});

gulp.task('libs', () => {
  gulp.src('./node_modules/angular/angular.min.js')
    .pipe(gulp.dest('./dist/static/scripts/angular'));
  gulp.src('./node_modules/angular-ui-router/release/angular-ui-router.min.js')
    .pipe(gulp.dest('./dist/static/scripts/angular-ui-router'));
  gulp.src('./node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('./dist/static/css'));
  gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./dist/static/fonts'));
});