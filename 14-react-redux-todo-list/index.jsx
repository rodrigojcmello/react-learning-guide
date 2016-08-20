import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp);
// let store = createStore(state => state);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

// import React, { Component } from 'react';
// import { render } from 'react-dom';
//
// export default class OlaMundo extends Component {
//     render() {
//         return (
//             <h1>Olá Mundo!</h1>
//         );
//     }
// }
//
// render(<OlaMundo/>, document.getElementById('app'));
