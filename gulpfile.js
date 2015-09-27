// load in gulp tasks
var gulp 		= require('gulp');
var sass 		= require('gulp-sass');

// Gulp Sass Task
gulp.task('sass', function() {
	
	// Find the criminal sass files	(sass police)
	gulp.src('_/components/sass/*.{sass,scss}')

	// run the sass tasks 
	.pipe(sass())

	// output the sass into the css file
	.pipe(gulp.dest('_/css'))

})//sass task

gulp.task('watch', function() {
	
	// neighbourhood watch
	gulp.watch('_/components/sass/*.{sass,scss}', ['sass']);
}); // sass task

gulp.task('default', ['sass', 'watch']);
