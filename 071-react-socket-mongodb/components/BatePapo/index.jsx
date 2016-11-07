import React, { Component } from 'react';
import { render } from 'react-dom';
import update from 'immutability-helper';
import Mensagem from '../Mensagem.jsx';

require('./estilo.css');
const socket = io.connect(document.location.href);

export default class BatePapo extends Component {
    constructor(props) {
        super(props);

        if (localStorage.getItem('chave')) {
            this.chave = localStorage.getItem('chave');
        } else {
            this.chave = '';
            this.possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let i = 0; i < 7; i++) {
                this.chave += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
            }
            localStorage.setItem('chave', this.chave);
        }

        this.usuario_local = localStorage.getItem('usuario') ? localStorage.getItem('usuario') : '';

        this.state = {
            chave: this.chave,
            usuario: this.usuario_local,
            mensagem: []
        };
        this.enviarMensagem = this.enviarMensagem.bind(this);
        this.atualizarChave = this.atualizarChave.bind(this);
        this.atualizarUsuario = this.atualizarUsuario.bind(this);
    }

    // Socket.io ---------------------------------------------------------------

    enviarSala() {
        socket.emit('sala', this.sala.value);
    }
    receberMensagens(ret) {
        this.setState({ mensagem: ret });
    }
    receberMensagem(ret) {
        if (ret.usuario !== this.nome.value) {
            this.setState(update(this.state, { mensagem: { $push: [ret] } }));
        }
        this.area_mensagem.scrollTop = this.area_mensagem.scrollHeight;
    }

    // onChange ----------------------------------------------------------------

    atualizarChave(event) {
        this.enviarSala();
        localStorage.setItem('chave', event.target.value);
        this.setState({ chave: event.target.value });
    }
    atualizarUsuario(event) {
        localStorage.setItem('usuario', event.target.value);
        this.setState({ usuario: event.target.value });
    }

    // onSubmit ----------------------------------------------------------------

    enviarMensagem(e) {
        e.preventDefault();
        let msg = {
            usuario: this.nome.value,
            texto: this.mensagem.value,
            sala: this.sala.value
        };
        this.setState(update(this.state, { mensagem: { $push: [msg] } }));
        socket.emit('mensagem', msg);
        this.mensagem.value = '';
    }

    // -------------------------------------------------------------------------

    componentDidMount() {
        this.enviarSala();
        socket.on('mensagens', msg => {
            this.receberMensagens(msg);
        });
        socket.on('mensagem', msg => {
            this.receberMensagem(msg);
        });
    }
    render() {
        let mensagem = this.state.mensagem.map(function(dados, i) {
            let id = typeof dados._id !== 'undefined' ? dados._id : i;
            return <Mensagem key={id} data={dados} />;
        });
        return (
            <div ref={(div) => this.area_mensagem = div}>
                <ul id="messages">
                    {mensagem}
                </ul>
                <div>
                    <form onSubmit={this.enviarMensagem}>
                        <input type="text" ref={(input) => this.nome = input} placeholder="Nome" value={this.state.usuario} onChange={this.atualizarUsuario} />
                        <input type="text" ref={(input) => this.sala = input} placeholder="Sala" value={this.state.chave} onChange={this.atualizarChave} />
                        <input type="text" ref={(input) => this.mensagem = input} placeholder="Mensagem" />
                        <button><i className="material-icons">send</i></button>
                    </form>
                </div>
            </div>
        );
    }
}

render(<BatePapo />, document.getElementById('app'));
