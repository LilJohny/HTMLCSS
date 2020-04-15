---
layout: layouts/article.njk
title: CSS Borders
eleventyNavigation:
    key: css_borders
    parent: Home
base_styles_path: ../../css/base.css
background_path: ../../img/background.jpg
css_path_prefix: ../..
tags: css
---
# CSS Borders
## CSS Border Properties
The CSS border properties allow you to specify the style, width, and color of an element's border.

## CSS Border Style
The border-style property specifies what kind of border to display.

The following values are allowed:

* `dotted` - Defines a dotted border
* `dashed` - Defines a dashed border
* `solid`- Defines a solid border
* `double` - Defines a double border
* `groove` - Defines a 3D grooved border. The effect depends on the border-color value
* `ridge`- Defines a 3D ridged border. The effect depends on the border-color value
* `inset`- Defines a 3D inset border. The effect depends on the border-color value
* `outset` - Defines a 3D outset border. The effect depends on the border-color value
* `none` - Defines no border
* `hidden` - Defines a hidden border

The border-style property can have from one to four values (for the top border, right border, bottom border, and the left border).

## Example
Demonstration of the different border styles:
```css
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}
```