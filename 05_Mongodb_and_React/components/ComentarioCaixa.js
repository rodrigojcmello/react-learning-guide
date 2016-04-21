import React, { Component, PropTypes } from 'react';
import ComentarioLista from './ComentarioLista';
import ComentarioFormulario from './ComentarioFormulario';

var mongoose = require('mongoose');
import comentario from '../server/model/comentario.js';

export default class ComentarioCaixa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: db.comentario.find()
        };
    }
    render() { return (
        <div className="comentarioCaixa">
            <h1>Comentário</h1>
            <ComentarioLista data={this.state.data} />
            <ComentarioFormulario />
        </div>
    ); }
}
