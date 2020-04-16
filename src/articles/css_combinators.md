---
layout: layouts/article.njk
title: CSS Combinators
eleventyNavigation:
    key: css_combinators
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: css
---
# CSS Combinators
## CSS Combinators
A combinator is something that explains the relationship between the selectors.

A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:

* descendant selector (space)
* child selector (>)
* adjacent sibling selector (+)
* general sibling selector (~)
## Descendant Selector
The descendant selector matches all elements that are descendants of a specified element.

The following example selects all `<p>` elements inside `<div>` elements: 

## Example
```css
div p {
  background-color: yellow;
}
```
## Child Selector
The child selector selects all elements that are the children of a specified element.

The following example selects all `<p>` elements that are children of a `<div>` element:

## Example
```css
div > p {
  background-color: yellow;
}
```
## Adjacent Sibling Selector
The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element.

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

The following example selects all `<p>` elements that are placed immediately after `<div>` elements:

## Example
```css
div + p {
  background-color: yellow;
}
```

## General Sibling Selector
The general sibling selector selects all elements that are siblings of a specified element.

The following example selects all `<p>` elements that are siblings of `<div>` elements: 

## Example
```css
div ~ p {
  background-color: yellow;
}
```

## All CSS Combinator Selectors
## Selector	Example	Example description
* `element element`	`div p`	Selects all <p> elements inside <div> elements
* `element>element`	`div > p`	Selects all <p> elements where the parent is a <div> element
* `element+element`	`div + p`	Selects all <p> elements that are placed immediately after <div> elements
* `element1~element2`	p ~ ul	Selects every `<ul>` element that are preceded by a `<p>` element