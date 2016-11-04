import React, { Component } from 'react';
import { render } from 'react-dom';
import update from 'immutability-helper';
import Mensagem from '../Mensagem.jsx';

require('./estilo.css');
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
        this.mensagemEnviar = this.mensagemEnviar.bind(this);
    }
    socketOn(retorno) {
        if (retorno[0].usuario !== this.nome.value) {
            this.setState(update(this.state, { data: { $push: retorno } }));
        }
    }
    componentDidMount() {
        socket.on('chat message', msg => {
            this.socketOn(msg);
        });
    }
    mensagemEnviar(e) {
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
        let mensagem = this.state.data.map(function(mensagem, i) {
            return <Mensagem key={i} data={mensagem} />;
        });
        return (
            <div>
                <ul id="messages">
                    {mensagem}
                </ul>
                <div>
                    <form onSubmit={this.mensagemEnviar}>
                            <input type="text" ref={(input) => this.nome = input} placeholder="Nome" />
                            <input type="text" ref={(input) => this.sala = input} placeholder="Sala" />
                            <input type="text" ref={(input) => this.mensagem = input} placeholder="Mensagem" />
                        <button><i className="material-icons">send</i></button>
                    </form>
                </div>
            </div>
        );
    }
}

render(<BatePapo />, document.getElementById('app'));
