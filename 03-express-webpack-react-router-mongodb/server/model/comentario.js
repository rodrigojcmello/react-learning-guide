var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teste_db');

const comentarioSchema = new mongoose.Schema({
    autor: { type: 'String', required: true },
    idade: { type: 'String', required: true },
    texto: { type: 'String', required: true },
    dataCriacao: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Comentario', comentarioSchema);
