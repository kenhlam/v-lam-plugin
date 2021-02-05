const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    entry: './src/plugin/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'file'),
        library: 'v-lam-plugin', // library指定的就是你使用require时的模块名，这里便是require("v-lam-plugin")
        libraryTarget: 'umd', //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
        umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
    },
    plugins: [
        new VueLoaderPlugin(),
       
        new BundleAnalyzerPlugin({
            analyzerPort: "auto"
        }),
    ],
    module: {
        rules: [

            { test: /\.less$/, use: ["style-loader", 'css-loader', 'less-loader'] },

            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        hotReload: true
                    }
                    // other vue-loader options go here
                }
            },
            // {
            //     test: /\.less$/i,
            //     loader: "less-loader", // 将 Less 文件编译为 CSS 文件
            // },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
};