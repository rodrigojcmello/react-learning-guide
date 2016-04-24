// Express ---------------------------------------------------------------------

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Webpack ---------------------------------------------------------------------

import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const compiler = webpack(webpackConfig);

// -----------------------------------------------------------------------------

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});
io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        console.log(msg);
        io.emit('chat message', msg);
    });
});
http.listen(3000, function() {
    console.log('listening on *:3000');
});
