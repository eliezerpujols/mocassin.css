// Utilities
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

// Gulp
var gulp = require('gulp');

// Gulp Plugins
var sass = require('gulp-sass');
var rename = require('gulp-rename');

// Config Folder
var config = {
   fileInput: 'src/*.scss',
   fileOutput: 'dist/'
}

gulp.task('createCSS', function () {
   // Find main `.css` file from the `dist/` folder
   return gulp.src(config.fileInput)
      // Run Sass on those files
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(autoprefixer({
         browser: ['last 2 versions'],
         cascade: false
      }))
      // Write the resulting CSS in the output folder
      .pipe(gulp.dest(config.fileOutput))

      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      // Write the resulting CSS Minify in the output folder
      .pipe(gulp.dest(config.fileOutput))
});
