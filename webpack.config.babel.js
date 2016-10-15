const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    javascript: "./js/index.js",
    html: "./html/index.html"
  },
  // 出力設定
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allCunks: true })
//     new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ["es2015", "react"],
          // babelのtransform-react-jsxプラグインを使ってjsxを変換
          plugins: ["transform-react-jsx"]
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap')
      }
    ]
  }
};
