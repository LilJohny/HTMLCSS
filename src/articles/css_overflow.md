---
layout: layouts/article.njk
title: CSS Overflow
eleventyNavigation:
    key: css_overflow
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: ['css','start']
date: 2020-02-14
---
# CSS Layout - Overflow
The CSS overflow property controls what happens to content that is too big to fit into an area.


## CSS Overflow
The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

The overflow property has the following values:

* `visible` - Default. The overflow is not clipped. The content renders outside the element's box
* `hidden` - The overflow is clipped, and the rest of the content will be invisible
* `scroll` - The overflow is clipped, and a scrollbar is added to see the rest of the content
* `auto` - Similar to scroll, but it adds scrollbars only when necessary
<strong>Note: The overflow property only works for block elements with a specified height.</strong>

<strong>Note: In OS X Lion (on Mac), scrollbars are hidden by default and only shown when being used (even though "overflow:scroll" is set).</strong>

## overflow: visible
By default, the overflow is visible, meaning that it is not clipped and it renders outside the element's box:

You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
## Example
```css
div {
  width: 200px;
  height: 50px;
  background-color: #eee;
  overflow: visible;
}
```
## overflow: hidden
With the hidden value, the overflow is clipped, and the rest of the content is hidden:

You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
## Example
```css
div {
  overflow: hidden;
}
```
## overflow: scroll
Setting the value to scroll, the overflow is clipped and a scrollbar is added to scroll inside the box. Note that this will add a scrollbar both horizontally and vertically (even if you do not need it):

You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
## Example
```css
div {
  overflow: scroll;
}
```
## overflow: auto
The auto value is similar to scroll, but it adds scrollbars only when necessary.

You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
## Example
```cs
div {
  overflow: auto;
}
```
## overflow-x and overflow-y
The `overflow-x` and `overflow-y` properties specifies whether to change the overflow of content just horizontally or vertically (or both):

* `overflow-x` specifies what to do with the left/right edges of the content.
* `overflow-y` specifies what to do with the top/bottom edges of the content.

You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
## Example
```css
div {
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: scroll; /* Add vertical scrollbar */
}
```
## All CSS Overflow Properties
## Property	Description
* `overflow`	Specifies what happens if content overflows an element's box
* `overflow-x`	Specifies what to do with the left/right edges of the content if it overflows the element's content area
* `overflow-y`	Specifies what to do with the top/bottom edges of the content if it overflows the element's content area
