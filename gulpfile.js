var gulp = require("gulp"),
    sass = require("gulp-sass"),
    myth = require('gulp-myth'),
    uglifycss = require('gulp-uglifycss'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    connect = require('gulp-connect');
    html = require('gulp-rename'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    autoprefixer = require('autoprefixer'),
    inject = require('gulp-inject'),
    useref = require('gulp-useref'),
    postcss = require('postcss'),
    htmlmin = require('gulp-htmlmin');
    
// gulp.task('useref', () => {
//     var prefix = [
//         autoprefixer({
//             browsers: 'last 10 version'
//         }),
//     wring
//     ];

//     return gulp.src('app/*.html')
//     .pipe(useref())
//     .pipe(htmlmin({
//         collapseWhitespace: treu
//     }))
//     .pipe(gulfif('script.js',uglify()))
//     .pipe(gulpif('*.css',postcss(prefix)))
//     .pipe(gulp.src('./app/conseil.html'))
//     .pipe(inject(gulf.src(['./dist/css/*.css'])))
//     .pipe(gulp.dest('./dist'))
// })

gulp.task("html", () => {
    return gulp.src('./app/*.html')
    // .pipe(inject(['./dist/css/*.css']))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload())
})

gulp.task("sass", () => {
    return gulp.src("./app/sass/*.scss")
    .pipe(sass().on('error',sass.logError))
    .pipe(myth())
    .pipe(uglifycss())
    .pipe(gulp.dest("./dist/css"))
    .pipe(connect.reload())
});

gulp.task('scripts', () => {
    return gulp.src('./app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload())
});

gulp.task('images', () => {
    return gulp.src('app/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
        .pipe(connect.reload())
});

gulp.task('watch', () => {
    gulp.watch('app/*.html', gulp.series('html'));
    gulp.watch('app/sass/*.scss', gulp.series('sass'));
    gulp.watch('app/js/*.js', gulp.series('scripts'));
    gulp.watch('app/img/*', gulp.series('images'))
   
});

gulp.task('connect', () => {
    connect.server({
      root: 'dist', 
      livereload: true
    });
  });

  gulp.task('default', gulp.parallel('html','sass', 'scripts', 'images', 'watch','connect'));