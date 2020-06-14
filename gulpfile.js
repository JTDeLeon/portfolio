const gulp = require('gulp');
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
      browserSync: {
        baseDir: './'
      }
    });
    done();
  }

exports.style = style;
exports.serve = serve;

// const dev = gulp.series(clean, scripts, serve, watch);
// export default dev;