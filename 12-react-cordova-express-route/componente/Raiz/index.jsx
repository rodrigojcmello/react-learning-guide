import React from "react";
import { Link } from "react-router";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "../../global.js";

require("./style.css");

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var children = this.props.children;
        if (global.transComp) {
            children =
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName={ global.transName }
                    transitionEnterTimeout={ global.transEnter }
                    transitionLeaveTimeout={ global.transLeave }
                    >
                        { React.cloneElement(this.props.children, { key: this.props.location.pathname }) }
                </ReactCSSTransitionGroup>;
        } else {
            global.transComp = true;
        }
        return (
            <div>
                { children }
            </div>
        );
    }
}
