"use strict";

const path = require("path");
const utils = require("./utils");
const config = require("../config");

const resolve = (dir) => {
    return path.join(__dirname, "..", dir);
};

const createLintingRule = () => ({
    test: /\.js$/,
    enforce: "pre",
    include: resolve("src/js"),
    exclude: resolve("src/js/3rd"),
    use: [{
        loader: "eslint-loader",
        options: {
            formatter: require("eslint-friendly-formatter"),
            emitWarning: !config.dev.showEslintErrorsInOverlay
        }
    }]
});

module.exports = {
    context: path.resolve(__dirname, "../"),
    entry: {
        index: "./src/js/index",
        list: "./src/js/list",
        login: "./src/js/login",
        register: "./src/js/register",
        detail: "./src/js/detail",
        person: "./src/js/person"
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
            "vue$": "vue/dist/vue.esm.js",
            "@": resolve("src"),
            "data": resolve("data")
        }
    },
    module: {
        rules: [
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.js$/,
                include: resolve("src/js"),
                exclude: resolve("src/js/3rd"),
                use: "babel-loader"
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