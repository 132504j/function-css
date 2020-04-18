const { task, src, dest } = require("gulp");
const css = require("gulp-css");
const insert = require("gulp-insert");
const fs = require("fs");
const autoprefixer = require("gulp-autoprefixer");

/**
 * 获取文件路径
 * @param {String} path 基于当前文件的相对路径，例如src/dispaly.css
 */
const getFilePath = function (path) {
    return __dirname + "/" + path;
}


// 打包
task("build", function (done) {
    src("./src/index.css")
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/display.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/overflow.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/padding.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/margin.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/fontSize.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/fontWeight.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/round.css"))
        ))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
        }))
        .pipe(css())
        .pipe(dest("./dist"));
    done();
});