var webpack = require("webpack");                                               // webpack
var WebpackDevServer = require("webpack-dev-server");                           // webpack-dev-server
var config = require("./webpack.config.js");                                    // webpack的配置

var compiler = webpack(config);

config.entry.index.unshift(                                                      // 开发环境的模块热替换
    "webpack-dev-server/client?http://localhost:8292/",
    "webpack/hot/dev-server"
);

var server = new WebpackDevServer(compiler, {
    contentBase: 'dist/',                                                        // 将运行目录设置为dist目录
    publicPath: '/',                                                             // 和webpack中的设置保持一致
    hot: true,                                                                   // 模块热替换
    historyApiFallback: false,                                                   // 如果用browserHistory方式路由的话要加
    stats: { colors: true },                                                     // 控制台显示彩色
    inline: true
});
server.listen(8292);
