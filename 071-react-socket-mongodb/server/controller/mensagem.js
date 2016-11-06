const mongoose = require('mongoose');
const Mensagem = require('../model/mensagem');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('conectado ao banco');
});
