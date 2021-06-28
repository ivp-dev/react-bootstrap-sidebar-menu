'use strict'
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './app/index.tsx'),
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
  ]
}