const path  = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;

// Given plenty of places expect absolute paths, we can avoid confusion by
// using absolute paths everywhere.
const PATHS = {
  app:   path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  // `entry` accepts a path or an object of entries.
  // The latter form is convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  output: {
    path:      PATHS.build,
    filename: 'bundle.js'
  }
};

// Default configuration.
// We will return this if Webpack is called outside of npm.
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
        contentBase: PATHS.build,

        // Enable history API fallback so HTML5 History API based routing works.
        // This is a good default that will come in handy in more complicated setups.
        historyApiFallback: true,
        hot:      true,
        inline:   true,
        progress: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // Parse host and port from env so this is easy to customize.
        host: process.env.HOST,
        port: process.env.PORT
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {

  });
}
