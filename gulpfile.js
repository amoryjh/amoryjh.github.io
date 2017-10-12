'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    browser = require('browser-sync').create();

gulp.task('browser-sync', ['styles'], function () {
    browser.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('styles', function () {
    return gulp.src('./assets/scss/app.scss')
        .pipe(plumber(function (error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sass({ includePaths: ['node_modules/foundation-sites/scss'] }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleancss({ compatibility: 'ie11' }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('./css/'))
        .pipe(browser.reload({ stream: true }));
});

gulp.task('fonts', function () {
    var files = [
        './assets/fonts/*.*'
    ];

    return gulp.src(files)
        .pipe(gulp.dest('./fonts/dist'));
});

gulp.task('default', function () {
    gulp.start('styles', 'fonts');
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('./assets/scss/*.scss', ['styles']);
    gulp.watch("*.html").on('change', browser.reload);
});
