const CleanCSS = require("clean-css");
const htmlMinifier = require("html-minifier");

const { minify } = require("terser");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssMinifier", function (css) {
    return new CleanCSS({}).minify(css).styles;
  });

  eleventyConfig.addNunjucksAsyncFilter("jsMinifier", async function (code, callback) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  })
  
  eleventyConfig.addTransform("htmlMinifier", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlMinifier.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addPassthroughCopy("src/_assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};