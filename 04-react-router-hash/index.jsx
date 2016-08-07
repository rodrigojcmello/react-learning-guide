import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Eletronico from './components/Eletronico.jsx';
import Audio from './components/Audio.jsx';
import Telefonia from './components/Telefonia.jsx';

import Produto from './components/Produto.jsx';
import Final from './components/Final.jsx';

render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='/eletronico' component={Eletronico}>
                <Route path='/eletronico/:produto' component={Audio}/>
                <Route path='/eletronico/:produto/:sub' component={Audio}/>
            </Route>
            <Route path='/telefonia' component={Telefonia}/>
        </Route>
    </Router>
), document.getElementById('app'));
