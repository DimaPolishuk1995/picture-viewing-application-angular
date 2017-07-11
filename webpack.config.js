var path = require('path'),
  webpack = require("webpack"),
  libPath = path.join(__dirname, 'client'),
  wwwPath = path.join(__dirname, 'dist'),
  pkg = require('./package.json'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(libPath, '/app/app.module.js'),
  output: {
    path: path.join(wwwPath),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.html$/, loader: 'raw'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'file?name=img/[name].[ext]'
    }, {
      test: /\.scss$/, loader: 'style!css!sass'
    }, {
      test: /\.css$/, loader: 'style!css'
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: "ng-annotate?add=true!babel"
    }, {
      test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
      loader: 'file?name=fonts/[name].[ext]'
    },
      {test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url'}]
  },
  plugins: [

    new webpack.ProvidePlugin({
      'window.Masonry': 'Masonry'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      pkg: pkg,
      template: path.join(libPath, 'index.html'),
      inject: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};