"use strict";

const path = require("path");
const utils = require("./utils");
const config = require("../config");

const resolve = (dir) => {
	return path.join(__dirname, "..", dir);
};

const createLintingRule = () => ({
	test: /\.js$/,
	loader: "eslint-loader",
	enforce: "pre",
	include: resolve("src/js"),
	exclude: resolve("src/js/3rd"),
	options: {
		formatter: require("eslint-friendly-formatter"),
		emitWarning: !config.dev.showEslintErrorsInOverlay
	}
});


module.exports = {
	context: path.resolve(__dirname, "../"),
	entry: {
		sign: "./src/js/sign.js",
		index: "./src/js/index.js",
		list: "./src/js/list.js",
	},
	output: {
		path: config.build.assetsRoot,
		filename: "[name].js",
		publicPath: process.env.NODE_ENV === "production"
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		extensions: [".js", ".json"],
		alias: {
			"@": resolve("src")
		}
	},
	module: {
		rules: [
			...(config.dev.useEslint ? [createLintingRule()] : []),
			{
				test: /\.js$/,
				loader: "babel-loader",
				include: resolve("src/js"),
				exclude: resolve("src/js/3rd")
			}
		]
	},
	node: {
		setImmediate: false,
		dgram: "empty",
		fs: "empty",
		net: "empty",
		tls: "empty",
		child_process: "empty"
	}
}