---
layout: layouts/article.njk
title: CSS Backgrounds
eleventyNavigation:
    key: css_backgrounds
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: ['css','start']
date: 2020-02-08
---
# CSS Backgrounds

The CSS background properties are used to define the background effects for elements.

In these chapters, you will learn about the following CSS background properties:

* background-color
* background-image
* background-repeat
* background-attachment
* background-position
* CSS background-color
The background-color property specifies the background color of an element.

## Example
The background color of a page is set like this:
```css
body {
  background-color: lightblue;
}
```
With CSS, a color is most often specified by:

a valid color name - like "red"
a HEX value - like "#ff0000"
an RGB value - like "rgb(255,0,0)"
Look at CSS Color Values for a complete list of possible color values.

Other Elements
You can set the background color for any HTML elements:

## Example
Here, the `<h1>`, `<p>`, and `<div>` elements will have different background colors: 
```css
h1 {
  background-color: green;
}

div {
  background-color: lightblue;
}

p {
  background-color: yellow;
}
```
## Opacity / Transparency
The opacity property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower value, the more transparent:

## Example
```css
div {
  opacity: 0.3;
}
```
<strong>Note: When using the opacity property to add transparency to the background of an element, all of its child elements inherit the same transparency. This can make the text inside a fully transparent element hard to read.</strong>

## Transparency using RGBA
If you do not want to apply opacity to child elements, like in our example above, use RGBA color values. The following example sets the opacity for the background color and not the text:


You learned from our CSS Colors Chapter, that you can use RGB as a color value. In addition to RGB, you can use an RGB color value with an alpha channel (RGBA) - which specifies the opacity for a color.

An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

<strong>Tip: You will learn more about RGBA Colors in our CSS Colors Chapter.</strong>

## Example
```css
div {
  background: rgba(76, 175, 80, 0.3) /* Green background with 30% opacity */
}
```