import React, { Component } from "react";
import { Link } from "react-router";

export default class Eletronico extends Component {
    componentDidMount() {
        document.title = "Eletrônico";
    }
    render() {
        return (
            <div>
                <h1>Categoria Eletrônico</h1>
                <ul>
                    <li><Link to="/eletronico/audio">Aúdio</Link></li>
                    <li><Link to="/eletronico/display">Display</Link></li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        );
    }
}
