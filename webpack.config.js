module.exports = {
  entry: ['./src/index.js'], // Dónde debe empezar webpack a buscar el proyecto?
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist'
  }
}