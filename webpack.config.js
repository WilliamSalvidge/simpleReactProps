const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: "./app/Main.js",
//   output: {
//     publicPath: "/",
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundled.js"
//   },
//   mode: "development",
//   devtool: "source-map",
//   devServer: {
//     port: 3000,
//     contentBase: path.join(__dirname, "app"),
//     hot: true,
//     historyApiFallback: { index: "index.html" }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [
//               "@babel/preset-react",
//               [
//                 "@babel/preset-env",
//                 { targets: { node: "12" } }
//               ]
//             ]
//           }
//         }
//       },
//       {
//         test: /\.json$/,
//         loader: "json-loader"
//       }
//     ]
//   }
// };

module.exports = {
  // Entry and Output Destinations //
  entry: "./app/Main.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "dist")
  },
  // Dev server for use with npm run webpack-dev-server //
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    // enables hot module replacement in webpack
    hot: true
  },
  //
  // We could set watch to be true now if we ran
  // npm run basicDev (in package.json)
  // we would essentially be running npx webpack --watch
  // there wouldn't be a need for mediumDev
  //
  // watch: true,
  //
  // Mode //
  // makes the bundles file as small as possible by removing whitespace //
  // shortening variable names etc. when in production mode //
  // for development that doesn't matter and might also make debugging more //
  // diffucult //
  mode: "production",
  // Plugins //
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./app/index-template.html"
    })
  ],
  // Loaders //
  module: {
    rules: [
      {
        // test this regex for files that end in .js for babel loader
        test: /\.js$/,
        // don't need to transpile any of the node modules that I haven't written
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            // @babel/preset-env - industry standard for transpiling ECMAScript6
            // back to vanilla javascript for all browsers
            // @babel/preset-react
            // transpiles JSX to browser readable javascript
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  }
};
