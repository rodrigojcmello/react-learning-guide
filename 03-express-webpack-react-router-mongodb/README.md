# Express Webpack React
Para uma melhor organização os components foram para o diretório "components".

O html-webpack-plugin é necessário para o Express/Node para entender qual arquivo html vai ser usado. Neste caso o index.html é um template para o express, e o arquivo principal para o webpack-dev-server, ambos vão usar o mesmo arquivo index.html. Importante, há outras formas de gerar um arquivo HTML para o Express/Node, mas elas não reaproveitam o mesmo arquivo que o webpack-dev-server que usa por padrão o index.html da raíz.

O arquivo "server.js" é onde o Express entra, ali está a configuração mínima.

```
  npm start
```
