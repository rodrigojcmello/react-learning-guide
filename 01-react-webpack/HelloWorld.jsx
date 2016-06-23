import React from 'react';
import reactDOM from 'react-dom';

export default class HelloWorld extends React.Component {
    render() { return (
        <h1>Hello World!</h1>
    ); }
}

reactDOM.render(<HelloWorld/>, document.getElementById('app'));
