const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
 
// Example of simple string paths
const paths = [
  '/',
  'menu.html',
  'contact.html',
  'about.html'
];
 
// const path = require('path');

module.exports = {
  // mode: 'development',
  // devtool: 'source-map',
  // context: path.resolve(__dirname, 'src'),
  // entry: './styles/styles.scss',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss|css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf|xml)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/menu.html',
      filename: './menu.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/about.html',
      filename: './about.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/contact.html',
      filename: './contact.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new FaviconsWebpackPlugin('./src/assets/images/logoRed.png'),
    new SitemapPlugin('https://ohanasushirenosparks.com', paths)
  ],
};
