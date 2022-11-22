const CleanCSS = require("clean-css");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
  // #region content
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // #endregion content

  // #region minify
  eleventyConfig.addFilter("cssmin", function(css) {
    return new CleanCSS({}).minify(css).styles;
  });
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
      if (outputPath.endsWith(".html")) {
          let minified = htmlmin.minify(content, {
              useShortDoctype: true,
              removeComments: true,
              collapseWhitespace: true
          });
          return minified;
      }
      
      return content;
  });
  // #endregion minify

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};