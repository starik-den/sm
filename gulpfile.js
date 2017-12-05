var gulp = require('gulp'),
    less = require('gulp-less'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglifyjs = require('gulp-uglifyjs'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps');


/* Компилируем style.less в css с сжатием */
gulp.task('less', function () {
    return gulp.src('startup-package/css/style.less')
        .pipe(sourcemaps.init())/*закомментировать если не нужен sourcemaps*/
        .pipe(less())
        .pipe(autoprefixer(['last 5 versions', '>1%', 'ie 9']))
        .pipe(cssnano())
        // .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())/*закомментировать если не нужен sourcemaps*/
        .pipe(gulp.dest('startup-package/css/'))
        .pipe(browserSync.reload({stream: true}));
});


/* Собираем все JS библиотеки в один файл */
gulp.task('libsjs', function () {
    return gulp.src([
        // 'src/libs/jquery/dist/jquery.min.js',
        // 'src/libs/jquery-ui/jquery-ui.min.js',
        // 'src/libs/jquery-ui/datepicker-ru.min.js',
        'src/libs/slick-1.6.0/slick/slick.min.js',
        // 'src/libs/autosize/autosize.min.js',
        // 'src/libs/owl/owl.carousel.min.js',
        // 'src/libs/transformicon/transformicon.js',
        // 'src/libs/audio/mediaelement-and-player.js',
        // 'src/libs/devise/device.js',
        // 'src/libs/countup/jquery.animateNumber.min.js',
        // 'src/libs/modal/jquery.arcticmodal-0.3.min.js',
        // 'src/libs/scroll/jquery.mCustomScrollbar.min.js',
        // 'src/libs/chart/highcharts.js',
        // 'src/libs/bootstrap-collapse/scripts.js',
        // 'src/libs/mask/jquery.mask.min.js',
        // 'src/libs/colorbox/jquery.colorbox-min.js',
        // 'src/libs/calendar/jquery.calendario.js',
        // 'src/libs/progressbar/scripts.js',
        // 'src/libs/wowjs/wow.js',
        // 'src/libs/ckeditor/ckeditor.js',
        // 'src/libs/tether/tether.min.js',
        // 'src/libs/bootstrap-select/bootstrap-select.min.js',
        // 'src/libs/bootstrap/bootstrap.min.js',
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglifyjs())
        .pipe(gulp.dest('dist/js/'))
});

/* Собираем все CSS библиотеки в один файл */
gulp.task('libscss', function () {
    return gulp.src([
        // 'src/libs/owl/assets/owl.carousel.css',
        // 'src/libs/jquery-ui/jquery-ui.min.css',
        'src/libs/font-awesome/css/font-awesome.min.css',
        // 'src/libs/modal/jquery.arcticmodal-0.3.css',
        // 'src/libs/slick-1.6.0/slick/slick.css',
        // 'src/libs/slick-1.6.0/slick/slick-theme.css',
        // 'src/libs/scroll/jquery.mCustomScrollbar.css',
        // 'src/libs/bootstrap-select/assets/bootstrap-select.min.css',
        // 'src/libs/colorbox/colorbox.css',
        // 'src/libs/audio/mediaelementplayer.min.css',
        // 'src/libs/icomoon/style.css',
        // 'src/libs/wowjs/animate.css',
    ])
        .pipe(concat('libs.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'))
});

/* Собираем все js файлы в один */
gulp.task('scripts', function () {
    return gulp.src([
        'src/scripts.js',
        'src/scriptsP1.js',
        'src/scriptsP2.js',
        'src/main.js',
    ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglifyjs())
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'dist',
            // index: ""
        },
        port: 8080,
        open: true,
        notify: false,
    });
});

gulp.task('watch', [
    'less',
    // 'scripts',
    // 'browser-sync'
], function () {
    gulp.watch('startup-package/**/*.less', ['less']);
    gulp.watch(['src/*.js', 'blocks/*/*.js'], ['scripts']);
    gulp.watch('dist/**/**/*.html', browserSync.reload);
});
