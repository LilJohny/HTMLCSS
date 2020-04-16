---
layout: layouts/article.njk
eleventyNavigation:
  key: html_iframes
  parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html
title: HTML Iframes
---
# HTML Iframes
An iframe is used to display a web page within a web page.


## Iframe Syntax
An HTML iframe is defined with the `<iframe>` tag:
{% highlight html %}
  <iframe src="URL"></iframe>
{% endhighlight %}
The src attribute specifies the URL (web address) of the inline frame page.

## Iframe - Set Height and Width
Use the height and width attributes to specify the size of the iframe.

The height and width are specified in pixels by default:

## Example
{% highlight html %}
<iframe src="demo_iframe.htm" height="200" width="300"></iframe>
{% endhighlight %}
Or you can use CSS to set the height and width of the iframe:

## Example
{% highlight html %}
<iframe src="demo_iframe.htm" style="height:200px;width:300px;"></iframe>
{% endhighlight %}

## Iframe - Remove the Border
By default, an iframe has a border around it.

To remove the border, add the style attribute and use the CSS border property:

## Example
{% highlight html %}
<iframe src="demo_iframe.htm" style="border:none;"></iframe>
{% endhighlight %}
With CSS, you can also change the size, style and color of the iframe's border:

## Example
{% highlight html %}
<iframe src="demo_iframe.htm" style="border:2px solid red;"></iframe>
{% endhighlight %}

## Iframe - Target for a Link
An iframe can be used as the target frame for a link.

The target attribute of the link must refer to the name attribute of the iframe:

## Example
{% highlight html %}
<iframe src="demo_iframe.htm" name="iframe_a"></iframe>

<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
{% endhighlight %}

# HTML iframe Tag
## Tag	Description
* `<iframe>`	Defines an inline frame