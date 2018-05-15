"use strict";

const path = require("path");
const utils = require("./utils");
const webpack = require("webpack");
const config = require("../config");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const env = process.env.NODE_ENV === "testing"
    ? require("../config/test.env")
    : require("../config/prod.env");

const webpackConfig = merge(baseWebpackConfig, {
    devtool: config.build.productionSourceMap ? config.build.devtool : false,

    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath("js/[name].js"),
        chunkFilename: utils.assetsPath("js/[id].js")
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": env
        }),

        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            },
            sourceMap: config.build.productionSourceMap,
            parallel: true
        }),

        // new ExtractTextPlugin({
        //     filename: utils.assetsPath("css/[name].css"),
        //     allChunks: true,
        // }),

        // new OptimizeCSSPlugin({
        //     cssProcessorOptions: config.build.productionSourceMap
        //         ? { safe: true, map: { inline: false } }
        //         : { safe: true }
        // }),


        // new HtmlWebpackPlugin({
        //     filename: process.env.NODE_ENV === "testing"
        //         ? "index.html"
        //         : config.build.index,
        //     template: "index.html",
        //     inject: true,
        //     minify: {
        //         removeComments: true,
        //         collapseWhitespace: true,
        //         removeAttributeQuotes: true
        //     },
        //     chunksSortMode: "dependency"
        // }),

        new HtmlWebpackPlugin({
            title: "首页",
            filename: "index.html",
            template: "./src/html/index.html",
            inject: true,
            chunks: ["index", "app", "vendor", "manifest"]
        }),
        new HtmlWebpackPlugin({
            title: "登录",
            filename: "login.html",
            template: "./src/html/login.html",
            inject: true,
            chunks: ["login", "app", "vendor", "manifest"]
        }),
        new HtmlWebpackPlugin({
            title: "注册",
            filename: "register.html",
            template: "./src/html/register.html",
            inject: true,
            chunks: ["register", "app", "vendor", "manifest"]
        }),
        new HtmlWebpackPlugin({
            title: "个人中心",
            filename: "person.html",
            template: "./src/html/person.html",
            inject: true,
            chunks: ["person", "app", "vendor", "manifest"]
        }),
        new HtmlWebpackPlugin({
            title: "列表",
            filename: "list.html",
            template: "./src/html/list.html",
            inject: true,
            chunks: ["list", "app", "vendor", "manifest"]
        }),
        new HtmlWebpackPlugin({
            title: "房源详情",
            filename: "detail.html",
            template: "./src/html/detail.html",
            inject: true,
            chunks: ["detail", "app", "vendor", "manifest"]
        }),


        new webpack.HashedModuleIdsPlugin(),

        new webpack.optimize.ModuleConcatenationPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks (module) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, "../node_modules")
                    ) === 0
                )
            }
        }),


        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),


        new webpack.optimize.CommonsChunkPlugin({
            name: "app",
            async: "vendor-async",
            children: true,
            minChunks: 3
        }),



        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, "../static"),
        //         to: config.build.assetsSubDirectory,
        //         ignore: [".*"]
        //     }
        // ])

    ],
    // optimization: {
    //     runtimeChunk: {
    //         name: "manifest"
    //     },
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: "vendor",
    //                 chunks: "all"
    //             }
    //         }
    //     }
    // }
});

if (config.build.productionGzip) {
    const CompressionWebpackPlugin = require("compression-webpack-plugin");

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: new RegExp(
                "\\.(" +
                config.build.productionGzipExtensions.join("|") +
                ")$"
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )   
}

if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig