const gulp = require('gulp');
const { watch } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

function serve(done) {
    browserSync.init({
      server: {
        baseDir: './'
      }
    });
    gulp.watch("src/scss/*.scss", style);
    gulp.watch("src/js/*.js").on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);

    done();
  }

exports.style = style;
exports.serve = serve;

// const dev = gulp.series(clean, scripts, serve, watch);
// export default dev;