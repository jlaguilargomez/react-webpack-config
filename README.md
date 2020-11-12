# Create React App from scratch using Webpack

Creamos un nuevo directorio para el proyecto e iniciamos NPM de forma básica:

```jsx
npm init -y
```

Vamos a preparar la estructura para un proyecto de REACT. Para ello empezamos con un archivo `index.html` que se encargará de hacer de punto de partida para la aplicación:

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Webpack</title>
  </head>
  <body>
    <div id="app"></div>
    ***<script src="/bundle.js"></script>***
  </body>
</html>
```

Comenzamos con la instalación de tres dependencias que vamos a usar para WEBPACK:

```jsx
npm install --save-dev webpack webpack-dev-server webpack-cli
```

**Todo el proceso de configurar un proyecto desde 0 con WEBPACK es un poco "cansado", para eso tenemos herramientas como "create-react-app" o "ng new my-app"**

Creamos un nuevo SCRIPT para poder lanzar Webpack:

```jsx
"scripts": {
    "start": "webpack-dev-server --config ./webpack.config.js -- mode development"
  },
```

Para que esto funcione, necesitamos un archivo de configuración que se encargue de la configuración (la cocina de todo esto):

```jsx
module.exports = {
  entry: ['./src/index.js'], // Dónde debe empezar webpack a buscar el proyecto?
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```

Básicamente, lo que le estamos diciendo en este archivo es que todo lo que se encuentre en `index.js` junto con sus importaciones y demás, lo "empaquete" en el archivo de destino `bundle.js` para que pueda ser utilizado en el despligue.

La opción de `devServer: {}` es la que utilizamos para configurar el archivo cuando trabajamos en local.
