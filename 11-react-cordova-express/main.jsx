import React from "react";
import { render } from "react-dom";

import OlaExpress from "./componente/OlaExpress";

var raiz = document.createElement("div");
raiz.id = "raiz";
document.body.appendChild(raiz);

render(<OlaExpress />, document.getElementById("raiz"));
