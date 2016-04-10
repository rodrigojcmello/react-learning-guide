import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Hello from './components/hello.jsx';
import Teste from './components/teste.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
        <Route path="/teste" component={Teste}/>
    </Router>
), document.getElementById('app'));
