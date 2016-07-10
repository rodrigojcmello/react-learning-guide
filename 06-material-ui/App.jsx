import React, { Component } from "react";
import { render } from "react-dom";

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent.jsx';

import AppBarExampleIcon from "./AppBarExampleIcon.jsx";
// import TextField from "material-ui/TextField";

// const App = () => (
//     <MuiThemeProvider>
//         <AppBar
//             title="Title"
//             iconClassNameRight="muidocs-icon-navigation-expand-more"
//         />
//         <TextField
//             hintText="Hint Text"
//             floatingLabelText="Floating Label Text"
//         />
//     </MuiThemeProvider>
// );

export default class App extends Component {
    render() {
        return (
            <div>
                <AppBarExampleIcon />
            </div>
        );
    }
}

render(<App/>, document.getElementById("app"));
