---
layout: layouts/article.njk
eleventyNavigation:
key: html_headings
parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
---
# HTML Headings
## Headings
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
# HTML Headings
Headings are defined with the `<h1>` to `<h6>` tags.

`<h1>` defines the most important heading. `<h6>` defines the least important heading.

## Example
```
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```
<strong>Note: Browsers automatically add some white space (a margin) before and after a heading.</strong>

<strong> Headings Are Important </strong>
Search engines use the headings to index the structure and content of your web pages.

Users often skim a page by its headings. It is important to use headings to show the document structure.

`<h1>` headings should be used for main headings, followed by `<h2>` headings, then the less important `<h3>`, and so on.

<strong>Note: Use HTML headings for headings only. Don't use headings to make text BIG or bold.</strong>

# Bigger Headings
Each HTML heading has a default size. However, you can specify the size for any heading with the style attribute, using the CSS font-size property:

## Example
```
<h1 style="font-size:60px;">Heading 1</h1>
```
# HTML Horizontal Rules
The `<hr>` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.

The `<hr>` element is used to separate content (or define a change) in an HTML page:

# Example
```
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>
```
# The HTML `<head>` Element
The HTML `<head>` element is a container for metadata. HTML metadata is data about the HTML document. Metadata is not displayed.

The `<head>` element is placed between the `<html>` tag and the `<body>` tag:

# Example
```
<!DOCTYPE html>
<html>

<head>
  <title>My First HTML</title>
  <meta charset="UTF-8">
</head>

<body>
```
<strong>Note: Metadata typically define the document title, character set, styles, scripts, and other meta information.</strong>

# How to View HTML Source?
Have you ever seen a Web page and wondered "Hey! How did they do that?"

### View HTML Source Code:
Right-click in an HTML page and select "View Page Source" (in Chrome) or "View Source" (in Edge), or similar in other browsers. This will open a window containing the HTML source code of the page.

### Inspect an HTML Element:
Right-click on an element (or a blank area), and choose "Inspect" or "Inspect Element" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.

# HTML Tag Reference
W3Schools' tag reference contains additional information about these tags and their attributes.

You will learn more about HTML tags and attributes in the next chapters of this tutorial.

# Tag	Description
* `<html>`	Defines the root of an HTML document
* `<body>`	Defines the document's body
* `<head>`	A container for all the head elements (title, scripts, styles, meta information, and more)
* `<h1>` to <h6>	Defines HTML headings
* `<hr>`	Defines a thematic change in the content