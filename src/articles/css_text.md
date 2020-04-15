---
layout: layouts/article.njk
title: CSS Text
eleventyNavigation:
    key: css_text
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: css
---
# CSS Text

## TEXT FORMATTING
This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties. The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored "Try it Yourself" link.


## Text Color
The color property is used to set the color of the text. The color is specified by:

* a color name - like "red"
* a HEX value - like "#ff0000"
* an RGB value - like "rgb(255,0,0)"
Look at CSS Color Values for a complete list of possible color values.

The default text color for a page is defined in the body selector.

## Example
```css
body {
  color: blue;
}

h1 {
  color: green;
}
```
<strong>Note: For W3C compliant CSS: If you define the color property, you must also define the background-color.</strong>

## Text Color and Background Color
In this example, we define both the background-color property and the color property:

## Example
body {
  background-color: lightgrey;
  color: blue;
}

h1 {
  background-color: black;
  color: white;
}
