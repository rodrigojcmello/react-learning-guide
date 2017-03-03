const webpack = require("webpack");
const html = require("html-webpack-plugin");

var config = {
    entry: __dirname + "/index",
    output: { filename: "pacote.js" },
    resolve: { extensions: [".js", ".jsx"] },
    module: {
        loaders: [
            { test: /\.jsx?$/, use: "babel-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    }
};

// Web -------------------------------------------------------------------------

if (process.env.PLATAFORMA == "web") {
    config.plugins = [ new html ];
}

// Mobile ----------------------------------------------------------------------

if (process.env.PLATAFORMA == "mobile") {
    config.output.path = __dirname + "/cordova/www/js";
}

module.exports = config;
