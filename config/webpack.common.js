const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src', 'index.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.scss$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /.*\.(gif|png|jp(e*)g|svg)$/i,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 21000,
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot)$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html'),
      inject: 'body',
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')],
    extensions: ['.js', '.elm', '.scss', '.png'],
  },
};
