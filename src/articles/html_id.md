---
layout: layouts/article.njk
eleventyNavigation:
  key: html_id
  parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html
title: HTML Id
---
# HTML The id Attribute
## Using The id Attribute
The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).

The id value can be used by CSS and JavaScript to perform certain tasks for the element with the specific id value.

In CSS, to select an element with a specific id, write a hash (#) character, followed by the id of the element:

## Example
Use CSS to style an element with the id "myHeader":
{% highlight html %}
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>

<h1 id="myHeader">My Header</h1>
{% endhighlight %}

<strong>Tip: The id attribute can be used on any HTML element.</strong>

<strong>Note: The id value is case-sensitive.</strong>

<strong>Note: The id value must contain at least one character, and must not contain whitespace (spaces, tabs, etc.).</strong>

## Difference Between Class and ID
An HTML element can only have one unique id that belongs to that single element, while a class name can be used by multiple elements:

## Example
{% highlight html %}
<style>
/* Style the element with the id "myHeader" */
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}

/* Style all elements with the class name "city" */
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>

<!-- A unique element -->
<h1 id="myHeader">My Cities</h1>

<!-- Multiple similar elements -->
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>
{% endhighlight %}
<strong>Tip: You can learn much more about CSS in our CSS Tutorial.</strong>


## Bookmarks with ID and Links
HTML bookmarks are used to allow readers to jump to specific parts of a Web page.

Bookmarks can be useful if your webpage is very long.

To make a bookmark, you must first create the bookmark, and then add a link to it.

When the link is clicked, the page will scroll to the location with the bookmark.

## Example
First, create a bookmark with the id attribute:

{% highlight html %}
  <h2 id="C4">Chapter 4</h2>
{% endhighlight %}

Then, add a link to the bookmark ("Jump to Chapter 4"), from within the same page:

{% highlight html %}
  <h2 id="C4">Chapter 4</h2>
  <a href="#C4">Jump to Chapter 4</a>
{% endhighlight %}

Or, add a link to the bookmark ("Jump to Chapter 4"), from another page:

## Example
{% highlight html %}
<a href="html_demo.html#C4">Jump to Chapter 4</a>
{% endhighlight %}
