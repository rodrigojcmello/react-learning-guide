import React, { Component } from "react";
import reactDOM from 'react-dom';

export default class OlaMundo extends Component {
    render() { return (
        <h1>Olá Mundo!</h1>
    ); }
}

reactDOM.render(<OlaMundo/>, document.getElementById('app'));
