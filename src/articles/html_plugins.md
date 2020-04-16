---
layout: layouts/article.njk
title: HTML Plug-ins
eleventyNavigation:
    key: html_plugins
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html
---
# HTML Plug-ins
The purpose of a plug-in is to extend the functionality of a web browser.

## HTML Helpers (Plug-ins)
Helper applications (plug-ins) are computer programs that extend the standard functionality of a web browser.


Plug-ins can be added to web pages with the `<object>` tag or the `<embed>` tag. 

Plug-ins can be used for many purposes: display maps, scan for viruses, verify your bank id, etc.

To display video and audio: Use the `<video>` and `<audio>` tags.

## The `<object>` Element
The `<object>` element is supported by all browsers.

The `<object>` element defines an embedded object within an HTML document.

It is used to embed plug-ins (like Java applets, PDF readers, Flash Players) in web pages.

## Example
```html
<object width="400" height="50" data="bookmark.swf"></object>
```
The `<object>` element can also be used to include HTML in HTML:

## Example
```html
<object width="100%" height="500px" data="snippet.html"></object>
```
Or images if you like:

## Example
```html
<object data="audi.jpeg"></object>
```
## The `<embed>` Element
The `<embed>` element is supported in all major browsers.

The `<embed>` element also defines an embedded object within an HTML document.

Web browsers have supported the `<embed>` element for a long time. However, it has not been a part of the HTML specification before HTML5.

## Example
```html
<embed width="400" height="50" src="bookmark.swf">
```
cNote that the `<embed>` element does not have a closing tag. It can not contain alternative text.</strong>

The `<embed>` element can also be used to include HTML in HTML:

## Example
```html
<embed width="100%" height="500px" src="snippet.html">
```
Or images if you like:

## Example
```html
<embed src="audi.jpeg">
```