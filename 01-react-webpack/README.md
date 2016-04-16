# React Webpack

## Objetivo

Exemplificar as configurações mínimas para usar React com Webpack.

## NPM

Inicialização do package.json:

`npm init --yes`

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
import ReactDOM from 'react-dom';

export default class HelloWorld extends React.Component {
    render() { return (
        <h1>Hello World!</h1>
    ); }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('app'));
```

## Babeljs

*Compilador JavaScript que suporta sintaxes ES6 e JSX.*

Instalação:

`npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react`

## HTML

```
//index.html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>01-react-webpack</title>
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
var webpack = require('webpack');

module.exports = {
    entry: './HelloWorld.jsx',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
```

## Webpack Dev Server

*Pequeno servidor Express integrado ao Webpack.*

Instalação global:

`npm i -g webpack-dev-server`

## localhost:8080

No terminal:

`webpack-dev-server`

ou

`npm start`

* Acesse localhost:8080 para ver o resultado
* Acesse localhost:8080/webpack-dev-server para atualização em tempo real.


## Referência

Instalação simplificada:

`npm i --save react react-dom && npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react webpack`
