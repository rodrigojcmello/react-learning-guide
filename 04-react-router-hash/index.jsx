import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import App from "./components/App.jsx";
import Home from "./components/Home.jsx";
import Categoria from "./components/Categoria.jsx";
import Produto from "./components/Produto.jsx";
import Final from "./components/Final.jsx";

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/repos/:userName/:repoName" component={Produto}/>
            <Route path="/cat1/cat2/final" component={Final}/>
            <Route path="/categoria" component={Categoria}>
                <IndexRoute component={Produtos}/>
            </Route>
        </Route>
    </Router>
), document.getElementById("app"));
