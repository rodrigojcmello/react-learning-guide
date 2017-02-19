import React, { Component } from "react";
import { render } from "react-dom";

export default class OlaMundo extends Component {
    render() {
        return (
            <h1>Olá Mundo!</h1>
        );
    }
}

render(<OlaMundo/>, document.getElementById("raiz"));
