
const path = require("path");

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? process.env.VUE_APP_PATH : "/",
    outputDir: "dist",
    assetsDir: "public",
    indexPath: "index.html",
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "./src"),
                
            }
        }
    },
    chainWebpack: config => {
        config.plugins.delete("prefetch-index");
        config.plugins.delete("preload-index");
        // config.module.rule('images')
        // .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        // .use('image-webpack-loader')
        // .loader('image-webpack-loader')
        // .options({ bypassOnDebug: true })
        // if (process.env.use_analyzer || process.env.NODE_ENV === "production") {
        //     config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);
        // }
    },

    pages: {
        index: {
            entry: "src/main.js",
            template: "public/index.html",
            filename: "index.html",
            title: "插件开发", // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
            chunks: ["chunk-vendors", "chunk-common", "index"] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
        }
    },
    lintOnSave: false, // 是否在保存的时候检查
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    runtimeCompiler: false, //是否开启构建版本 开启增加 10KB左右
    css: {
        extract: false, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: process.env.NODE_ENV === "production" ? false : true, // 开启 CSS source maps
        requireModuleExtension: true,
        loaderOptions: {}
    },
    transpileDependencies: [],
    devServer: {
        // 环境配置
        contentBase: path.join(__dirname, "dist"),
        port: 8888,
        https: false,
        hotOnly: false,
        open: true, //配置自动启动浏览器
        compress: false, //启用gzip压缩
        proxy: {
            "/api": {
                target: "http://cdkx.shetuan365.cn/",
                changeOrigin: true, // 是否改变域名
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            "/data": {
                target: "http://cdkx.shetuan365.cn/",
                // target: "http://szst.suzhou.gov.cn/",
                changeOrigin: true, // 是否改变域名
                ws: true

            },
            "/attachment": {
                target: "http://cdkx.shetuan365.cn/",
                // target: "http://szst.suzhou.gov.cn/",
                changeOrigin: true, // 是否改变域名
                ws: true

            },
            "/static/verifyCodeServlet": {
                target: "http://cdkx.shetuan365.cn/",
                // target: "http://szst.suzhou.gov.cn/",
                changeOrigin: true, // 是否改变域名
                ws: true

            }



        }
    },
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    pluginOptions: {}
};