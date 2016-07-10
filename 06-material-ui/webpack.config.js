const webpack = require("webpack");

module.exports = {
    entry: "./App.jsx",
    output: { filename: 'bundle.js' },
    module: {
        loaders: [
            {test: /.jsx$/, loader: "babel", exclude: /node_modules/ }
        ]
    }
};
