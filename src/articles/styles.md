---
layout: layouts/article.njk
eleventyNavigation:
key: styles
title: Styles
parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html
---

# HTML Styles

# The HTML Style Attribute

Setting the style of an HTML element, can be done with the style attribute.

The HTML style attribute has the following syntax:
{% highlight html %}
<tagname style="property:value;">
{% endhighlight %}
The property is a CSS property. The value is a CSS value.

You will learn more about CSS later in this tutorial.

# Background Color

The CSS background-color property defines the background color for an HTML element.

This example sets the background color for a page to powderblue:

## Example

{% highlight html %}

<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
{% endhighlight %}
# Text Color
The CSS color property defines the text color for an HTML element:

## Example

{% highlight html %}

<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
{% endhighlight %}
# Fonts
The CSS font-family property defines the font to be used for an HTML element:

## Example

{% highlight html %}

<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>
{% endhighlight %}
# Text Size
The CSS font-size property defines the text size for an HTML element:

## Example

{% highlight html %}

<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>
{% endhighlight %}
# Text Alignment
The CSS text-align property defines the horizontal text alignment for an HTML element:

## Example

{% highlight html %}

<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>
{% endhighlight %}
# Chapter Summary
* Use the style attribute for styling HTML elements
* Use background-color for background color
* Use color for text colors
* Use font-family for text fonts
* Use font-size for text sizes
* Use text-align for text alignment
