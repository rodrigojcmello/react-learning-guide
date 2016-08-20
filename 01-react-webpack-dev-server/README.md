# React Webpack

## Objetivo

Exemplificar as configurações mínimas para usar React com Webpack.

## NPM

*NPM é o gerenciador de pacotes do Node*

Todos os pacotes de produção e desenvolvimento, assim como algumas configurações e scripts ficam no arquivo package.json.

Inicialização do package.json:

`npm init --yes`

> Nota: "--yes" serve para pular as perguntas de criação do pacote.

Adicione o script "start" no package.json:

```
"scripts": {
    "start": "webpack-dev-server"
}
```

## React

*Biblioteca javaScript para construção de interfaces*

Instalação:

`npm i --save react react-dom`

Criação de um componente:

```
// OlaMundo.jsx
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class OlaMundo extends Component {
    render() {
        return (
            <h1>Olá Mundo!</h1>
        );
    }
}

render(<OlaMundo/>, document.getElementById('app'));
```

Notas:

> **Componentes** extendem a classe Component em o formato .jsx

> **Export** define o módulo a ser exportado

> **Render** define o alvo do módulo exportado


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
