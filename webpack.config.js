const path  = require('path');
const merge = require('webpack-merge');

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

  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {

  });
}
