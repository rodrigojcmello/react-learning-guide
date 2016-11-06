// EXPRESS #####################################################################

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// WEBPACK #####################################################################

const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);

// MONGODB #####################################################################

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

var kittySchema = mongoose.Schema({
    name: String
});
var Kitten = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({ name: 'Silence' });

db.once('open', function() {
    io.on('connection', function(socket) {
        io.emit('servidor mongo', 'conectado ao banco 22222');
    });
});
db.on('error', console.error.bind(console, 'connection error:'));

// #############################################################################

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});
io.on('connection', function(socket) {
    socket.on('cliente mensagem', function(msg) {
        socket.join(msg[0].sala);
        io.to(msg[0].sala).emit('servidor mensagem', msg);
    });
});
http.listen(3000, function() {
    console.log('escutando http://localhost:3000');
});
