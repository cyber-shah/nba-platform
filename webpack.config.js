const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    },
  
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      net: require.resolve('net-browserify'),
      tls: require.resolve('tls-browserify'),
      stream: require.resolve('stream-browserify'), // Add this line
    },
  },
};
