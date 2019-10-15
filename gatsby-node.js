// This file extends Docz webpack to be able to compile the sass/css and resolve paths.
// The Docz compiler (Gatsby JS) does not use the same webpack used to compile the component library, it has its own.

// This path is relative to .docs/gatsby-node.js file
const { relativeToRoot } = require("../config/helpers");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["isomorphic-style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    resolve: {
      alias: {
        "@src": relativeToRoot("./src")
      }
    }
  });
};
