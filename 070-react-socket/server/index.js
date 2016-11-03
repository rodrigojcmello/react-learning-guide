// Express ---------------------------------------------------------------------

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Webpack ---------------------------------------------------------------------

const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);

// -----------------------------------------------------------------------------

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});
io.on('connection', function(socket) {
    console.log('novo usuário online.');
    io.emit('chat message', 'conectado');
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});
http.listen(3000, function() {
    console.log('listening on *:3000');
});
