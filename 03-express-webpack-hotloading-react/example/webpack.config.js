var webpack = require('webpack');
var html = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        __dirname + '/main.jsx'
    ],
    output: { path: __dirname + '/dist', filename: 'bundle.js' },
    plugins: [
        new html({ template: 'index.html' }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
};
