const path = require('path');

module.exports = {
    mode: 'development', // ou 'production', ou 'none'
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            // ... outras opções do loader
          }
        },
        // ... outras regras de módulo
      ]
    }
  };