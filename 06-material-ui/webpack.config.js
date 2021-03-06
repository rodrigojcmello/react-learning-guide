const webpack = require('webpack');

module.exports = {
    entry: './App.jsx',
    output: { filename: 'bundle.js' },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /.jsx$/, loader: 'babel', exclude: /node_modules/ }
        ]
    }
};
