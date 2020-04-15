---
layout: layouts/article.njk
eleventyNavigation:
  key: html_head
  parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html
title: HTML Head
---
# HTML Head
# The HTML `<head>` Element
The `<head>` element is a container for metadata (data about data) and is placed between the `<html>` tag and the `<body>` tag.

HTML metadata is data about the HTML document. Metadata is not displayed.

Metadata typically define the document title, character set, styles, scripts, and other meta information.

The following tags describe metadata: `<title>`, `<style>`, `<meta>`, `<link>`, `<script>`, and `<base>`.

# The HTML `<title>` Element
The `<title>` element defines the title of the document, and is required in all HTML documents.

The `<title>` element:

defines a title in the browser tab
provides a title for the page when it is added to favorites
displays a title for the page in search engine results
A simple HTML document:

## Example
{% highlight html %}
<!DOCTYPE html>
<html>

<head>
  <title>Page Title</title>
</head>

<body>
The content of the document......
</body>

</html>
{% endhighlight %}
# The HTML `<style>` Element
The `<style>` element is used to define style information for a single HTML page:

## Example
{% highlight html %}
<style>
  body {background-color: powderblue;}
  h1 {color: red;}
  p {color: blue;}
</style>
{% endhighlight %}
# The HTML `<link>` Element
The `<link>` element is used to link to external style sheets:

## Example
{% highlight html %}
<link rel="stylesheet" href="mystyle.css">
{% endhighlight %}

# The HTML `<meta>` Element
The `<meta>` element is used to specify which character set is used, page description, keywords, author, and other metadata.

Metadata is used by browsers (how to display content), by search engines (keywords), and other web services.

Define the character set used:
{% highlight html %}
<meta charset="UTF-8">
{% endhighlight %}
Define a description of your web page:
{% highlight html %}
<meta name="description" content="Free Web tutorials">
{% endhighlight %}
Define keywords for search engines:
{% highlight html %}
<meta name="keywords" content="HTML, CSS, XML, JavaScript">
{% endhighlight %}
Define the author of a page:
{% highlight html %}
<meta name="author" content="John Doe">
{% endhighlight %}
Refresh document every 30 seconds:
{% highlight html %}
<meta http-equiv="refresh" content="30">
{% endhighlight %}
Example of `<meta>` tags:

## Example
{% highlight html %}
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML,CSS,XML,JavaScript">
  <meta name="author" content="John Doe">
{% endhighlight %}
Setting The Viewport
HTML5 introduced a method to let web designers take control over the viewport, through the `<meta>` tag.

The viewport is the user's visible area of a web page. It varies with the device, and will be smaller on a mobile phone than on a computer screen.

You should include the following `<meta>` viewport element in all your web pages:
{% highlight html %}
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
{% endhighlight %}
A `<meta>` viewport element gives the browser instructions on how to control the page's dimensions and scaling.

The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.

