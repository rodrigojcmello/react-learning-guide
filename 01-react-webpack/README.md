# React Webpack

## Objetivo

Exemplificar as configurações mínimas para usar React com Webpack.

## Inicialização

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

O Webpack-dev-servidor é um pequeno servidor Express, que usa o Webpack-dev-middleware como servidor do pacote do Webpack. Ele também tem um pequeno tempo de execução que é conectado ao servidor através de Socket.IO. O servidor emite informações sobre o estado de compilação para o cliente, que reage a esses eventos.

Instale o pacote webpack-dev-server globalmente:

`npm i -g webpack-dev-server`

```
  npm install
  npm install webpack-dev-server -g
  Webpack-dev-server
```

## Observações

Lembrando que estas duas formas são usadas em ambiente de desenvolvimento, sendo necessário ter configurações expecificas para o Express para colocar em produção, e claro, o Webpack Dev Server como o nome já diz, só server para ambiente de desenvolimento.

## Referência

Instale tudo de uma vez:

`npm i --save react react-dom && npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react webpack`
