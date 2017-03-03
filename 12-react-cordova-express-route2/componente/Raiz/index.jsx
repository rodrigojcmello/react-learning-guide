import React, { Component } from "react";
import { Link } from "react-router";

require("./style.css");

export default class Raiz extends Component {
    render() {
        return (
            <div>
                <h1>Raiz!</h1>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    >
                        <li><Link to="/Acesso">Acesso</Link></li>
                        <li><Link to="/Tarefa">Tarefa</Link></li>
                        { React.cloneElement(this.props.children, { key: location.pathname }) }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
