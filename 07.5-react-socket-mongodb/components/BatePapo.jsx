import React, { Component } from 'react';
import update from 'react-addons-update';
import Mensagem from './Mensagem.jsx';

require('./BatePapo.css');
const socket = io.connect('http://localhost:3000');

export default class BatePapo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {usuario: 'Rafael', mensagem: 'Olá'},
                {usuario: 'Lady', mensagem: 'Tudo bem?'}
            ]
        };
        this.enviarMensagem = this.enviarMensagem.bind(this);
    }
    socketOn(retorno) {
        if (retorno === 'conectado') {
            retorno = [retorno];
        } else if (retorno[0].usuario !== document.getElementById('usuario').value) {
            let data = update(this.state, {data: {$push: retorno}});
            this.setState(data);
        }
    }
    componentDidMount() {
        socket.on('chat message', msg => {
            this.socketOn(msg);
        });
    }
    enviarMensagem(e) {
        e.preventDefault();

        let msg = [{
            usuario: document.getElementById('usuario').value,
            mensagem: document.getElementById('mensagem').value,
            data: new Date()
        }];

        let data = update(this.state, {data: {$push: msg}});
        this.setState(data);

        socket.emit("chat message", msg);
        document.getElementById('mensagem').value = '';
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
                <form onSubmit={this.enviarMensagem}>
                    <input id="usuario" name="usuario" />
                    <input id="mensagem" name="mensagem" autoComplete="off" />
                    <button>Send</button>
                </form>
            </div>
        );
    }
}
