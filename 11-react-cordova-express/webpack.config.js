const webpack = require("webpack");
const html = require("html-webpack-plugin");

var config = {
    entry: __dirname + "/main",
    output: { filename: "pacote.js" },
    resolve: { extensions: [".js", ".jsx"] },
    module: {
        loaders: [
            { test: /\.jsx?$/, use: "babel-loader" }
        ]
    }
};

// Produção --------------------------------------------------------------------

if (process.env.NODE_ENV == "production") {
    console.log("### PROD");

    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
        new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ];

}

// Desenvolvimento -------------------------------------------------------------

else if (process.env.NODE_ENV == "development") {
    console.log("### DEV");

    config.plugins = [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ];
}

// Web -------------------------------------------------------------------------

if (process.env.PLATAFORMA == "web") {
    console.log("### WEB");

    config.plugins.push(new html);
}

// Android ---------------------------------------------------------------------

else if (process.env.PLATAFORMA == "android") {
    console.log("### ANDROID");

    config.output.path = __dirname + "/cordova/www/js";
}

module.exports = config;
