'use strict';

var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    plumber      = require('gulp-plumber'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss     = require('gulp-clean-css'),
    jshint       = require('gulp-jshint'),
    stylish      = require('jshint-stylish'),
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    rename       = require('gulp-rename'),
    browser      = require('browser-sync').create();

gulp.task('browser-sync', ['styles'], function () {
    browser.init({
        server:{
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
        .pipe(sass({ includePaths : ['node_modules/foundation-sites/scss']}))
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 5 versions', 'ie >= 9', 'Firefox ESR'],
            cascade : false
        }))
        .pipe(gulp.dest('./css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cleancss({compatibility: 'ie9'}))
        .pipe(gulp.dest('./css/'))
        .pipe(browser.reload({stream:true}));
});

gulp.task('fonts', function () {
    var files = [
        './assets/fonts/*.*'
    ];

    return gulp.src(files)
        .pipe(gulp.dest('./fonts/dist'));
});

// gulp.task('scripts', function () {
//     var files = ['./assets/js/*.js'];

//     return gulp.src(files)
//         .pipe(plumber())
//         .pipe(jshint())
//         .pipe(jshint.reporter('jshint-stylish'))
//         .pipe(concat('scripts.js'))
//         .pipe(gulp.dest('./js/dist'))
//         .pipe(rename({suffix: '.min'}))
//         .pipe(uglify())
//         .pipe(gulp.dest('./js/dist'))
//         .pipe(browser.reload({stream:true}));

// });

gulp.task('default', function () {
    gulp.start('styles', 'fonts');
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('./assets/scss/*.scss', ['styles']);
    // gulp.watch('./assets/js/*.js', ['scripts']);
    gulp.watch("*.html").on('change', browser.reload);
});
