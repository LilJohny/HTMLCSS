---
layout: layouts/article.njk
eleventyNavigation:
key: html_paragraphs
parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
---

# HTML Paragraphs

The HTML `<p>` element defines a paragraph:

## Example

{% highlight html %}

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
{% endhighlight %}
<strong>Note: Browsers automatically add some white space (a margin) before and after a paragraph.</strong>

# HTML Display

You cannot be sure how HTML will be displayed.

Large or small screens, and resized windows will create different results.

With HTML, you cannot change the output by adding extra spaces or extra lines in your HTML code.

The browser will remove any extra spaces and extra lines when the page is displayed:

## Example

{% highlight html %}

<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph
contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>
{% endhighlight %}
# Don't Forget the End Tag
Most browsers will display HTML correctly even if you forget the end tag:

## Example

{% highlight html %}

<p>This is a paragraph.
<p>This is another paragraph.
{% endhighlight %}
The example above will work in most browsers, but do not rely on it.

<strong>Note: Dropping the end tag can produce unexpected results or errors.</strong>

# HTML Line Breaks

The HTML `<br>` element defines a line break.

Use `<br>` if you want a line break (a new line) without starting a new paragraph:

## Example

{% highlight html %}

<p>This is<br>a paragraph<br>with line breaks.</p>
{% endhighlight %}
The `<br>` tag is an empty tag, which means that it has no end tag.

# The Poem Problem

This poem will display on a single line:

## Example

{% highlight html %}

<p>
  My Bonnie lies over the ocean.

My Bonnie lies over the sea.

My Bonnie lies over the ocean.

Oh, bring back my Bonnie to me.

</p>
{% endhighlight %}
# The HTML `<pre>` Element
The HTML `<pre>` element defines preformatted text.

The text inside a `<pre>` element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:

## Example

{% highlight html %}

<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>

{% endhighlight %}

# HTML Tag Reference

# Tag Description

- `<p>` Defines a paragraph
- `<br>` Inserts a single line break
- `<pre>` Defines pre-formatted text
