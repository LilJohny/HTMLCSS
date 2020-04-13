const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('img');

    eleventyConfig.setDataDeepMerge(true);


    return {
        dir: {
            input: "html",
            output: "dist",
            includes:"_includes"
        },
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        templateFormats: ["html", "njk", "css"],
        passthroughFileCopy: true,
        templateEngineOverride: "njk"
    };
};