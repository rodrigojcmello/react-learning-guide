# React Webpack

## Objetivo

Exemplificar as configurações mínimas para usar React com Webpack.

## NPM

*NPM é o gerenciador de pacotes do Node*

Todos os pacotes de produção e desenvolvimento, assim como algumas configurações e scripts ficam no arquivo package.json.

Inicialização do package.json:

`npm init --yes`

Nota:

> **--yes** pula as perguntas de criação do pacote

Adição de script no package.json:

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

> **Componentes** extendem a classe Component e tem o formato .jsx

> **Export** define o módulo a ser exportado

> **Render** define onde o alvo do módulo exportado do componente será criado


## Babel

*Compilador que permite utilizar os novos recursos da próxima geração do javaScript (ES6) e HTML dentro do javaScript (JSX)*

Instalação:

`npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react`

Configuração no package.json:

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
    <title>React e Webpack</title>
</head>
<body>
    <div id="app"></div>
    <script src="pacote.js"></script>
</body>
</html>
```

## Webpack

*Modulador de pacotes.*

O Webapack trabalha com a entrava de vários aquivos e uma única saída, ou seja, ele junta tudo, minimiza o código, apenas o que é utilizado é processado para o arquivo de saída.

Instalação:

`npm i --save-dev webpack`

Configuração do Webpack:

```
// webpack.config.js
const webpack = require('webpack');

module.exports = {
    entry: './OlaMundo',
    output: { filename: 'pacote.js' },
    resolve: { extensions: ['', '.js', '.jsx'] },
    module: {
        loaders: [
            { test: /.jsx$/, loader: 'babel', exclude: /node_modules/ }
        ]
    }
};
```

Notas:

> **Entry** é o componente raíz do projeto

> **Output** é a saída única após todo o processamento

> **resolve** permite declarar arquivos .jsx sem sua extensão, sem isso seria encessário usar './OlaMundo' na 'entry'

> **loaders** são o "carregadores" de funcionalidade do webpack, no caso do loader babel, ele transformará a sintaxe ES6 e JSX em js puro o qual os navegadores tradicionais possam entender.

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
