// Express

import express from 'express';
const app = express();

// Webpack

import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
import webpackMiddleware from 'webpack-dev-middleware';
const compiler = webpack(webpackConfig);

// Configuração do Express

app.use(webpackMiddleware(compiler));
app.get('*');
app.listen(3000);
