var webpack = require('webpack');
var html = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        __dirname + '/client.jsx'
    ],
    output: { path: __dirname + '/dist', filename: 'bundle.js' },
    plugins: [
        new html({ template: 'index.html' }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /.jsx?$/, loader: 'babel', exclude: /node_modules/ }
        ]
    }
};
