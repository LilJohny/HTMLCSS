---
layout: layouts/article.njk
title: CSS Syntax
eleventyNavigation:
    key: css_syntax
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: ['css','start']
date: 2020-02-02
---
# CSS Syntax
## CSS Syntax
A CSS rule-set consists of a selector and a declaration block:

## CSS selector

The selector points to the HTML element you want to style.

The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces.

## Example
In this example all `<p>` elements will be center-aligned, with a red text color:
```css
p {
  color: red;
  text-align: center;
}
```
## Example Explained
p is a selector in CSS (it points to the HTML element you want to style: `<p>`).
color is a property, and red is the property value
text-align is a property, and center is the property value