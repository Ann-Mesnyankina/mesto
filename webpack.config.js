const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/pages/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'index.html',
    }),
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
   
  ],
   module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules/'
        },
     
        {
          // регулярное выражение, которое ищет все файлы с такими расширениями
          test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
          type: 'asset/resource'
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader,  {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'],
        },
        {
          test: /\.(html)$/,
          use: ['html-loader']
        },
      ]
  },
}

