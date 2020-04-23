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
        // display
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/display/index.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/display/xs.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/display/ms.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/display/md.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/display/lg.css"))
        ))
        // margin
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/margin/index.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/margin/xs.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/margin/ms.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/margin/md.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/margin/lg.css"))
        ))
        // padding
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/padding/index.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/padding/xs.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/padding/ms.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/padding/md.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/padding/lg.css"))
        ))
        // font
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/font/index.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/font/xs.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/font/ms.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/font/md.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/font/lg.css"))
        ))
        // overflow
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/overflow/index.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/overflow/xs.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/overflow/ms.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/overflow/md.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/overflow/lg.css"))
        ))
        // round
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/round/index.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/round/xs.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/round/ms.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/round/md.css"))
        ))
        .pipe(insert.prepend(
            fs.readFileSync(getFilePath("src/round/lg.css"))
        ))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
        }))
        .pipe(css())
        .pipe(dest("./dist"));
    done();
});