---
layout: layouts/article.njk
title: CSS comments
eleventyNavigation:
    key: css_comments
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: ['css','start']
date: 2020-02-05
---
# CSS Comments
## CSS Comments
Comments are used to explain the code, and may help when you edit the source code at a later date.

Comments are ignored by browsers.

A CSS comment starts with `/* and ends with */`:

## Example
```css
/* This is a single-line comment */
p {
  color: red;
}
```
You can add comments wherever you want in the code:

## Example
```css
p {
  color: red;  /* Set text color to red */
}
```
Comments can also span multiple lines: 

## Example
```css
/* This is
a multi-line
comment */

p {
  color: red;
}```