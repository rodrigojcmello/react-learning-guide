import React, { Component } from 'react';
import Mensagem from './Mensagem.jsx';
import $ from 'jquery';
require('./BatePapo.css');
const socket = io.connect("http://localhost:3000");

export default class BatePapo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {"usuario": "Rodrigo Mello", "texto": 'Olá tudo bem?'},
                {"usuario": "Rodrigo Mello", "texto": 'Boa tarde!'},
                {"usuario": "Rodrigo Mello", "texto": 'Como vai?'},
                {"usuario": "Rodrigo Mello", "texto": 'Como vai?'},
                {"usuario": "Rodrigo Mello", "texto": 'Como vai?'}
            ]
        };
        this.socketOn = this.socketOn.bind(this);
    }
    socketOn(data) {
        this.setState({data});
    }
    componentWillMount() {
        document.title = 'React e Socket.io';
    }
    componentDidMount() {
        const BatePapo = this;
        socket.on('chat message', function(msg) {
            BatePapo.socketOn(msg);
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        let msg = new Object();
        msg.usuario = $('#usuario').val();
        msg.texto = $('#mensagem').val();
        socket.emit('chat message', msg);
        $('#mensagem').val('');
    }
    render() {
        var mensagemNode = this.state.data.map(function(mensagem, i) {
            return (
                <Mensagem key={i} data={mensagem} />
            );
        });
        return (
            <div>
                <ul id="messages">
                    {mensagemNode}
                </ul>
                <form action="" onSubmit={this.handleSubmit}>
                    <input id="usuario" name="usuario" />
                    <input id="mensagem" name="mensagem" autocomplete="off" />
                    <button>Send</button>
                </form>
            </div>
        );
    }
}
