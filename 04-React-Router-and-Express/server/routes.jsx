// React -----------------------------------------------------------------------

import React from "react";
import { Route, IndexRoute } from "react-router";

// Components ------------------------------------------------------------------

import App from "../components/App.jsx";
import Hello from "../components/Hello.jsx";
import Teste from "../components/Teste.jsx";

// -----------------------------------------------------------------------------

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Hello}/>
        <Route path="/teste" component={Teste}/>
    </Route>
);
