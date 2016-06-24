// Express ---------------------------------------------------------------------

const app = require("express")();

// Webpack ---------------------------------------------------------------------

import webpackMiddleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config.js";
const compiler = require("webpack")(webpackConfig);

// Configuração do Express -----------------------------------------------------

app.use(webpackMiddleware(compiler));
app.get("*");
app.listen(3000);
