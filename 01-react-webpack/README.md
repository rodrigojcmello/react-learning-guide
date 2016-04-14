# React Webpack

## Objetivo

**Exemplificar as configurações mínimas para usar React com Webpack.**

## Inicialização

`npm init --yes`

## React

Instação do React:

`npm i --save react react-dom`

Criação de um componente simples:

```
// Mundo.jsx
import React from 'react';

export default class Mundo extends React.Component {
    render() { return (
        <h1>Olá Mundo!</h1>
    ); }
}
```

## Babeljs

_Babeljs é um compilador de ES6 e JSX em ES5._

Instalação do Babeljs:

`npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react`

## Webpack

*Webpack é um modulador de pacotes.*

Instalação do Webpack:

`npm i --save-dev webpack`

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
