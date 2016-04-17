var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'client.js'),
    target: 'node',
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new htmlWebpackPlugin({ template: 'index.html' })
    ],
    node: {
        fs: "empty"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".node"]
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
