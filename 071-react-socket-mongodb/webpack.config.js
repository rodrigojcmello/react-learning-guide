var webpack = require('webpack');
var html = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        __dirname + '/components/BatePapo/index.jsx'
    ],
    output: { path: __dirname + '/dist', filename: 'pacote.js' },
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
            { test: /.jsx$/, loader: 'babel', exclude: /node_modules/ },
            { test: /.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
