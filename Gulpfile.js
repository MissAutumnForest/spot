var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
		rename = require('gulp-rename'),
    sass   = require('gulp-sass');

var paths = {
    javascripts: [
        'assets/javascripts/vendor/angular/angular.js',
        'assets/javascripts/vendor/angular/modules/**/*.js',

        'assets/javascripts/app.js',
        'assets/javascripts/services/**/*.js',
        'assets/javascripts/controllers/**/*.js',
        'assets/javascripts/directives/**/*.js'
    ],
    styles: ['assets/styles/**/*.scss'],
    images: ['assets/images/**/*'],
		fonts: ['assets/fonts/**/*.*'],
    templates: ['assets/templates/**/*'],
    copy: [
      'assets/app.html',
      'assets/favicon.ico',
      'assets/robots.txt'
    ]
};

gulp.task('javascripts', function () {
    return gulp.src(paths.javascripts)
               .pipe(concat('app.min.js'))
               // Not minifying for dev purposes right now
               //.pipe(uglify())
               .pipe(gulp.dest('./.tmp/'));
});

gulp.task('styles', function () {
  return gulp.src('assets/styles/app.scss')
             .pipe(sass({
               outputStyle: 'compressed',
               precision: 10,
               onError: console.error.bind(console, 'Sass error:')
             }))
						 .pipe(rename('app.css'))
             .pipe(gulp.dest('./.tmp/'));
});

gulp.task('images', function () {
  return gulp.src(paths.images)
             .pipe(gulp.dest('./.tmp/images/'))
});

gulp.task('fonts', function () {
	return gulp.src(paths.fonts)
						 .pipe(gulp.dest('./.tmp/fonts/'))
});

gulp.task('templates', function () {
  return gulp.src(paths.templates)
             .pipe(gulp.dest('./.tmp/templates/'))
});

gulp.task('copy', function () {
  return gulp.src(paths.copy)
             .pipe(gulp.dest('./.tmp/'));
});

gulp.task('watch', function () {
    gulp.watch(paths.javascripts, ['javascripts']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.images, ['images']);
		gulp.watch(paths.fonts, ['fonts']);
    gulp.watch(paths.templates, ['templates']);
    gulp.watch(paths.copy, ['copy']);
});

gulp.task('default', ['watch', 'javascripts', 'styles', 'images', 'fonts', 'templates', 'copy']);
gulp.task('compile', ['javascripts', 'styles', 'images', 'templates', 'copy']);
