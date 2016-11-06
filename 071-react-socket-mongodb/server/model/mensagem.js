import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const mensagemSchema = new Schema({
    nome: { type: 'String', required: true },
    texto: { type: 'String', required: true },
    data_cricao: { type: 'Date', default: Date.now, required: true }
});

export default mongoose.model('Mensagem', mensagemSchema);
