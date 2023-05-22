const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require("gulp-plumber");

function css(done){
    src('src/scss/**/*.scss') //identificar el archivo de sass
        .pipe(plumber())
        .pipe(sass())  //compilarlo
        .pipe(dest("build/css")) //almacenarla en el disco duro

    done(); // callback que avisa a gulp que se llego al final
}

function dev(done){
    watch('src/scss/**/*.scss', css)
}

exports.css = css;
exports.dev = dev;