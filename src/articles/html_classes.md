---
layout: layouts/article.njk
eleventyNavigation:
  key: html_classes
  parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: html
title: HTML Classes
---
# HTML The class Attribute
## Using The class Attribute
The HTML class attribute is used to define equal styles for elements with the same class name.

So, all HTML elements with the same class attribute will get the same style.

Here we have three `<div>` elements that point to the same class name:

## Example
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
<style>
.cities {
  background-color: black;
  color: white;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="cities">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="cities">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>

<div class="cities">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

</body>
</html>
{% endhighlight %}