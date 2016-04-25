import React, { Component } from 'react';
import Mensagem from './Mensagem.jsx';

import Container from './Container.jsx';

import $ from 'jquery';
require('./BatePapo.css');
const socket = io.connect("http://localhost:3000");

var data = [];
var msg = new Object();

export default class BatePapo extends Component {
    constructor(props) {
        super(props);
        this.state = {data};
        this.socketOn = this.socketOn.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    socketOn(retorno) {
        if ((retorno.usuario !== msg.usuario && retorno.data !== msg.data) || (msg.usuario === undefined && msg.data === undefined)) {
            data.push(retorno);
            this.setState({data});
        }
    }
    componentDidMount() {
        document.title = 'React e Socket.io';
        const BatePapo = this;
        socket.on('chat message', function(msg) {
            BatePapo.socketOn(msg);
        });
    }
    handleSubmit(e) {
        e.preventDefault();

        msg.usuario = $("#usuario").val();
        msg.texto = $("#mensagem").val();
        msg.data = new Date();

        data.push(msg);
        this.setState({data});

        socket.emit("chat message", msg);
        $("#mensagem").val("");
    }
    render() {
        var mensagemNode = this.state.data.map(function(mensagem, i) {
            return (
                <Mensagem key={i} data={mensagem} />
            );
        });
        return (
            <Container>
                <ul id="messages">
                    {mensagemNode}
                </ul>
                <form action="" onSubmit={this.handleSubmit}>
                    <input id="usuario" name="usuario" />
                    <input id="mensagem" name="mensagem" autocomplete="off" />
                    <button>Send</button>
                </form>
            </Container>
        );
    }
}
