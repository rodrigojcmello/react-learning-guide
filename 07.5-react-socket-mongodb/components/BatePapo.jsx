import React, { Component } from 'react';
import update from 'react-addons-update';
import Mensagem from './Mensagem.jsx';

require('./BatePapo.css');
const socket = io.connect('http://localhost:3000');

export default class BatePapo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { usuario: 'Rafael', mensagem: 'Olá' },
                { usuario: 'Lady', mensagem: 'Tudo bem?' }
            ]
        };
        this.enviarMensagem = this.enviarMensagem.bind(this);
    }
    socketOn(retorno) {
        if (retorno === 'conectado') {
            retorno = [retorno];
        } else if (retorno[0].usuario !== this.nome.value) {
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
            usuario: this.nome.value,
            mensagem: this.mensagem.value,
            data: new Date()
        }];

        this.setState(update(this.state, {data: {$push: msg}}));

        socket.emit("chat message", msg);
        this.mensagem.value = '';
    }
    render() {
        let mensagemNode = this.state.data.map(function(mensagem, i) {
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
                    <input type="text" ref={(input) => this.nome = input} />
                    <input type="text" ref={(input) => this.mensagem = input} />
                    <button>Enviar</button>
                </form>
            </div>
        );
    }
}
