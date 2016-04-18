var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client.jsx',
    output: { path: __dirname + '/dist', filename: 'bundle.js' },
    plugins: [
        new htmlWebpackPlugin({ template: 'index.html' }),
    ],
    module: {
        loaders: [{
            test: /.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
};
