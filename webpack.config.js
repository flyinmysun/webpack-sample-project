/**
 * Created by Administrator on 2017/8/13.
 */

module.exports = {
    entry: __dirname + "/app/main.js", // 唯一入口文件      __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    output: {
        path: __dirname+ "/public", // 打包后的文件存放的地方
        filename: "bundle.js" // 打包后输出文件的文件名
    }
}
