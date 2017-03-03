import React, { Component } from "react";
import { Link } from "react-router";

export default class Tarefa extends Component {
    render() {
        return (
            <div>
                <h1>Tarefa!</h1>
                <li><Link to="/">Voltar</Link></li>
            </div>
        );
    }
}
