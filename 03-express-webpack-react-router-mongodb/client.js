import React from 'react';
import { render } from 'react-dom';

// import mongoose from 'mongoose';
// mongoose.connect('mongodb://localhost/teste_db');
// import comentario from './server/model/comentario.js';

import ComentarioCaixa from './components/ComentarioCaixa.js';

render(<ComentarioCaixa/>, document.getElementById('app'));
