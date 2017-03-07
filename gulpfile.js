var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var browserify = require('gulp-browserify'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename');

// Static Server + watching scss/html files
gulp.task('serve', ['css'], function() {

    browserSync.init({
        open: 'external',
        host: 'muhammed.local',
        proxy: 'muhammed.local/shamsify'
    });

    gulp.watch("css/*.css", ['css']);
    gulp.watch("js/*.js", ['js']);
    //gulp.watch("*.html").on('change', browserSync.reload);
    //gulp.watch("*.php").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('css', function() {
    return gulp.src("css/*.css")
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp.src('js/*js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['serve']);