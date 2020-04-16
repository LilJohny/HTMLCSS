---
layout: layouts/article.njk
eleventyNavigation:
  key: html_images
  parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: ['html','start']
title: HTML Images
date: 2020-01-24
---
# HTML Images
Images can improve the design and the appearance of a web page.

## Example
{% highlight html %}
<img src="pic_trulli.jpg" alt="Italian Trulli">
{% endhighlight %}

## Example
{% highlight html %}
<img src="img_girl.jpg" alt="Girl in a jacket">
{% endhighlight %}

## Example
{% highlight html %}
<img src="img_chania.jpg" alt="Flowers in Chania">
{% endhighlight %}

## HTML Images Syntax
In HTML, images are defined with the `<img>` tag.

The `<img>` tag is empty, it contains attributes only, and does not have a closing tag.

The src attribute specifies the URL (web address) of the image:
{% highlight html %}
<img src="url">
{% endhighlight %}
## The alt Attribute
The alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).

The value of the alt attribute should describe the image:

## Example
{% highlight html %}
<img src="img_chania.jpg" alt="Flowers in Chania">
{% endhighlight %}
If a browser cannot find an image, it will display the value of the alt attribute:

## Example
{% highlight html %}
<img src="wrongname.gif" alt="Flowers in Chania">
{% endhighlight %}
<strong>Note: The alt attribute is required. A web page will not validate correctly without it.</strong>

## Image Size - Width and Height
You can use the style attribute to specify the width and height of an image.

## Example
{% highlight html %}
<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">
{% endhighlight %}
Alternatively, you can use the width and height attributes:

## Example
{% highlight html %}
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
{% endhighlight %}
The width and height attributes always define the width and height of the image in pixels.

<strong>Note: Always specify the width and height of an image. If width and height are not specified, the page might flicker while the image loads.</strong>

## Width and Height, or Style?
The width, height, and style attributes are valid in HTML.

However, we suggest using the style attribute. It prevents styles sheets from changing the size of images:

## Example
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
<style>
img {
  width: 100%;
}
</style>
</head>
<body>

<img src="html5.gif" alt="HTML5 Icon" width="128" height="128">
<img src="html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">

</body>
</html>
{% endhighlight %}

## Images in Another Folder
If not specified, the browser expects to find the image in the same folder as the web page.

However, it is common to store images in a sub-folder. You must then include the folder name in the src attribute:

## Example
{% highlight html %}
<img src="/images/html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">
{% endhighlight %}

## Images on Another Server
Some web sites store their images on image servers.

Actually, you can access images from any web address in the world:

## Example
{% highlight html %}
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
{% endhighlight %}
You can read more about file paths in the chapter HTML File Paths.

## Animated Images
HTML allows animated GIFs:

## Example
{% highlight html %}
<img src="programming.gif" alt="Computer Man" style="width:48px;height:48px;">
{% endhighlight %}

## Image as a Link
To use an image as a link, put the <img> tag inside the <a> tag:

## Example
{% highlight html %}
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;border:0;">
</a>
{% endhighlight %}
Note: border:0; is added to prevent IE9 (and earlier) from displaying a border around the image (when the image is a link).

## Image Floating
Use the CSS float property to let the image float to the right or to the left of a text:

## Example
{% highlight html %}
<p><img src="smiley.gif" alt="Smiley face" style="float:right;width:42px;height:42px;">
The image will float to the right of the text.</p>

<p><img src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;">
The image will float to the left of the text.</p>
{% endhighlight %}
Tip: To learn more about CSS Float, read our CSS Float Tutorial.

## HTML Screen Readers
A screen reader is a software program that reads the HTML code, converts the text, and allows the user to "listen" to the content. Screen readers are useful for people who are visually impaired or learning disabled.

## Chapter Summary
* Use the HTML <img> element to define an image
* Use the HTML src attribute to define the URL of the image
* Use the HTML alt attribute to define an alternate text for an image, if it cannot be displayed
* Use the HTML width and height attributes to define the size of the image
* Use the CSS width and height properties to define the size of the image (alternatively)
* Use the CSS float property to let the image float
* Loading images takes time. Large images can slow down your page. Use images carefully.



## HTML Image Tags
## Tag	Description
* `<img`>	Defines an image
* `<map>`	Defines an image-map
* `<area>`	Defines a clickable area inside an image-map
* `<picture>`	Defines a container for multiple image resources