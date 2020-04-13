const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('img');

    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addLayoutAlias("base", "layouts/base.njk")

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            data:"_data"
        },
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        templateFormats: ["html", "njk", "css"],
        passthroughFileCopy: true,
        templateEngineOverride: "njk"
    };
};