---
layout: layouts/article.njk
eleventyNavigation:
  key: html_quotations
  parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html start
title: HTML Quotations
---
# HTML Quotation and Citation Elements
Quotation
Here is a quote from WWF's website:

> For nearly 60 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by more than one million members in the United States and close to five million globally.
# HTML `<q>` for Short Quotations
The HTML `<q>` element defines a short quotation.

Browsers usually insert quotation marks around the `<q>` element.

## Example
{% highlight html %}
    <p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
{% endhighlight %}
# HTML `<blockquote>` for Quotations
The HTML `<blockquote>` element defines a section that is quoted from another source.

Browsers usually indent `<blockquote>` elements.

## Example
{% highlight html %}
    <p>Here is a quote from WWF's website:</p>
    <blockquote cite="http://www.worldwildlife.org/who/index.html">
    For 50 years, WWF has been protecting the future of nature.
    The world's leading conservation organization,
    WWF works in 100 countries and is supported by
    1.2 million members in the United States and
    close to 5 million globally.
</blockquote>
{% endhighlight %}

# HTML `<abbr>` for Abbreviations
The HTML `<abbr>` element defines an abbreviation or an acronym.

Marking abbreviations can give useful information to browsers, translation systems and search-engines.

## Example
{% highlight html %}
    <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
{% endhighlight %}
# HTML `<address>` for Contact Information

The HTML `<address>` element defines contact information (author/owner) of a document or an article.

The `<address>` element is usually displayed in italic. Most browsers will add a line break before and after the element.

## Example
{% highlight html %}
    <address>
        Written by John Doe.<br>
        Visit us at:<br>
        Example.com<br>
        Box 564, Disneyland<br>
        USA
    </address>
{% endhighlight %}
# HTML `<cite>` for Work Title
The HTML `<cite>` element defines the title of a work.

Browsers usually display `<cite>` elements in italic.

## Example
{% highlight html %}
    <p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
    HTML <bdo> for Bi-Directional Override
{% endhighlight %}
# The HTML `<bdo>` element defines bi-directional override.

The `<bdo>` element is used to override the current text direction:

## Example
{% highlight html %}
    <bdo dir="rtl">This text will be written from right to left</bdo>
{% endhighlight %}

# HTML Quotation and Citation Elements
## Tag	Description
* `<abbr>`	Defines an abbreviation or acronym
* `<address>`	Defines contact information for the author/owner of a document
* `<bdo>`	Defines the text direction
* `<blockquote>`	Defines a section that is quoted from another source
* `<cite>`	Defines the title of a work
* `<q>`	Defines a short inline quotation