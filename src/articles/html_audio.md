---
layout: layouts/article.njk
title: HTML Audio
eleventyNavigation:
    key: html_audio
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: ['html','start']
date: 2020-01-30
---
# HTML5 Audio
## Audio on the Web
Before HTML5, audio files could only be played in a browser with a plug-in (like flash).

The HTML5 `<audio>` element specifies a standard way to embed audio in a web page.



## The HTML <audio> Element
To play an audio file in HTML, use the `<audio>` element:

## Example
```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```
## HTML Audio - How It Works
The controls attribute adds audio controls, like play, pause, and volume.

The `<source>` element allows you to specify alternative audio files which the browser may choose from. The browser will use the first recognized format.

The text between the `<audio>` and `</audio>` tags will only be displayed in browsers that do not support the `<audio>` element.


## HTML Audio - Browser Support
In HTML5, there are 3 supported audio formats: MP3, WAV, and OGG.

The browser support for the different formats is: 

## Browser	MP3	WAV	OGG
* `Edge/IE`	YES	NO	NO
* `Chrome`	YES	YES	YES
* `Firefox`	YES	YES	YES
* `Safari`	YES	YES	NO
* `Opera`	YES	YES	YES
## HTML Audio - Media Types
## File Format	Media Type
* `MP3`	audio/mpeg
* `OGG`	audio/ogg
* `WAV`	audio/wav

## HTML Audio - Methods, Properties, and Events
HTML5 defines DOM methods, properties, and events for the `<audio>` element.

This allows you to load, play, and pause audios, as well as set duration and volume.

There are also DOM events that can notify you when an audio begins to play, is paused, etc.


## HTML5 Audio Tags
## Tag	Description
* `<audio>`	Defines sound content
* `<source>`	Defines multiple media resources for media elements, such as `<video>` and `<audio>`