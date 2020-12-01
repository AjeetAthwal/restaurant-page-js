const path = require('path');

module.exports = {
  mode: "production",
  devtool: "eval-source-map",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};