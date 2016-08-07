// Node ------------------------------------------------------------------------

var path = require('path');

// Express ---------------------------------------------------------------------

const express = require('express');
const app = express();

// Webpack ---------------------------------------------------------------------

const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);

// React -----------------------------------------------------------------------

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
const routes = require('./routes.jsx');

// -----------------------------------------------------------------------------

app.use(webpackMiddleware(compiler));

function renderPage(appHtml) {
    return `
        <!doctype html public="storage">
        <html>
        <meta charset=utf-8/>
        <title>React</title>
        <link rel=stylesheet href=/index.css>
        <div id=app>${appHtml}</div>
        <script src="dist/bundle.js"></script>
    `;
}

app.get('*', (req, res) => {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        if(err) {
            res.status(500).send(err.message);
        } else if(redirect) {
            res.redirect(redirect.pathname + redirect.search);
        } else if(props) {
            const appHtml = renderToString(<RouterContext {...props}/>);
            res.send(renderPage(appHtml));
        } else {
            res.status(404).send('Página não existente!');
        }
    });
});

var PORT = 3000;
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT);
});
