var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    gulpIf = require('gulp-if'),
    useref = require('gulp-useref'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer');



//scripts
gulp.task('scripts', function() {
    gulp.src(['resume-site/js/**/*.js', '!resume-site/js/**/*.min.js'])
        .pipe(plumber())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('resume-site/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


//sass
gulp.task('sass', function() {
    gulp.src('resume-site/scss/**/*.scss')
        .pipe(sass())
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('resume-site/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

//html
gulp.task('html', function() {
    gulp.src('resume-site/*.html')
        .pipe(browserSync.reload({
            stream: true
        }));
});

//minify
gulp.task('useref', function() {
    return gulp.src('resume-site/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('minified'));
});

//delete
gulp.task('clean:minified', function() {
    return del.sync('minified');
})

//minify images
gulp.task('images', function() {
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('minified/images'));
});


//watch task
gulp.task('watch', function() {
    gulp.watch('resume-site/scss/**/*.scss', ['sass']);
    gulp.watch('resume-site/**/*.html', ['html']);
    gulp.watch('resume-site/js/**/*.js', ['scripts']);
});

//browsersync
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'resume-site'
        },
    });
});

//run sequence
gulp.task('build', function(callback) {
    runSequence('clean:minified', ['scripts', 'sass', 'html', 'useref', 'images'], callback);
});


//default task
gulp.task('default', function(callback) {
    runSequence(['scripts', 'sass', 'html', 'browserSync', 'watch'],
        callback
    );
});
