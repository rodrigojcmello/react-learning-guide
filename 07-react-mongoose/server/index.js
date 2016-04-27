// Express ---------------------------------------------------------------------

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Mongo -----------------------------------------------------------------------

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

const tarefa = require('./models/tarefa');

// Webpack ---------------------------------------------------------------------

import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

// -----------------------------------------------------------------------------

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});
io.on('connection', function(socket) {
    console.log('conectado.');
});
http.listen(3000, function() {
    console.log('listening on *:3000');
});
