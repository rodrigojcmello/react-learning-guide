const mongoose = require('mongoose');

const mensagemSchema = new mongoose.Schema({
    nome: String,
    mensagem: String,
    data: { type: Date, default: Date.now }
});

export default mongoose.model('Mensagem', mensagemSchema);
