import express from 'express';
const app = express();

import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
import webpackMiddleware from 'webpack-dev-middleware';
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));
app.get('*');
app.listen(3000);
