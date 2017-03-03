import React, { Component } from "react";
import { Link } from "react-router";

export default class Acesso extends Component {
    render() {
        return (
            <div className="tela">
                <h1>Acesso!</h1>
                <li><Link to="/">Voltar</Link></li>
            </div>
        );
    }
}
