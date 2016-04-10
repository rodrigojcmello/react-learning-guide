// Express ---------------------------------------------------------------------

import express from 'express';
const app = express();

// Webpack ---------------------------------------------------------------------

import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const compiler = webpack(webpackConfig);

// React Router ----------------------------------------------------------------

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes.jsx';

// -----------------------------------------------------------------------------

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.get('*', (req, res) => {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        res.sendFile(__dirname + '/dist/index.html');
    });
});
app.listen(3000);
