---
layout: layouts/article.njk
title: HTML attributes
eleventyNavigation:
    key: html_attributes
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html
---

# HTML Attributes

Attributes provide additional information about HTML elements.

# HTML Attributes

- All HTML elements can have attributes
- Attributes provide additional information about an element
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"

# The href Attribute

HTML links are defined with the `<a>` tag. The link address is specified in the href attribute:

## Example

{% highlight html %}
<a href="https://www.w3schools.com">This is a link</a>
{% endhighlight %}


You will learn more about links and the `<a>` tag later in this tutorial.

# The src Attribute

HTML images are defined with the `<img>` tag.

The filename of the image source is specified in the src attribute:

## Example

{% highlight html %}
<img src="img_girl.jpg">
{% endhighlight %}

# The width and height Attributes

HTML images also have width and height attributes, which specifies the width and height of the image:

## Example

{% highlight html %}
<img src="img_girl.jpg" width="500" height="600">
{% endhighlight %}

The width and height are specified in pixels by default; so width="500" means 500 pixels wide.

You will learn more about images in our HTML Images chapter.

# The alt Attribute

The alt attribute specifies an alternative text to be used, if an image cannot be displayed.

The value of the alt attribute can be read by screen readers. This way, someone "listening" to the webpage, e.g. a vision impaired person, can "hear" the element.

## Example

{% highlight html %}
<img src="img_girl.jpg" alt="Girl with a jacket">
{% endhighlight %}

The alt attribute is also useful if the image cannot be displayed (e.g. if it does not exist):

## Example

See what happens if we try to display an image that does not exist:

{% highlight html %}
<img src="img_typo.jpg" alt="Girl with a jacket">
{% endhighlight %}

# The style Attribute

The style attribute is used to specify the styling of an element, like color, font, size etc.

## Example

{% highlight html %}
<p style="color:red">This is a red paragraph.</p>
{% endhighlight %}

You will learn more about styling later in this tutorial, and in our CSS Tutorial.

# The lang Attribute

The language of the document can be declared in the `<html>` tag.

The language is declared with the lang attribute.

Declaring a language is important for accessibility applications (screen readers) and search engines:

{% highlight html %}
<!DOCTYPE html>
<html lang="en-US">
<body>

...

</body>
</html>
{% endhighlight %}

The first two letters specify the language (en). If there is a dialect, add two more letters (US).

# The title Attribute

Here, a title attribute is added to the `<p>` element. The value of the title attribute will be displayed as a tooltip when you mouse over the paragraph:

## Example

{% highlight html %}
<p title="I'm a tooltip">
This is a paragraph.
</p>
{% endhighlight %}

# We Suggest: Use Lowercase Attributes

The HTML5 standard does not require lowercase attribute names.

The title attribute can be written with uppercase or lowercase like title or TITLE.

W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.

At W3Schools we always use lowercase attribute names.

# We Suggest: Quote Attribute Values

The HTML5 standard does not require quotes around attribute values.

The href attribute can be written without quotes:

## Bad

{% highlight html %}
<a href=https://www.w3schools.com>
{% endhighlight %}

## Good

{% highlight html %}
<a href="https://www.w3schools.com">
{% endhighlight %}

W3C <strong>recommends</strong> quotes in HTML, and <strong>demands</strong> quotes for stricter document types like XHTML.

Sometimes it is <strong>necessary</strong> to use quotes. This example will not display the title attribute correctly, because it contains a space:

## Example

{% highlight html %}
<p title=About W3Schools>
{% endhighlight %}

Using quotes are the most common. Omitting quotes can produce errors.
At W3Schools we <strong>always</strong> use quotes around attribute values.

# Single or Double Quotes?

Double quotes around attribute values are the most common in HTML, but single quotes can also be used.

In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:

{% highlight html %}
<p title='John "ShotGun" Nelson'>
{% endhighlight %}

Or vice versa:

{% highlight html %}
<p title="John 'ShotGun' Nelson">
{% endhighlight %}

# Chapter Summary

- All HTML elements can have attributes
- The title attribute provides additional "tool-tip" information
- The href attribute provides address information for links
- The width and height attributes provide size information for images
- The alt attribute provides text for screen readers
- At W3Schools we always use lowercase attribute names
- At W3Schools we always quote attribute values

# HTML Attributes

Below is an alphabetical list of some attributes often used in HTML, which you will learn more about in this tutorial:

## Attribute Description

- alt Specifies an alternative text for an image, when the image cannot be displayed
- disabled Specifies that an input element should be disabled
- href Specifies the URL (web address) for a link
- id Specifies a unique id for an element
- src Specifies the URL (web address) for an image
- style Specifies an inline CSS style for an element
- title Specifies extra information about an element (displayed as a tool tip)
