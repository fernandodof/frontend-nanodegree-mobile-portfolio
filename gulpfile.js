//Dependencies used for building
var gulp = require('gulp');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');

//Paths used by gulp tasks
var paths = {
    index: 'index.html',
    project2048: 'project-2048.html',
    projectMobile: 'project-mobile.html',
    projectWebperf: 'project-webperf.html',
    dist: 'dist/',
    global: {
        html: {
            src: '*.html',
            dist: 'dist/'
        },
        css: {
            src: 'css/*',
            dist: 'dist/css'
        },
        js: {
            src: 'js',
            dist: 'dist/js'
        },
        img: {
            src: 'img/**/*.*',
            dist: 'dist/img/'
        }
    },
    pizza: 'views/pizza.html',
    distViews: 'dist/views',
    views: {
        html: {
            src: 'views/*.html',
            dist: 'dist/views/'
        },
        css: {
            src: 'views/css/*',
            dist: 'dist/views/css/'
        },
        js: {
            src: 'js',
            dist: 'dist/views/js/'
        },
        img: {
            src: 'views/images/**/*.*',
            dist: 'dist/views/images/'
        }
    }
};

//Ports used for running the application
var ports = {
    dev: '7083',
    dist: '8888'
};

//Task used to delete dist folder before building again
gulp.task('clean', function() {
    return del.sync([
        'dist/'
    ]);
});

//Minifying global images
gulp.task('imagemin-global', function() {
    gulp.src(paths.global.img.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.global.img.dist));
});

//Minifying html, css, and js on index.html
gulp.task('usemin-index', function() {
    return gulp.src(paths.index)
        .pipe(usemin({
            inlinecss: [cleanCSS({
                compatibility: 'ie8'
            }), 'concat'],
            html: [htmlmin({
                collapseWhitespace: true
            })],
            js: [uglify(), 'concat'],
            inlinejs: [uglify()],
        }))
        .pipe(gulp.dest(paths.dist));
});

//Minifying html, css, and js on project-2048.html
gulp.task('usemin-project2048', function() {
    return gulp.src(paths.project2048)
        .pipe(usemin({
            inlinecss: [cleanCSS({
                compatibility: 'ie8'
            }), 'concat'],
            html: [htmlmin({
                collapseWhitespace: true
            })],
            js: [uglify(), 'concat'],
            inlinejs: [uglify()],
        }))
        .pipe(gulp.dest(paths.dist));
});

//Minifying html, css, and js on project-mobile.html
gulp.task('usemin-projectMobile', function() {
    return gulp.src(paths.projectMobile)
        .pipe(usemin({
            inlinecss: [cleanCSS({
                compatibility: 'ie8'
            }), 'concat'],
            html: [htmlmin({
                collapseWhitespace: true
            })],
            js: [uglify(), 'concat'],
            inlinejs: [uglify()],
        }))
        .pipe(gulp.dest(paths.dist));
});

//Minifying html, css, and js on project-webperf.html
gulp.task('usemin-projectWebperf', function() {
    return gulp.src(paths.projectWebperf)
        .pipe(usemin({
            inlinecss: [cleanCSS({
                compatibility: 'ie8'
            }), 'concat'],
            html: [htmlmin({
                collapseWhitespace: true
            })],
            js: [uglify(), 'concat'],
            inlinejs: [uglify()],
        }))
        .pipe(gulp.dest(paths.dist));
});

//Minifying images on view page
gulp.task('imagemin-views', function() {
    gulp.src(paths.views.img.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.views.img.dist));
});

//Minifying html, css, and js on pizza.html
gulp.task('usemin-pizza', function() {
    return gulp.src(paths.pizza)
        .pipe(usemin({
            css: [cleanCSS({
                compatibility: 'ie8'
            }), 'concat'],
            html: [htmlmin({
                collapseWhitespace: true
            })],
            js: [uglify(), 'concat'],
            inlinejs: [uglify()],
        }))
        .pipe(gulp.dest(paths.distViews));
});

//Creating server for development testing
gulp.task('run', function() {
    connect.server({
        root: __dirname + '/',
        livereload: true,
        port: ports.dev
    });
});

//Creating server for dist testing
gulp.task('run-dist', function() {
    connect.server({
        root: 'dist',
        livereload: true,
        port: ports.dist
    });
});

//Calling Build Tasks
gulp.task('build', ['clean', 'imagemin-global', 'usemin-index', 'usemin-project2048', 'usemin-projectMobile', 'usemin-projectWebperf', 'imagemin-views', 'usemin-pizza']);
