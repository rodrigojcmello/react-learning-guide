import React from 'react';

export default class ComentarioFormulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {autor: "", idade: "", texto: ""};
    }
    autorAlterar(e) {
        this.setState({autor: e.target.value});
    }
    textoAlterar(e) {
        this.setState({texto: e.target.value});
    }
    idadeAlterar(e) {
        this.setState({idade: e.target.value});
    }
    render () { return (
        <form className="commentForm">
            <input
                type="text"
                placeholder="Seu nome"
                value={this.state.autor}
                onChange={this.autorAlterar}
            />
            <input
                type="text"
                placeholder="Diga algo..."
                value={this.state.texto}
                onChange={this.textoAlterar}
            />
            <input
                type="text"
                placeholder="idade"
                value={this.state.idade}
                onChange={this.idadeAlterar}
            />
            <input type="submit" value="Post" />
        </form>
    ); }
}
