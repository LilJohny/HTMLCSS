---
layout: layouts/article.njk
eleventyNavigation:
  key: html_comments
  parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: ['html','start']
title: HTML Comments
date: 2020-01-22
---
# HTML Comments
Comment tags are used to insert comments in the HTML source code.

# HTML Comment Tags
You can add comments to your HTML source by using the following syntax:
{% highlight html %}
<!-- Write your comments here -->
{% endhighlight %}
Notice that there is an exclamation point (!) in the opening tag, but not in the closing tag.

<strong>Note: Comments are not displayed by the browser, but they can help document your HTML source code.</strong>

With comments you can place notifications and reminders in your HTML:

## Example
{% highlight html %}
<!-- This is a comment -->

<p>This is a paragraph.</p>

<!-- Remember to add more information here -->
{% endhighlight %}
Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors:

## Example
{% highlight html %}
<!-- Do not display this image at the moment
<img border="0" src="pic_trulli.jpg" alt="Trulli">
-->
{% endhighlight %}