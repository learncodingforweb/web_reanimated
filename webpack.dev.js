const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, 'release'),
      compress: true,
      port: 3000,
    },  
});
