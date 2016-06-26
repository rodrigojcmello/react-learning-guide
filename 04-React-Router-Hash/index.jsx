import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";

import App from "./components/App.jsx";
import Hello from "./components/Hello.jsx";
import Teste from "./components/Teste.jsx";

render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
    </Router>
), document.getElementById("app"));
