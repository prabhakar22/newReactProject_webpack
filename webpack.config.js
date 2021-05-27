const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.resolve(__dirname, '/bundle'),
      filename: '[name].js',
      publicPath:'/'
   },
   target: 'web',
  devServer: {
    port: '8081',
    // contentBase: ['./dist'],
    open: true,
    // historyApiFallback: true,
  },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}
