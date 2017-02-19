const html = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + "/main",
    output: {
        filename: "pacote.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, use: "babel-loader" }
        ]
    },
    plugins: [new html()]
};
