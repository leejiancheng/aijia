"use strict";

const path = require("path");
const webapck = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./config");

const resolve = (dir) => {
	return path.join(__dirname, dir);
};

module.exports = {
	entry: {
		index: "./src/js/index",
		list: "./src/js/list",
		sign: "./src/js/sign",
		person: "./src/js/person"
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "static/js/[name].js",
		publicPath: "/"
	},
	resolve: {
		extensions: [".js", ".json"],
		alias: {
			"vue$": "vue/dist/vue.esm.js",
			"@": resolve("src"),
			"data": resolve("data")
		}
	},
	devServer: {
		contentBase: path.join(__dirname, "./dist"),
		host: "localhost",
		port: 8080,
		inline: true,
		hot: false,
		compress: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: "pre",
				include: resolve("src/js"),
				exclude: resolve("src/js/3rd"),
				use: [
					{
						loader: "eslint-loader",
						options: {
							formatter: require("eslint-friendly-formatter"),
							emitWarning: true
						}
					}
				]
			},
			{
				test: /\.js$/,
				include: resolve("src/js"),
				exclude: resolve("src/js/3rd"),
				use: "babel-loader"
			}
		]
	},
	plugins: [
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
			chunks: ["sign"]
		}),
		new HtmlWebpackPlugin({
			title: "注册",
			filename: "register.html",
			template: "./src/html/register.html",
			inject: true,
			chunks: ["sign"]
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
	]
}