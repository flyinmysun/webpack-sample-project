/**
 * Created by Administrator on 2017/8/13.
 */

module.exports = {
    entry: __dirname + "/app/main.js", // 唯一入口文件      __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    output: {
        path: __dirname+ "/public", // 打包后的文件存放的地方
        filename: "bundle.js" // 打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        port:"3000",
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,   //针对于jsx和js结尾的文件
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react","stage-0"
                        ],
                        "plugins": ["transform-runtime"],
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,    //配置css
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            },

        ]
    }

}
