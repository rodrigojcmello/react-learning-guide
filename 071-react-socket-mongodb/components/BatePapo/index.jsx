import React, { Component } from 'react';
import { render } from 'react-dom';
import update from 'immutability-helper';
import Mensagem from '../Mensagem.jsx';

require('./estilo.css');
const socket = io.connect(document.location.href);

export default class BatePapo extends Component {
    constructor(props) {
        super(props);

        let chave = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 7; i++) {
            chave += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        this.state = {
            chave: chave,
            mensagem: [
                { usuario: 'Rafael', mensagem: 'Olá' },
                { usuario: 'Lady', mensagem: 'Tudo bem?' }
            ]
        };
        this.mensagemEnviar = this.mensagemEnviar.bind(this);
        this.chaveMudar = this.chaveMudar.bind(this);
    }
    socketMensagem(retorno) {
        if (retorno[0].usuario !== this.nome.value) {
            this.setState(update(this.state, { mensagem: { $push: retorno } }));
            console.log(retorno[0].usuario);
            console.log(this.nome.value);
            console.log('NÃO ERA PRA ENTRAR!');
        }
        this.area_mensagem.scrollTop = this.area_mensagem.scrollHeight;
    }
    socketMongo(retorno) {
        console.log(retorno);
    }
    componentDidMount() {
        socket.on('servidor mensagem', msg => {
            this.socketMensagem(msg);
        });
        socket.on('servidor mongo', msg => {
            this.socketMongo(msg);
        });
    }
    mensagemEnviar(e) {
        e.preventDefault();

        let msg = [{
            usuario: this.nome.value,
            mensagem: this.mensagem.value,
            sala: this.sala.value,
            data: new Date()
        }];

        this.setState(update(this.state, { mensagem: { $push: msg } }));

        socket.emit('cliente mensagem', msg);
        // socket.on('connect_failed', function(){
        //     console.log('Connection Failed');
        // });

        this.mensagem.value = '';
    }
    chaveMudar(event) {
        this.setState({ chave: event.target.value });
    }
    render() {
        let mensagem = this.state.mensagem.map(function(dados, i) {
            return <Mensagem key={i} data={dados} />;
        });
        return (
            <div ref={(div) => this.area_mensagem = div}>
                <ul id="messages">
                    {mensagem}
                </ul>
                <div>
                    <form onSubmit={this.mensagemEnviar}>
                        <input type="text" ref={(input) => this.nome = input} placeholder="Nome" />
                        <input type="text" ref={(input) => this.sala = input} placeholder="Sala" value={this.state.chave} onChange={this.chaveMudar} />
                        <input type="text" ref={(input) => this.mensagem = input} placeholder="Mensagem" />
                        <button><i className="material-icons">send</i></button>
                    </form>
                </div>
            </div>
        );
    }
}

render(<BatePapo />, document.getElementById('app'));
