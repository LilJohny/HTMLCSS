---
layout: layouts/article.njk
eleventyNavigation:
  key: html_lists
  parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html
title: HTML Lists
---
# HTML Lists
## HTML List Example
An Unordered List:
* Item
* Item
* Item
* Item
An Ordered List:
1. First item
2. Second item
3. Third item
4. Fourth item
## Unordered HTML List
An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.

The list items will be marked with bullets (small black circles) by default:

## Example
{% highlight html %}
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
{% endhighlight %}

Unordered HTML List - Choose List Item Marker
The CSS list-style-type property is used to define the style of the list item marker:

## Value	Description
* disc	Sets the list item marker to a bullet (default)
* circle	Sets the list item marker to a circle
* square	Sets the list item marker to a square
* none	The list items will not be marked
## Example - Disc
{% highlight html %}
<ul style="list-style-type:disc;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
{% endhighlight %}

## Example - Circle
{% highlight html %}
<ul style="list-style-type:circle;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
{% endhighlight %}

## Example - Square
{% highlight html %}
<ul style="list-style-type:square;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
{% endhighlight %}

## Example - None
{% highlight html %}
<ul style="list-style-type:none;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
{% endhighlight %}

Ordered HTML List
An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.

The list items will be marked with numbers by default:

## Example
{% highlight html %}
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
{% endhighlight %}

## Ordered HTML List - The Type Attribute
The type attribute of the `<ol>` tag, defines the type of the list item marker:

## Type	Description
* type="1"	The list items will be numbered with numbers (default)
* type="A"	The list items will be numbered with uppercase letters
* type="a"	The list items will be numbered with lowercase letters
* type="I"	The list items will be numbered with uppercase roman numbers
* type="i"	The list items will be numbered with lowercase roman numbers
Numbers:
{% highlight html %}
<ol type="1">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
{% endhighlight %}

Uppercase Letters:
{% highlight html %}
<ol type="A">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
{% endhighlight %}

Lowercase Letters:
{% highlight html %}
<ol type="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
{% endhighlight %}

Uppercase Roman Numbers:
{% highlight html %}
<ol type="I">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
{% endhighlight %}

Lowercase Roman Numbers:
{% highlight html %}
<ol type="i">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
{% endhighlight %}

## HTML Description Lists
HTML also supports description lists.

A description list is a list of terms, with a description of each term.

The `<dl>` tag defines the description list, the `<dt>` tag defines the term (name), and the `<dd>` tag describes each term:

## Example
{% highlight html %}
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
{% endhighlight %}

## Nested HTML Lists
List can be nested (lists inside lists):

## Example
{% highlight html %}
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
{% endhighlight %}

<strong> Note: List items can contain new list, and other HTML elements, like images and links, etc.</strong>

## Control List Counting
By default, an ordered list will start counting from 1. If you want to start counting from a specified number, you can use the start attribute:

## Example
{% highlight html %}
<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
{% endhighlight %}

## Horizontal List with CSS
HTML lists can be styled in many different ways with CSS.

One popular way is to style a list horizontally, to create a navigation menu:

## Example
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
</style>
</head>
<body>

<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

</body>
</html>
{% endhighlight %}
<strong>Tip: You can learn much more about CSS in our CSS Tutorial.</strong>

## Chapter Summary
* Use the HTML `<ul>` element to define an unordered list
* Use the CSS list-style-type property to define the list item marker
* Use the HTML `<ol>` element to define an ordered list
* Use the HTML type attribute to define the numbering type
* Use the HTML `<li>` element to define a list item
* Use the HTML `<dl>` element to define a description list
* Use the HTML `<dt>` element to define the description term
* Use the HTML `<dd>` element to describe the term in a description list
Lists can be nested inside lists
List items can contain other HTML elements
Use the CSS property float:left or display:inline to display a list horizontally

## HTML List Tags
## Tag	Description
* `<ul>`	Defines an unordered list
* `<ol>`	Defines an ordered list
* `<li>`	Defines a list item
* `<dl>`	Defines a description list
* `<dt>`	Defines a term in a description list
* `<dd>`	Describes the term in a description list