const webpack = require('webpack');
const html = require('html-webpack-plugin');

module.exports = {
    entry: './main.jsx',
    output: { path: __dirname + '/dist', filename: 'bundle.js' },
    plugins: [new html({ template: 'index.html' })],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /.jsx$/, loader: 'babel', exclude: /node_modules/ }
        ]
    }
};
