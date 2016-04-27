const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
    id: { type: String, unique: true, index: true },
    usuario:  String,
    titulo: String,
    data: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Tarefa', tarefaSchema);
