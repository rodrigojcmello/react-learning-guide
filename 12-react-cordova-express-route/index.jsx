import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import Raiz from "./componente/Raiz";
import Teste from "./componente/Teste";
import Acesso from "./componente/Acesso";
import Tarefa from "./componente/Tarefa";

var raiz = document.createElement("div");
raiz.id = "raiz";
document.body.appendChild(raiz);

render((
    <Router history={hashHistory}>
        <Route path="/" component={Raiz}>
            <IndexRoute component={Teste} />
            <Route path="/acesso" component={Acesso} />
            <Route path="/tarefa" component={Tarefa} />
        </Route>
    </Router>
), document.getElementById("raiz"));
