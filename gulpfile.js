var gulp = require('gulp');
var browserify = require('browserify');
var riotify = require('riotify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');


gulp.task('bfy', function(){
    var b = browserify('./app.js');
    var s = b.transform(riotify).bundle();
    s.pipe(source('app.js'))
     .pipe(rename('app.bundle.js'))
     .pipe(gulp.dest('./'));
});


