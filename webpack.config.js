const path = require('path');
const pkg = require('./package.json');
const libraryName= pkg.name;

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      'preact': path.resolve(__dirname, './node_modules/preact')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  },
  externals: {
    preact: {
        commonjs: "preact",
        commonjs2: "preact",
        amd: "Preact",
        root: "Preact"
    }
  }
};
