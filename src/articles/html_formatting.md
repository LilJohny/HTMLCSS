---
layout: layouts/article.njk
title: HTML Formatting
eleventyNavigation:
    key: html_formatting
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: 
  - html
  - start
---

# HTML Text Formatting

<strong>This text is bold</strong>

<em> This text is italic </em>

This is <sub>subscript</sub> and <sup>superscript</sup>

HTML Formatting Elements
In the previous chapter, you learned about the HTML style attribute.

HTML also defines special elements for defining text with a special meaning.

HTML uses elements like `<b>` and `<i>` for formatting output, like bold or italic text.

Formatting elements were designed to display special types of text:

- `<b>` - Bold text
- `<strong>` - Important text
- `<i>` - Italic text
- `<em>` - Emphasized text
- `<mark>` - Marked text
- `<small>` - Small text
- `<del>` - Deleted text
- `<ins>` - Inserted text
- `<sub>` - Subscript text
- `<sup>` - Superscript text

# HTML `<b>` and `<strong>` Elements

The HTML `<b>` element defines bold text, without any extra importance.

## Example

{% highlight html %}
<b>This text is bold</b>
{% endhighlight %}
The HTML `<strong>` element defines strong text, with added semantic "strong" importance.

## Example

{% highlight html %}
<strong>This text is strong</strong>
{% endhighlight %}

# HTML `<i>` and `<em>` Elements

The HTML `<i>` element defines italic text, without any extra importance.

## Example

{% highlight html %}
<i>This text is italic</i>
{% endhighlight %}
The HTML `<em>` element defines emphasized text, with added semantic importance.

## Example

{% highlight html %}
<em>This text is emphasized</em>
{% endhighlight %}
<strong>Note: Browsers display `<strong>` as `<b>`, and `<em>` as `<i>`. However, there is a difference in the meaning of these tags: `<b>` and `<i>` defines bold and italic text, but `<strong>` and `<em>` means that the text is "important".</strong>

# HTML `<small>` Element

The HTML `<small>` element defines smaller text:

## Example

{% highlight html %}

<h2>HTML <small>Small</small> Formatting</h2>
{% endhighlight %}
# HTML `<mark>` Element
The HTML `<mark>` element defines marked/highlighted text:

## Example

{% highlight html %}

<h2>HTML <mark>Marked</mark> Formatting</h2>
{% endhighlight %}
# HTML `<del>` Element
The HTML `<del>` element defines deleted/removed text.

## Example

{% highlight html %}

<p>My favorite color is <del>blue</del> red.</p>
{% endhighlight %}
# HTML `<ins>` Element
The HTML `<ins>` element defines inserted/added text.

## Example

{% highlight html %}

<p>My favorite <ins>color</ins> is red.</p>
{% endhighlight %}
# HTML `<sub>` Element
The HTML `<sub>` element defines subscripted text.

## Example

{% highlight html %}

<p>This is <sub>subscripted</sub> text.</p>
{% endhighlight %}
# HTML `<sup>` Element
The HTML `<sup>` element defines superscripted text.

## Example

{% highlight html %}

<p>This is <sup>superscripted</sup> text.</p>
{% endhighlight %}

# HTML Text Formatting Elements

# Tag Description

- `<b>` Defines bold text
- `<em>` Defines emphasized text
- `<i>` Defines italic text
- `<small>` Defines smaller text
- `<strong>` Defines important text
- `<sub>` Defines subscripted text
- `<sup>` Defines superscripted text
- `<ins>` Defines inserted text
- `<del>` Defines deleted text
- `<mark>` Defines marked/highlighted text
