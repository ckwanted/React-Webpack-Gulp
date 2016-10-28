var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src("src/assets/sass/*.scss")
        .pipe(sass({
            outputStyle: 'expanded', // NESTED (DEFAULT), EXPANDED, COMPACT, COMPRESSED
            sourceComments: false
        }))
        .pipe(autoprefixer({
            versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest("src/assets/css"))
});

gulp.task('default', ['sass'], function () {
    gulp.watch("src/assets/sass/**/*.scss", ['sass']);
});