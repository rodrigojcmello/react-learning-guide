# React Webpack

## Objetivo

Exemplificar as configurações mínimas para usar React com Express.

## NPM

O mesmo que o exemplo 01, apenas altere o script "start":

```
"scripts": {
    "start": "webpack && node index.js"
}
```

## React

O mesmo que o exemplo 01, só que jogue o componente dentre de um diretório "components" para fins de organização:

```
// components/HelloWorld.jsx
import React from 'react';
import reactDOM from 'react-dom';

export default class HelloWorld extends React.Component {
    render() { return (
        <h1>Hello World!</h1>
    ); }
}

reactDOM.render(<HelloWorld/>, document.getElementById('app'));
```

## Babel

O mesmo que o exemplo 01.

## HTML

O mesmo que o exemplo 01, apenas foi removido a linha que inclui o script.

O Script será inserido pelo webpack.

```
//index.html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>01 - React Express</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

## Webpack

```
// webpack.config.js
const webpack = require("webpack");

module.exports = {
    entry: "./HelloWorld.jsx",
    output: { filename: 'bundle.js' },
    module: {
        loaders: [{
            test: /.jsx$/,
            loader: "babel",
            exclude: /node_modules/
        }]
    }
};
```

## Webpack Dev Server

*Pequeno servidor Express para Webpack.*

Instalação global:

`npm i -g webpack-dev-serv`

## localhost:8080

No terminal use:

`webpack-dev-server`

ou

`npm start`

* Acesse localhost:8080 para ver o resultado.
* Acesse localhost:8080/webpack-dev-server para ver o resultado com atualização em tempo real.


## Referência

Instalação simplificada:

`npm i --save react react-dom && npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react webpack`
