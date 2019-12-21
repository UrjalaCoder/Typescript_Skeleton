const path = require('path');

const server = {
  entry: './src_server/index.ts',
  mode: 'development',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'server-bundle.js',
    path: path.join(__dirname, '/'),
  },
  node: {
    __dirname: false
  }
};

module.exports = [server];
