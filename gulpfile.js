//Bring in some dependencies
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');


var paths = {
  scripts: './assets/js/*',
  images: './assets/images/**/*',
  styles: './assets/scss/*.scss'
};

 
gulp.task('scripts', function() {
  return gulp.src([
    './assets/js/main.js'
    ])
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(concat('all.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('build/js'));
});


gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 3}))
    .pipe(gulp.dest('build/img'));
});


// Convert Sass => css
gulp.task('sass', function() {
  return gulp.src(paths.styles)
    // Pass in options to the task 
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'));
});


gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.styles, ['sass']);
});
 

gulp.task('default', ['watch', 'scripts', 'images','sass']);

