---
layout: layouts/article.njk
title: CSS Margins
eleventyNavigation:
    key: css_margins
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: css
---
# CSS Margins
## CSS Margins
The CSS margin properties are used to create space around elements, outside of any defined borders.

With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (`top`, `right`, `bottom`, and `left`).

## Margin - Individual Sides
CSS has properties for specifying the margin for each side of an element:

* `margin-top`
* `margin-right`
* `margin-bottom`
* `margin-left`
All the margin properties can have the following values:

* `auto` - the browser calculates the margin
* `length` - specifies a margin in px, pt, cm, etc.
* `%` - specifies a margin in % of the width of the containing element
* `inherit` - specifies that the margin should be inherited from the parent element
<strong>Tip: Negative values are allowed.</strong>

## Example
Set different margins for all four sides of a `<p>` element:
```css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```
## Margin - Shorthand Property
To shorten the code, it is possible to specify all the margin properties in one property.

The margin property is a shorthand property for the following individual margin properties:

* margin-top
* margin-right
* margin-bottom
* margin-left

## Example
Use the margin shorthand property with four values:
```css
p {
  margin: 25px 50px 75px 100px;
}
```
## Example
Use the margin shorthand property with three values: 
```css
p {
  margin: 25px 50px 75px;
}
```

## Example
Use the margin shorthand property with two values: 
```css
p {
  margin: 25px 50px;
}
```
## Example
Use the margin shorthand property with one value: 
```css
p {
  margin: 25px;
}
```
## The auto Value
You can set the margin property to auto to horizontally center the element within its container.

The element will then take up the specified width, and the remaining space will be split equally between the left and right margins.

## Example
Use margin: auto:
```css
div {
  width: 300px;
  margin: auto;
  border: 1px solid red;
}
```
## The inherit Value
This example lets the left margin of the `<p class="ex1">` element be inherited from the parent element (`<div>`):

## Example
Use of the inherit value:
```css
div {
  border: 1px solid red;
  margin-left: 100px;
}

p.ex1 {
  margin-left: inherit;
}
```