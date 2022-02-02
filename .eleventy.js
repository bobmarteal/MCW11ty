module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addWatchTarget("./src/sass/");
  return {
    dir: {
      input: "src",
      output: "public",
      data: "_data",
    },
  };
};
