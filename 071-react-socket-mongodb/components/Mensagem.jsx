import React, { Component } from 'react';

export default class Mensagem extends Component {
    render() {
        return <li><strong>{this.props.data.usuario}: </strong>{this.props.data.texto}</li>;
    }
}
