# kanban_app

Practice Webpack along with [SurviveJS](http://survivejs.com/webpack_react/developing_with_webpack/) tutorial.

## Memo

### Check if there's something running in the port 8080

```bash
$ netstat -na | grep 8080
```

### [Splitting Up the Configuration](http://survivejs.com/webpack_react/developing_with_webpack/#splitting-up-the-configuration) (many ways)
- [webpack-merge](https://github.com/survivejs/webpack-merge)

### [loaders](http://webpack.github.io/docs/using-loaders.html)
- [list of loaders](http://webpack.github.io/docs/list-of-loaders.html)

### [Enabling sourcemaps](http://survivejs.com/webpack_react/developing_with_webpack/#enabling-sourcemaps)
- [docs](https://webpack.github.io/docs/configuration.html#devtool)
- Check if sourcemaps is enabled in your browser. [[chrome](https://developer.chrome.com/devtools/docs/javascript-debugging)]

### [npm-install-webpack-plugin](https://www.npmjs.com/package/npm-install-webpack-plugin)
- Webpack loader to automatically `npm install --save` dependencies.
- It will detect changes made to Webpack configuration and the projects files and install the dependencies for us.
- It will modify `package.json` automatically as well.
