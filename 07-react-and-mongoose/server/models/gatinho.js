const mongoose = require('mongoose');

const gatinhoSchema = new mongoose.Schema({
    nome: String,
    data: { type: Date, default: Date.now }
});

export default mongoose.model('Gatinho', gatinhoSchema);
