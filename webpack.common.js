const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './release'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!react-native-reanimated)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              '@babel/preset-react',
              {
                plugins: [
                  '@babel/plugin-proposal-class-properties'
                ]
              }
            ],
            plugins: ['babel-plugin-react-native-web'],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
  },
};
