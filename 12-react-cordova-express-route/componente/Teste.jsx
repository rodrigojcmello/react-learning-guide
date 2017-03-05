import React, { Component } from "react";
import { browserHistory } from "react-router";

// import elist from "../elist.class.js";

export default class extends Component {
    componentWillMount() {
        global.transComp = false;
        browserHistory.push("#/login");
    }
    render() {
        return (
            <div></div>
        );
    }
}
