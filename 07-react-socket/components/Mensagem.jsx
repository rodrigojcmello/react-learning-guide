import React, { Component } from 'react';

export default class Mensagem extends Component {
    render() {
        let lista;
        if (this.props.data === 'conectado') {
            lista = <li>novo usuário conectado.</li>;
        } else {
            lista = <li><strong>{this.props.data.usuario}: </strong>{this.props.data.mensagem}</li>;
        }
        return lista;
    }
}
