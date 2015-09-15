var gulp = require('gulp');
var browserify = require('browserify');
var riotify = require('riotify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');


var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
// var mqpacker = require('css-mqpacker');
// var csswring = require('csswring');

gulp.task('bfy', function(){
    var b = browserify('./app.js');
    var s = b.transform(riotify).bundle();
    s.pipe(source('app.js'))
     .pipe(rename('app.bundle.js'))
     .pipe(gulp.dest('./'));
});



gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
    ];
    return gulp.src('./*.css')
        .pipe(postcss(processors))
        .pipe(rename('app.bundle.css'))
        .pipe(gulp.dest('./'));
});

var watch = require('gulp-watch');


gulp.task('watch', function () {
    watch(['app.js','tags/*.tag'], function() {
        gulp.start('bfy');
    })
});
