module.exports = {
    entry: "./OlaMundo",
    output: {
        filename: "pacote.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        loaders: [
            { test: /\.jsx$/, use: "babel-loader" }
        ]
    }
};
