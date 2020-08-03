var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');

gulp.task('index', function(){
    return gulp.src('src/less/index.less')
            .pipe(less())
            .pipe(autoprefixer({
                overrideBrowserslist: [
                    "ios >= 7",
                    "Android > 4.1",
                    "Firefox > 20",
                    "last 2 versions"
                ],
                cascade: true
            }))
            .pipe(minifyCSS())
            .pipe(gulp.dest('src/css'))
});

gulp.task('form', function(){
    return gulp.src('src/less/form.less')
            .pipe(less())
            .pipe(autoprefixer({
                overrideBrowserslist: [
                    "ios >= 7",
                    "Android > 4.1",
                    "Firefox > 20",
                    "last 2 versions"
                ],
                cascade: true
            }))
            .pipe(minifyCSS())
            .pipe(gulp.dest('src/css'))
});

gulp.task('image', function(){
    return gulp.src('src/images/*.*')
            .pipe(imagemin({progressive: true}))
            .pipe(gulp.dest('src/assets'))
})

gulp.task('css', function(){
    gulp.watch('src/less/index.less', gulp.series('index'))
    gulp.watch('src/less/form.less', gulp.series('form'))
});

gulp.task('default', gulp.parallel('css', 'image'));