import React, { Component } from "react";
import { render } from "react-dom";

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Mui from 'material-ui/styles/MuiThemeProvider';

import Nav from "./Nav.jsx";
import Text from "./InputText.jsx";
import RaisedButton from "material-ui/RaisedButton";


class App extends Component {
    clickLog() {
        console.log("log");
    }
    render() {
        return (
            <div>
                <Mui>
                    <Nav />
                </Mui>
                <Text />
                <Text />
                <Mui>
                    <RaisedButton
                        label="Login"
                        primary={true}
                        onClick={this.clickLog}
                    />
                </Mui>
            </div>
        );
    }
}

render(<App/>, document.getElementById("app"));
