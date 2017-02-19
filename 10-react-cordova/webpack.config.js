module.exports = {
    entry: __dirname + "/main",
    output: {
        path: __dirname + "/cordova/www/js",
        filename: "pacote.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, use: "babel-loader" }
        ]
    }
};
