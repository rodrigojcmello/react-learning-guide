import React, { Component } from "react";

export default class Produto extends Component {
    render() {
        return (
            <div>
                <h1>Produto</h1>
                <p>{ this.props.params.repoName }</p>
            </div>
        );
    }
}
