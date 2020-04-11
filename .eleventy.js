module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('img');
    return {
        dir: {
            input: "html",
            output: "dist"
        },
        templateFormats: ["html", "css"],
        passthroughFileCopy: true
    };
};