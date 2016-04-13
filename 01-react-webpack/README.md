# React Webpack

## Objetivo

Existem 2 formas de se trabalhar com React e Webpack.

1. React e Webpack Dev Server
2. React, Webpack e Express

O objetivo deste exemplo é ser o mais simples possível, por isso iremos mostrar inicialmente como se usa React com o Webpack Dev Server.

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
