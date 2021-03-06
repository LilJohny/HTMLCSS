---
layout: layouts/article.njk
title: HTML Youtube
eleventyNavigation:
    key: html_youtube
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html
---
# HTML YouTube Videos
The easiest way to play videos in HTML, is to use YouTube.

## Struggling with Video Formats?
Earlier in this tutorial, you have seen that you might have to convert your videos to different formats to make them play in all browsers.

Converting videos to different formats can be difficult and time-consuming.

An easier solution is to let YouTube play the videos in your web page.

## YouTube Video Id
YouTube will display an id (like tgbNymZ7vqY), when you save (or play) a video.

You can use this id, and refer to your video in the HTML code.

## Playing a YouTube Video in HTML
To play your video on a web page, do the following:

* Upload the video to YouTube
* Take a note of the video id
* Define an `<iframe>` element in your web page
* Let the src attribute point to the video URL
* Use the width and height attributes to specify the dimension of the player
* Add any other parameters to the URL (see below)
## Example - Using iFrame (recommended)
```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
```
## YouTube Autoplay
You can have your video start playing automatically when a user visits that page by adding a simple parameter to your YouTube URL.

<strong>Note: Take careful consideration when deciding to autoplay your videos. Automatically starting a video can annoy your visitor and end up causing more harm than good.</strong>

Value 0 (default): The video will not play automatically when the player loads.

Value 1: The video will play automatically when the player loads.

## YouTube - Autoplay
```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
</iframe>
```
## YouTube Playlist
A comma separated list of videos to play (in addition to the original URL).

## YouTube Loop
Value 0 (default): The video will play only once.

Value 1: The video will loop (forever).

## YouTube - Loop
```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
</iframe>
```
## YouTube Controls
Value 0: Player controls does not display.

Value 1 (default): Player controls display.

YouTube - Controls
```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
</iframe>
```
## YouTube - Using `<object>` or `<embed>`
<strong>Note: YouTube `<object>` and `<embed>` were deprecated from January 2015. You should migrate your videos to use `<iframe>` instead.</strong>

## Example - Using <object> (deprecated)
```html
<object width="420" height="315"
data="https://www.youtube.com/embed/tgbNymZ7vqY">
</object>
```
## Example - Using <embed> (deprecated)
```html
<embed width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
```