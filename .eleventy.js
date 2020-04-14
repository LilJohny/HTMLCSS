const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(pluginSyntaxHighlight);

    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/img');

    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

    eleventyConfig.addCollection('articles', collection => {
        return collection.getFilteredByGlob('src/articles/*.md');
    });
    eleventyConfig.addCollection('lists', collection => {
        return collection.getFilteredByGlob('src/lists/*.md');
    });
    return {
        dir: {
            input: "src/",
            output: "dist",
            includes: "_includes",
            data: "_data"
        },
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        passthroughFileCopy: true,
        templateEngineOverride: "njk",
        alwaysWrapLineHighlights: true
    };
};