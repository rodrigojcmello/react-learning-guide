import webpack from 'webpack';
import html from 'html-webpack-plugin';

module.exports = {
    entry: './main.jsx',
    output: { path: 'dist', filename: 'index_bundle.js' },
    plugins: [new html()],
    module: {
        loaders: [{
            test: /.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
};
