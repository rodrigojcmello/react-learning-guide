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

var mensagemSchema = mongoose.Schema({
    usuario: String,
    texto: String,
    sala: String
});

var Mensagem = mongoose.model('Mensagem', mensagemSchema);

// Recebe a sala, encontra e envia as mensagens --------------------------------

io.on('connection', function(socket) {
    socket.on('sala', function(sala) {
        Mensagem.find({ sala: sala }, function (erro, mensagens) {
            io.emit('mensagens', mensagens);
        });
    });
});

// Recebe, armazena e dispara as mensagens -------------------------------------

io.on('connection', function(socket) {
    socket.on('mensagem', function(msg) {
        var mensagem = new Mensagem(msg);
        mensagem.save();

        socket.join(msg.sala);
        io.to(msg.sala).emit('mensagem', msg);
    });
});

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
