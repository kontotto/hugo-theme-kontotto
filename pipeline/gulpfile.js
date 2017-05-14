const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const sassfiles = "./scss/**/*.scss";

gulp.task('css', function(){
    gulp.src(sassfiles)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('../static/css'));
});

gulp.task('watch', function(){
    var watcher = gulp.watch(sassfiles, ['css']);
    watcher.on('change', function(event){
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks')
    });
});

gulp.task('build', ['css']);