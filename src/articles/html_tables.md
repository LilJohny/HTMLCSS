---
layout: layouts/article.njk
eleventyNavigation:
  key: html_tables
  parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: ['html','start']
title: HTML Tables
date: 2020-01-25
---
# HTML Tables

## Defining an HTML Table
An HTML table is defined with the `<table>` tag.

Each table row is defined with the `<tr`> tag. A table header is defined with the `<th>` tag. By default, table headings are bold and centered. A table data/cell is defined with the `<td>` tag.

## Example
{% highlight html %}
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
{% endhighlight %}

<strong>Note: The `<td>` elements are the data containers of the table.</strong>
They can contain all sorts of HTML elements; text, images, lists, other tables, etc.

## HTML Table - Adding a Border
If you do not specify a border for the table, it will be displayed without borders.

A border is set using the CSS border property:

## Example
{% highlight html %}
table, th, td {
  border: 1px solid black;
}
{% endhighlight %}
Remember to define borders for both the table and the table cells.

## HTML Table - Collapsed Borders
If you want the borders to collapse into one border, add the CSS border-collapse property:

## Example
{% highlight html %}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
{% endhighlight %}
## HTML Table - Adding Cell Padding
Cell padding specifies the space between the cell content and its borders.

If you do not specify a padding, the table cells will be displayed without padding.

To set the padding, use the CSS padding property:

## Example
{% highlight css %}
th, td {
  padding: 15px;
}
{% endhighlight %}

## HTML Table - Left-align Headings
By default, table headings are bold and centered.

To left-align the table headings, use the CSS text-align property:

## Example
{% highlight css %}
th {
  text-align: left;
}
{% endhighlight %}

## HTML Table - Adding Border Spacing
Border spacing specifies the space between the cells.

To set the border spacing for a table, use the CSS border-spacing property:

## Example
{% highlight css %}
table {
  border-spacing: 5px;
}
{% endhighlight %}
<strong>Note: If the table has collapsed borders, border-spacing has no effect.</strong>

## HTML Table - Cells that Span Many Columns
To make a cell span more than one column, use the colspan attribute:

## Example
{% highlight html %}
<table style="width:100%">
  <tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
  </tr>
  <tr>
    <td>Bill Gates</td>
    <td>55577854</td>
    <td>55577855</td>
  </tr>
</table>
{% endhighlight %}

## HTML Table - Cells that Span Many Rows
To make a cell span more than one row, use the rowspan attribute:

## Example
{% highlight html %}
<table style="width:100%">
  <tr>
    <th>Name:</th>
    <td>Bill Gates</td>
  </tr>
  <tr>
    <th rowspan="2">Telephone:</th>
    <td>55577854</td>
  </tr>
  <tr>
    <td>55577855</td>
  </tr>
</table>
{% endhighlight %}

## HTML Table - Adding a Caption
To add a caption to a table, use the `<caption>` tag:

## Example
{% highlight html %}
<table style="width:100%">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$50</td>
  </tr>
</table>
{% endhighlight %}
<strong>Note: The `<caption>` tag must be inserted immediately after the `<table>` tag.</strong>

## A Special Style for One Table
To define a special style for a special table, add an id attribute to the table:

## Example
{% highlight html %}
<table id="t01">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
{% endhighlight %}
Now you can define a special style for this table:
{% highlight css %}
table#t01 {
  width: 100%;
  background-color: #f1f1c1;
}
{% endhighlight %}
And add more styles:
{% highlight css %}
table#t01 tr:nth-child(even) {
  background-color: #eee;
}
table#t01 tr:nth-child(odd) {
  background-color: #fff;
}
table#t01 th {
  color: white;
  background-color: black;
}
{% endhighlight %}

## Chapter Summary
* Use the HTML `<table>` element to define a table
* Use the HTML `<tr>` element to define a table row
* Use the HTML `<td>` element to define a table data
* Use the HTML `<th>` element to define a table heading
* Use the HTML `<caption>` element to define a table caption
* Use the CSS border property to define a border
* Use the CSS border-collapse property to collapse cell borders
* Use the CSS padding property to add padding to cells
* Use the CSS text-align property to align cell text
* Use the CSS border-spacing property to set the spacing between cells
* Use the colspan attribute to make a cell span many columns
* Use the rowspan attribute to make a cell span many rows
* Use the id attribute to uniquely define one table


## HTML Table Tags
## Tag	Description
* `<table>`	Defines a table
* `<th>`	Defines a header cell in a table
* `<tr>`	Defines a row in a table
* `<td>`	Defines a cell in a table
* `<caption>`	Defines a table caption
* `<colgroup>`	Specifies a group of one or more columns in a table for formatting
* `<col>`	Specifies column properties for each column within a `<colgroup>` element
* `<thead>`	Groups the header content in a table
* `<tbody>`	Groups the body content in a table
* `<tfoot>`	Groups the footer content in a table