import React, { Component } from "react";

export default class Teste extends React.Component {
    componentDidMount() {
        document.title = "Categoria";
    }
    render() {
        return (
            <div>
                <h1>Está é uma categoria!</h1>
                <hr />
                {this.props.children}
            </div>
        );
    }
}
