---
layout: layouts/article.njk
title: CSS Height and Width
eleventyNavigation:
    key: css_height_and_width
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: css
---
# CSS Height and Width
This element has a width of 100%.

## CSS Setting height and width
The height and width properties are used to set the height and width of an element.

The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.

## CSS height and width Values
The height and width properties may have the following values:

* `auto` - This is default. The browser calculates the height and width
* `length` - Defines the height/width in px, cm etc.
* `%` - Defines the height/width in percent of the containing block
* `initial` - Sets the height/width to its default value
* `inherit` - The height/width will be inherited from its parent value
## CSS height and width Examples
This element has a height of 200 pixels and a width of 50%
## Example
Set the height and width of a `<div>` element:
```css
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
```
This element has a height of 100 pixels and a width of 500 pixels.
## Example
Set the height and width of another `<div>` element:
```css
div {
  height: 100px;
  width: 500px;
  background-color: powderblue;
}
```
Note: Remember that the height and width properties do not include padding, borders, or margins! They set the height/width of the area inside the padding, border, and margin of the element!

## Setting max-width
The max-width property is used to set the maximum width of an element.

The max-width can be specified in length values, like px, cm, etc., or in percent (%) of the containing block, or set to none (this is default. Means that there is no maximum width).

The problem with the `<div>` above occurs when the browser window is smaller than the width of the element (500px). The browser then adds a horizontal scrollbar to the page.

Using max-width instead, in this situation, will improve the browser's handling of small windows.

<strong>Tip: Drag the browser window to smaller than 500px wide, to see the difference between the two divs!</strong>

This element has a height of 100 pixels and a max-width of 500 pixels.
<strong>Note: The value of the max-width property overrides width.</strong>

## Example
This `<div>` element has a height of 100 pixels and a max-width of 500 pixels: 
```css
div {
  max-width: 500px;
  height: 100px;
  background-color: powderblue;
}
```

## All CSS Dimension Properties
## Property	Description
* `height`	Sets the height of an element
* `max-height`	Sets the maximum height of an element
* `max-width`	Sets the maximum width of an element
* `min-height`	Sets the minimum height of an element
* `min-width`	Sets the minimum width of an element
* `width`	Sets the width of an element
