import React, { Component } from "react";

export default class Produto extends React.Component {
    render() {
        return (
            <div>
                <h1>Produto</h1>
                <p>{this.props.params.repoName}</p>
            </div>
        );
    }
}
