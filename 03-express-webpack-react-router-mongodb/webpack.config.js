var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        __dirname + '/client.js'
    ],
    output: { path: __dirname + '/dist', filename: 'bundle.js' },
    plugins: [
        new htmlWebpackPlugin({ template: 'index.html' }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
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
