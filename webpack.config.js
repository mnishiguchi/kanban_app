const path    = require('path');
const merge   = require('webpack-merge');
const webpack = require('webpack');

const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET  = process.env.npm_lifecycle_event;

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
  },
  module: {
    loaders: [
      {
        // `test` expects a RegEx.
        test:    /\.css$/,
        // The loaders are evaluated from right to left.
        // `css-loader`:   resolves @import and url statements in our CSS files.
        // `style-loader`: resolves require statements in our JavaScript.
        loaders: ['style', 'css'],
        // `include` accepts either a path or an array of paths.
        include: PATHS.app
      }
    ]
  }
};

// Default configuration.
// We will return this if Webpack is called outside of npm.
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {

    // sourcemaps
    // - allow you to see exactly where an error was raised.
    // - improve the debuggability of the application.
    // - controlled through the `devtool` setting.
    devtool: 'eval-source-map',

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
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true // --save
      })
    }
  }); // endmerge
} // endif

if(TARGET === 'build') {
  module.exports = merge(common, {

  }); // endmerge
} // endif
