import React, { Component } from "react";
import { Link } from "react-router";

export default class Audio extends Component {
    componentDidMount() {
        document.title = "Aúdio";
    }
    render() {
        return (
            <div>
                <h1>Categoria Aúdio</h1>
                <ul>
                    <li><Link to="/eletronico/audio/miscro-sytem">Micro System</Link></li>
                    <li><Link to="/eletronico/audio/som-portatil">Som Portátil</Link></li>
                </ul>
                {this.props.params.sub}
            </div>
        );
    }
}
