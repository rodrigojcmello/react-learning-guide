# React Webpack

## Objetivo

Exemplificar as configurações mínimas para usar React com Webpack.

## NPM

Inicialização do **package.json**:

`npm init --yes`

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

Instale global:

`npm i -g webpack-dev-server`

## Observações

Lembrando que estas duas formas são usadas em ambiente de desenvolvimento, sendo necessário ter configurações expecificas para o Express para colocar em produção, e claro, o Webpack Dev Server como o nome já diz, só server para ambiente de desenvolimento.

## Referência

Instale tudo de uma vez:

`npm i --save react react-dom && npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react webpack`
