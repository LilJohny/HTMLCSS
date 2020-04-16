---
layout: layouts/article.njk
eleventyNavigation:
  key: html_blocks
  parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: ['html','start']
title: HTML Blocks
date: 2020-01-27
---
# HTML Block and Inline Elements
Every HTML element has a default display value depending on what type of element it is.

The two display values are: block and inline.

# Block-level Elements
A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

The `<div>` element is a block-level element.
## Example
{% highlight html %}
<div>Hello World</div>
{% endhighlight %}

# Inline Elements
An inline element does not start on a new line and only takes up as much width as necessary.

This is an inline `<span>` element inside a paragraph.

## Example
{% highlight html%}
<span>Hello World</span>
{% endhighlight %}

# The `<div>` Element
The `<div>` element is often used as a container for other HTML elements.

The `<div>` element has no required attributes, but style, class and id are common.

When used together with CSS, the `<div>` element can be used to style blocks of content:

# Example
{% highlight html %}
    <div style="background-color:black;color:white;padding:20px;">
    <h2>London</h2>
    <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
    </div>
{% endhighlight %}
# The `<span>` Element
The `<span>` element is often used as a container for some text.

The `<span>` element has no required attributes, but style, class and id are common.

When used together with CSS, the `<span>` element can be used to style parts of the text:

## Example
{% highlight html %}
<h1>My <span style="color:red">Important</span> Heading</h1>
{% endhighlight %}

# HTML Grouping Tags
## Tag	Description
* `<div>`	Defines a section in a document (block-level)
* `<span>`	Defines a section in a document (inline)