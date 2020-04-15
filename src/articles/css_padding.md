---
layout: layouts/article.njk
title: CSS Padding
eleventyNavigation:
    key: css_padding
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: css
---
# CSS Padding

## CSS Padding
The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).

## Padding - Individual Sides
CSS has properties for specifying the padding for each side of an element:

* `padding-top`
* `padding-right`
* `padding-bottom`
* `padding-left`
All the padding properties can have the following values:

* `length` - specifies a padding in px, pt, cm, etc.
* `%` - specifies a padding in % of the width of the containing element
* `inherit` - specifies that the padding should be inherited from the parent element
<strong>Note: Negative values are not allowed.</strong>

## Example
Set different padding for all four sides of a `<div>` element:
```css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```
## Padding - Shorthand Property
To shorten the code, it is possible to specify all the padding properties in one property.

The padding property is a shorthand property for the following individual padding properties:

* padding-top
* padding-right
* padding-bottom
* padding-left

## Example
Use the padding shorthand property with four values:
```css
div {
  padding: 25px 50px 75px 100px;
}
```
## Example
Use the padding shorthand property with three values: 
```css
div {
  padding: 25px 50px 75px;
}
```
## Example
Use the padding shorthand property with two values: 
```css
div {
  padding: 25px 50px;
}
```
## Example
Use the padding shorthand property with one value: 
```css
div {
  padding: 25px;
}
```
Padding and Element Width
The CSS width property specifies the width of the element's content area. The content area is the portion inside the padding, border, and margin of an element (the box model).

So, if an element has a specified width, the padding added to that element will be added to the total width of the element. This is often an undesirable result.

## Example
Here, the `<div>` element is given a width of 300px. However, the actual width of the `<div>` element will be 350px (300px + 25px of left padding + 25px of right padding):
```css
div {
  width: 300px;
  padding: 25px;
}
```
To keep the width at 300px, no matter the amount of padding, you can use the box-sizing property. This causes the element to maintain its width; if you increase the padding, the available content space will decrease.

## Example
Use the box-sizing property to keep the width at 300px, no matter the amount of padding:
```css
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```