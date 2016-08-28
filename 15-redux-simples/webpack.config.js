const webpack = require('webpack');

module.exports = {
    entry: './ComponenteBotao',
    output: { filename: 'pacote.js' },
    resolve: { extensions: ['', '.js', '.jsx'] },
    module: {
        loaders: [
            { test: /.jsx$/, loader: 'babel', exclude: /node_modules/ }
        ]
    }
};
