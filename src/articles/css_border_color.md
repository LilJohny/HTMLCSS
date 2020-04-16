---
layout: layouts/article.njk
title: CSS Border color
eleventyNavigation:
    key: css_border_color
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: ['css','start']
date: 2020-02-09
---
# CSS Border Color
## CSS Border Color
The border-color property is used to set the color of the four borders.

The color can be set by:

* name - specify a color name, like "red"
* HEX - specify a HEX value, like "#ff0000"
* RGB - specify a RGB value, like "rgb(255,0,0)"
* HSL - specify a HSL value, like "hsl(0, 100%, 50%)"

<strong>Note: If border-color is not set, it inherits the color of the element.</strong>

## Example
Demonstration of the different border colors:
```css
p.one {
  border-style: solid;
  border-color: red;
}

p.two {
  border-style: solid;
  border-color: green;
}

p.three {
  border-style: dotted;
  border-color: blue;
}
```
## Specific Side Colors
The border-color property can have from one to four values (for the top border, right border, bottom border, and the left border). 

## Example
```css
p.one {
  border-style: solid;
  border-color: red green blue yellow; /* red top, green right, blue bottom and yellow left */
}
```
## HEX Values
The color of the border can also be specified using a hexadecimal value (HEX):

## Example
```css
p.one {
  border-style: solid;
  border-color: #ff0000; /* red */
}
```
## RGB Values
Or by using RGB values:

## Example
```css
p.one {
  border-style: solid;
  border-color: rgb(255, 0, 0); /* red */
}
```
## HSL Values
You can also use HSL values:

## Example
```css
    p.one {
    border-style: solid;
    border-color: hsl(0, 100%, 50%); /* red */
    }
```