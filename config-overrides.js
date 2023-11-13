// config-overrides.js
const webpack = require('webpack');

module.exports = function override(config, env) {
  // Add your custom Webpack configurations here
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify'),
    net: require.resolve('net-browserify'),
    tls: require.resolve('tls-browserify'),
    url: require.resolve('url/'),
    stream: require.resolve('stream-browserify'),
    timers: require.resolve('timers-browserify'),
  };

  return config;
};
