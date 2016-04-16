import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes.js';

var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
);
