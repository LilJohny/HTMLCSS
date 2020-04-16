---
layout: layouts/article.njk
title: HTML Forms
eleventyNavigation:
    key: html_forms
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: ['html','start']
date: 2020-01-30
---
# HTML Forms

## The <form> Element

The HTML `<form>` element defines a form that is used to collect user input:
```html
<form>
.
form elements
.
</form>
```
An HTML form contains form elements.

Form elements are different types of input elements, like: text fields, checkboxes, radio buttons, submit buttons, and more.

## The <input> Element
The `<input>` element is the most important form element.

The `<input>` element is displayed in several ways, depending on the type attribute.

Here are some examples:

## Type	Description
* `<input type="text">`	Defines a single-line text input field
* `<input type="radio">`	Defines a radio button (for selecting one of many choices)
* `<input type="submit">`	Defines a submit button (for submitting the form)



## Text Fields
`<input type="text">` defines a single-line input field for text input.

## Example
A form with two text input fields:
```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

<strong>Note: The form itself is not visible. Also note that the default width of an input field is 20 characters.</strong>

## The `<label>` Element
Notice the use of the `<label>` element in the example above.

The `<label>` tag defines a label for many form elements.

The `<label>` element is useful for screen-reader users, because the screen-reader will read out load the label when the user is focused on the input element.

The `<label>` element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the `<label>` element, it toggles the radio button/checkbox.

The for attribute of the `<label>` tag should be equal to the id attribute of the `<input>` element to bind them together.

Radio Buttons
`<input type="radio">` defines a radio button.

Radio buttons let a user select ONE of a limited number of choices.

## Example
A form with radio buttons:
```html
<form>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label><br>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label><br>
  <input type="radio" id="other" name="gender" value="other">
  <label for="other">Other</label>
</form>
```

`<input type="submit">` defines a button for submitting the form data to a form-handler.

The form-handler is typically a page on the server with a script for processing input data.

The form-handler is specified in the form's action attribute.

## Example
A form with a submit button:
```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```

## The Action Attribute
The action attribute defines the action to be performed when the form is submitted.

Usually, the form data is sent to a page on the server when the user clicks on the submit button.

In the example above, the form data is sent to a page on the server called "/action_page.php". This page contains a server-side script that handles the form data:
```html
<form action="/action_page.php">
```
If the action attribute is omitted, the action is set to the current page.

## The Target Attribute
The target attribute specifies if the submitted result will open in a new browser tab, a frame, or in the current window.

The default value is "_self" which means the form will be submitted in the current window.

To make the form result open in a new browser tab, use the value "_blank".

## Example
Here, the submitted result will open in a new browser tab:
```html
<form action="/action_page.php" target="_blank">
```
Other legal values are "_parent", "_top", or a name representing the name of an iframe.

## The Method Attribute
The method attribute specifies the HTTP method (GET or POST) to be used when submitting the form data.

## Example
Use the GET method when submitting the form:
```html
<form action="/action_page.php" method="get">
```
or:

## Example
Use the POST method when submitting the form:
```html
<form action="/action_page.php" method="post">
```
## When to Use GET?
The default HTTP method when submitting form data is GET.

However, when GET is used, the form data will be visible in the page's address field:

`/action_page.php?firstname=John&lastname=Doe`
## Notes on GET:

Appends form-data into the URL in name/value pairs
The length of a URL is limited (2048 characters)
Never use GET to send sensitive data! (will be visible in the URL)
Useful for form submissions where a user wants to bookmark the result
GET is better for non-secure data, like query strings in Google
## When to Use POST?
Always use POST if the form data contains sensitive or personal information. The POST method does not display the form data in the page address field.

## Notes on POST:

POST has no size limitations, and can be used to send large amounts of data.
Form submissions with POST cannot be bookmarked
The Name Attribute
Each input field must have a name attribute to be submitted.

If the name attribute is omitted, the data of that input field will not be sent at all.

## Example
This example will not submit the value of the "First name" input field: 
```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" value="John"><br><br>
  <input type="submit" value="Submit">
</form>
```
HTML Exercises
Test Yourself With Exercises

## Here is the list of all `<form>` attributes:

## Attribute	Description
* `accept-charset`	Specifies the charset used in the submitted form (default: the page charset).
* `action`	Specifies an address (url) where to submit the form (default: the submitting page).
* `autocomplete`	Specifies if the browser should autocomplete the form (default: on).
* `enctype`	Specifies the encoding of the submitted data (default: is url-encoded).
* `method`	Specifies the HTTP method used when submitting the form (default: GET).
* `name`	Specifies a name used to identify the form (for DOM usage: document.forms.name).
* `novalidate`	Specifies that the browser should not validate the form.
* `target`	Specifies the target of the address in the action attribute (default: _self).