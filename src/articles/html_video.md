---
layout: layouts/article.njk
title: HTML Video
eleventyNavigation:
    key: html_video
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html
---
# HTML5 Video

## Playing Videos in HTML
Before HTML5, a video could only be played in a browser with a plug-in (like flash).

The HTML5 `<video>` element specifies a standard way to embed a video in a web page.

## The HTML `<video>` Element
To show a video in HTML, use the `<video>` element:

## Example
```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```
## How it Works
The controls attribute adds video controls, like play, pause, and volume.

It is a good idea to always include width and height attributes. If height and width are not set, the page might flicker while the video loads.

The `<source>` element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format.

The text between the `<video>` and `</video>` tags will only be displayed in browsers that do not support the `<video>` element.

## HTML `<video>` Autoplay
To start a video automatically use the autoplay attribute:

## Example
```html
<video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```
The autoplay attribute does not work in mobile devices like iPad and iPhone.

## HTML Video - Browser Support
In HTML5, there are 3 supported video formats: MP4, WebM, and Ogg.

The browser support for the different formats is:

## Browser	MP4	WebM	Ogg
* `Internet Explorer`	YES	NO	NO
* `Chrome`	YES	YES	YES
* `Firefox`	YES	YES	YES
* `Safari`	YES	NO	NO
* `Opera`	YES (from Opera 25)	YES	YES
## HTML Video - Media Types
## File Format	Media Type
* `MP4`	`video/mp4`
* `WebM`	`video/webm`
Ogg	video/ogg
## HTML Video - Methods, Properties, and Events
HTML5 defines DOM methods, properties, and events for the `<video>` element.

This allows you to load, play, and pause videos, as well as setting duration and volume.

There are also DOM events that can notify you when a video begins to play, is paused, etc.

## HTML5 Video Tags
## Tag	Description
* `<video>`	Defines a video or movie
* `<source>`	Defines multiple media resources for media elements, such as `<video>` and `<audio>`
* `<track>`	Defines text tracks in media players