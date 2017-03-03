import React from "react";
import { Link } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require("./style.css");

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Raiz!</h1>
                <li><Link to="/Acesso">Acesso</Link></li>
                <li><Link to="/Tarefa">Tarefa</Link></li>
                { this.props.location.pathname }
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    >
                        { React.cloneElement(this.props.children, { key: this.props.location.pathname }) }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
