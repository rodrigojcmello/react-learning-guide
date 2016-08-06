import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from "material-ui/TextField";

export default Text = () => (
    <MuiThemeProvider>
        <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
        />
    </MuiThemeProvider>
);
