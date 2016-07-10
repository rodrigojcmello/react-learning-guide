import React, { Component } from 'react';
require('./Container.css');

const body = document.body;
const html = document.documentElement;

export default class Container extends Component {
    altura() {
        let alturaDoc = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        document.getElementById('container').style.height = alturaDoc + "px";
    }
    componentDidMount() {
        window.addEventListener("resize", function() {
            Container.prototype.altura();
        });
        this.altura();
    }
    render() {
        return (
            <div id="container">{this.props.children}</div>
        );
    }
}
