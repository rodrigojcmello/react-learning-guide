// Express ---------------------------------------------------------------------
const express = require('express');
const app = express();

// Webpack ---------------------------------------------------------------------
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);

// React Router ----------------------------------------------------------------
import { match } from 'react-router';
// const match = require('react-router').match();
const routes = require('./routes.jsx');

// -----------------------------------------------------------------------------
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.get('*', (req, res) => {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        res.sendFile(__dirname + '/dist/index.html');
    });
});
app.listen(3000);
