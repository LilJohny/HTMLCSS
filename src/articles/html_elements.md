---
layout: layouts/article.njk
eleventyNavigation:
key: html_elements
title: HTML elements
parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html
---

# HTML Elements

An HTML element usually consists of a start tag and an end tag, with the content inserted in between:

`<tagname>Content goes here...</tagname>`

The HTML element is everything from the start tag to the end tag:

`<p>My first paragraph.</p>`

HTML elements with no content are called empty elements. Empty elements do not have an end tag, such as the `<br>` element(which indicates a line break).

# Nested HTML Elements

HTML elements can be nested (elements can contain elements).

All HTML documents consist of nested HTML elements.

This example contains four HTML elements:

## Example

{% highlight html %}

<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
{% endhighlight %}

## Example Explained

The `<html>` element defines the whole document.

It has a start tag `<html>` and an end tag `</html>`.

Inside the `<html>` element is the `<body>` element.

## Example

{% highlight html %}

<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
{% endhighlight %}

The `<body>` element defines the document body.

It has a start tag `<body>` and an end tag `</body>`.

Inside the `<body>` element is two other HTML elements: `<h1>` and `<p>`.

## Example

{% highlight html %}

<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
{% endhighlight %}

The `<h1>` element defines a heading.

It has a start tag `<h1>` and an end tag `</h1>`.

The element content is: My First Heading.

{% highlight html %}

<h1>My First Heading</h1>
{% endhighlight %}

The `<p>` element defines a paragraph.

It has a start tag `<p>` and an end tag `</p>`.

The element content is: My first paragraph.

{% highlight html %}

<p>My first paragraph.</p>
{% endhighlight %}

# Do Not Forget the End Tag

Some HTML elements will display correctly, even if you forget the end tag:

## Example

{% highlight html %}

<html>
<body>

<p>This is a paragraph
<p>This is a paragraph

</body>
</html>
{% endhighlight %}

The example above works in all browsers, because the closing tag is considered optional.

<strong>Never rely on this. It might produce unexpected results and/or errors if you forget the end tag.</strong>

# Empty HTML Elements

HTML elements with no content are called empty elements.

`<br>` is an empty element without a closing tag (the `<br>` tag defines a line break):

## Example

{% highlight html %}

<p>This is a <br> paragraph with a line break.</p>
{% endhighlight %}

Empty elements can be "closed" in the opening tag like this: `<br />`.

HTML5 does not require empty elements to be closed. But if you want stricter validation, or if you need to make your document readable by XML parsers, you must close all HTML elements properly.

# HTML Is Not Case Sensitive

HTML tags are not case sensitive: `<P>` means the same as `<p>`.

The HTML5 standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.

At W3Schools we always use lowercase tags.
