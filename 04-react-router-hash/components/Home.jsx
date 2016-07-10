import React, { Component } from "react";

export default class Home extends Component {
    componentDidMount() {
        document.title = "Início";
    }
    render() {
        return (
            <h1>Esta é a Home!</h1>
        );
    }
}
