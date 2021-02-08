const gulp = require("gulp");
const minify = require("gulp-uglify");

function optimize(){
    return gulp.src("*.js")
        .pipe(minify())
        .pipe(gulp.dest("js"));
}

exports.optimize = optimize;