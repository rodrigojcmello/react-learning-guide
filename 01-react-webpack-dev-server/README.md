# React Webpack

## Objetivo

Exemplificar as configurações mínimas para usar React com Webpack.

## NPM

Inicialização do package.json:

`npm init --yes`

> Nota: o --yes serve para criar um package.json vázio, sinta-se livre para fazer um "npm init" e preencher as devidas informações do projeto
> - Rodrigo Mello

Adicione o script "start" no package.json:

```
"scripts": {
    "start": "webpack-dev-server"
}
```

## React

*Biblioteca JavaScript para construir interfaces de usuário*

Instalação:

`npm i --save react react-dom`

Criação de componente:

```
// HelloWorld.jsx
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

*Compilador JavaScript que suporta ES6 e JSX.*

Instalação:

`npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react`

Para configuração o Babel adicione ao seu package.json:
```
"babel": { "presets": ["es2015", "react"] }
```

## HTML

```
//index.html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>01 - React Webpack</title>
</head>
<body>
    <div id="app"></div>
    <script src="bundle.js"></script>
</body>
</html>
```

## Webpack

*Modulador de pacotes.*

Instalação:

`npm i --save-dev webpack`

Configuração do Webpack:

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
