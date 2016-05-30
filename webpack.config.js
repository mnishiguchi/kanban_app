const path = require('path');

// Given plenty of places expect absolute paths, we can avoid confusion by
// using absolute paths everywhere.
const PATHS = {
  app:   path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
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
