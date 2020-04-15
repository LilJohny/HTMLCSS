---
layout: layouts/article.njk
eleventyNavigation:
  key: html_links
  parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html
title: HTML Links
---
# HTML Links
Links are found in nearly all web pages. Links allow users to click their way from page to page.

## HTML Links - Hyperlinks
HTML links are hyperlinks.

You can click on a link and jump to another document.

When you move the mouse over a link, the mouse arrow will turn into a little hand.

<strong>Note: A link does not have to be text. It can be an image or any other HTML element.</strong>

## HTML Links - Syntax
Hyperlinks are defined with the HTML `<a>` tag:
{% highlight html %}
<a href="url">link text</a>
{% endhighlight %}

## Example
{% highlight html %}
<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
{% endhighlight %}
The href attribute specifies the destination address (https://www.w3schools.com/html/) of the link.

The link text is the visible part (Visit our HTML tutorial).

Clicking on the link text will send you to the specified address.

<strong>Note: Without a forward slash at the end of subfolder addresses, you might generate two requests to the server. Many servers will automatically add a forward slash to the end of the address, and then create a new request.</strong>

## Local Links
The example above used an absolute URL (a full web address).

A local link (link to the same web site) is specified with a relative URL (without https://www....).

## Example
{% highlight html %}
<a href="html_images.asp">HTML Images</a>
{% endhighlight %}

## HTML Links - The target Attribute
The target attribute specifies where to open the linked document.

The target attribute can have one of the following values:

* _blank - Opens the linked document in a new window or tab
* _self - Opens the linked document in the same window/tab as it was clicked (this is default)
* _parent - Opens the linked document in the parent frame
* _top - Opens the linked document in the full body of the window
* framename - Opens the linked document in a named frame
This example will open the linked document in a new browser window/tab:

## Example
{% highlight html %}
<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
{% endhighlight %}
<strong>Tip: If your webpage is locked in a frame, you can use target="_top" to break out of the frame:</strong>

## Example
{% highlight html %}
<a href="https://www.w3schools.com/html/" target="_top">HTML5 tutorial!</a>
{% endhighlight %}

## HTML Links - Image as a Link
It is common to use images as links:

## Example
{% highlight html %}
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;border:0;">
</a>
{% endhighlight %}
<strong>Note: border:0; is added to prevent IE9 (and earlier) from displaying a border around the image (when the image is a link).</strong>

## Button as a Link
To use an HTML button as a link, you have to add some JavaScript code.

JavaScript allows you to specify what happens at certain events, such as a click of a button:

## Example
{% highlight html %}
<button onclick="document.location = 'default.asp'">HTML Tutorial</button>
{% endhighlight %}
<strong>Tip: Learn more about JavaScript in our JavaScript Tutorial.</strong>

## Link Titles
The title attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.

## Example
{% highlight html %}
<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visit our HTML Tutorial</a>
{% endhighlight %}

## External Paths
External pages can be referenced with a full URL or with a path relative to the current web page.

This example uses a full URL to link to a web page:

## Example
{% highlight html %}
<a href="https://www.w3schools.com/html/default.asp">HTML tutorial</a>
{% endhighlight %}

This example links to a page located in the html folder on the current web site:

## Example
{% highlight html %}
<a href="/html/default.asp">HTML tutorial</a>
{% endhighlight %}
This example links to a page located in the same folder as the current page:

## Example
{% highlight html %}
<a href="default.asp">HTML tutorial</a>
{% endhighlight %}

## Chapter Summary
* Use the `<a>` element to define a link
* Use the href attribute to define the link address
* Use the target attribute to define where to open the linked document
* Use the `<img>` element (inside `<a>`) to use an image as a link

## HTML Link Tags
## Tag	Description
* `<a>`	Defines a hyperlink