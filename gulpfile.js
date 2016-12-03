/**
 |---------------------------------
 | Title
 |---------------------------------
 |
 | Description
 |
 | @author Felipe Tadeo
 */

/**
 * Declare glup devDependencies
 */
var
     gulp = require('gulp'),
     sass = require('gulp-sass'),
     autoprefixer = require('gulp-autoprefixer'),
     notify = require('gulp-notify'),
     uglify = require('gulp-uglify'),
     concat = require('gulp-concat');
     cleanCSS = require('gulp-clean-css');

/**
 * Define input/output for sass
 */
var
     jsInput   = ['./dev/js/vendors/**/*.js', './dev/js/services/*.js', './dev/**/*.js', './dev/js/main.js'],
     jsOutput  = './public/js',
     cssInput  = './dev/scss/',
     cssOutput = './public/css';


/**
 * Basic functions to use in the gulp file
 */

gulp.task('sass', function() {

     return gulp

          .src(cssInput + 'app.scss')
          // process sass
          .pipe(sass())
          // add the necessary prefixes
          .pipe(autoprefixer({
               browsers: ['last 2 versions'],
               cascade: false
          }))
          // Minify css
          .pipe(cleanCSS({keepSpecialComments : 0}))
          // output the files
          .pipe(gulp.dest(cssOutput))
          .pipe(notify("Files have been compiled (oh yeah!)."));
});

gulp.task('uglify', function() {
     return gulp

          // Grab files and concat them in the given order into one file called main.js
          .src(jsInput)
          .pipe(concat('main.js'))

          // Uglify uglify main.js and put it in ./js/
          .pipe(uglify())
          .pipe(gulp.dest(jsOutput))
          .pipe(notify("JS Files are now ugly."));
});

gulp.task('watch', function() {

     /**
      * Set listner for SASS
      */
     gulp
          .watch(cssInput + "**", ['sass'])
          .on('change', function(event) {
               console.log("Ran sass.");
          });

     /**
      * Set Listner for uglify js
      */
     gulp
          .watch(['./dev/js/**/*.js'], ['uglify'])
          .on('change', function() {});

     // Return gulp to maintain chainability;
     return gulp;
});
