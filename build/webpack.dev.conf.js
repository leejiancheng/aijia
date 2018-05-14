"use strict";

const utils = require("./utils");
const webpack = require("webpack");
const config = require("../config");
const merge = require("webpack-merge");
const path = require("path");
const baseWebpackConfig = require("./webpack.base.conf");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const portfinder = require("portfinder");

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
	devtool: config.dev.devtool,
	devServer: {
		clientLogLevel: "warning",
		historyApiFallback: {
			rewrites: [
				{
					from: /.*/,
					to: path.posix.join(config.dev.assetsPublicPath, "index.html")
				}
			]
		},
		hot: true,
		contentBase: path.join(__dirname, "../dist"),
		compress: true,
		host: HOST || config.dev.host,
		port: PORT || config.dev.port,
		open: config.dev.autoOpenBrowser,
		overlay: config.dev.errorOverlay
				? {warnings: false, errors: true}
				: false,
		publicPath: config.dev.assetsPublicPath,
		proxy: config.dev.proxyTable,
		quiet: true,
		watchOptions: {
			poll: config.dev.poll
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": require("../config/dev.env")
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),

		new HtmlWebpackPlugin({
			title: "首页",
			filename: "index.html",
			template: "./src/html/index.html",
			inject: true,
			chunks: ["index"]
		}),
		new HtmlWebpackPlugin({
			title: "登录",
			filename: "login.html",
			template: "./src/html/login.html",
			inject: true,
			chunks: ["login"]
		}),
		new HtmlWebpackPlugin({
			title: "注册",
			filename: "register.html",
			template: "./src/html/register.html",
			inject: true,
			chunks: ["register"]
		}),
		new HtmlWebpackPlugin({
			title: "个人中心",
			filename: "person.html",
			template: "./src/html/person.html",
			inject: true,
			chunks: ["person"]
		}),
		new HtmlWebpackPlugin({
			title: "列表",
			filename: "list.html",
			template: "./src/html/list.html",
			inject: true,
			chunks: ["list"]
		}),
		new HtmlWebpackPlugin({
            title: "房源详情",
            filename: "detail.html",
            template: "./src/html/detail.html",
            inject: true,
            chunks: ["detail"]
        })

		// new CopyWebpackPlugin([
		//     {
		//         from: path.resolve(__dirname, "../static"),
		//         to: config.dev.assetsSubDirectory,
		//         ignore: [".*"]
		//     }
		// ])
	]
});



module.exports = new Promise((resolve, reject) => {
	portfinder.basePort = process.env.PORT || config.dev.port;
	portfinder.getPort((err, port) => {
		if (err) {
			reject(err);
		} else {
			process.env.PORT = port;

			devWebpackConfig.devServer.port = port;

			devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
				compilationSuccessInfo: {
					messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`]
				},
				onErrors: config.dev.notifyOnErrors
					? utils.createNotifierCallback()
					: undefined
			}));

			resolve(devWebpackConfig);
		}
	})
})