'use strict';

const webpack = require('webpack');                         // webpack
const path = require('path');                               // path
const CopyWebpackPlugin = require('copy-webpack-plugin');   // 复制文件和目录
const HtmlWebpackPlugin = require('html-webpack-plugin');   // 快速生成html

const root_path = path.resolve(__dirname);
const app_path = path.resolve(root_path, 'app/entry.js');
const build_path = path.resolve(root_path, 'dist/');

module.exports = {
    entry: {
        index: [app_path]
    },
    output: {
        path: build_path,
        filename: "bundle.js"
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: root_path + '/app/index.html',
                to: root_path + '/dist/'
            },
        ]),
        // 开发环境的模块热替换
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: root_path + '/dist/index.html',
            template: root_path + '/app/index.html',
            inject: 'body',
            hash: true
            //favicon: path.resolve('./', './src/favicon.ico')
        })

    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?sourceMap!",
                include: ['node build/dev-server.js']
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /.css$/,
                loader: 'style-loader!css-loader'
            },

            // 图片转化，小于8K自动转化为base64的编码
            {
                test:  /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 8192
                }
            },

            // {
            //     test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            //     loader: 'file-loader'
            // },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'style-loader!css-loader!sass-loader'
                    }
                }
            }
        ]
    },
    resolve: {
        // require时省略的扩展名，如：require('app') 不需要app.js
        extensions: ['.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            vueView: path.resolve(root_path, 'app/view'),
            styleScss: path.resolve(root_path, 'app/style'),
            // 运行时构建不包含模板编译器，因此不支持 template 选项，只能用 render 选项，但即使使用运行时构建，在单文件组件中也依然
            // 可以写模板，因为单文件组件的模板会在构建时预编译为 render 函数。
            'vue': 'vue/dist/vue.js'
        }
    }
};