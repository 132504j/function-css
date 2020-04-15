const { task, src, dest } = require("gulp");
const css = require("gulp-css");
const insert = require("gulp-insert");
const fs = require("fs");

/**
 * 获取文件路径
 * @param {String} path 基于当前文件的相对路径，例如src/dispaly.css
 */
const getFilePath = function(path) {
    return __dirname + "/" + path;
}


// 打包
task("build", function(done) {
    src("./src/index.css")
    .pipe(insert.prepend(
        fs.readFileSync(getFilePath("src/display.css"))
    ))
    .pipe(css())
    .pipe(dest("./dist"));
    done();
});