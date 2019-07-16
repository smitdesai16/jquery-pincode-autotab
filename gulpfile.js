const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

function css() {
    return src('src/sass/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
    .pipe(cleanCSS())
    .pipe(rename("jquery-pincode-autotab.min.css"))
    .pipe(dest('dist/css'))
}

function js() {
    return src('src/js/*.js')
    .pipe(dest('dist/js'))
    .pipe(uglify())
    .pipe(rename("jquery-pincode-autotab.min.js"))
    .pipe(dest('dist/js'))
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);