// Utilities
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-jsmin');

// Gulp
var gulp = require('gulp');

// Gulp Plugins
var sass = require('gulp-sass');
var rename = require('gulp-rename');

// Path Config
var configPath = {
	inputCSS: 'src/*.scss',
	outputCSS: 'dist/css/'
}

gulp.task('createCSS', function () {
   // Find main `.css` file from the `src/` folder
   return gulp.src(configPath.inputCSS)
		// Run Sass on those files
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer({
			browser: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(configPath.outputCSS))

		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		// Write the resulting CSS in the output folder
		.pipe(gulp.dest(configPath.outputCSS))
});
