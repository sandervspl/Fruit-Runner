var path = require("path");

module.exports = {
  
  entry: './src/app.ts',

  output: {
    path: path.join(__dirname, './public/assets/js'),
    filename: 'game.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts?$/, loader: 'ts-loader' }
    ]
  }
};