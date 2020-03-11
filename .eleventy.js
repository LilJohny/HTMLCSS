module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css');
    return {
        dir: {
            input: "html",
            output: "dist"
        },
        templateFormats: ["html", "css"],
        passthroughFileCopy: true
    };
};