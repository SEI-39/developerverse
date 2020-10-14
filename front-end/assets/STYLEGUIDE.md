# <Developer-Verse/>

To begin: DeveloperVerse draws inspiration from 80's futurism, and uses a dark color theme. Its style elements evoke the terminal interface of classic computers, while using modern spacing and layout conventions to maximize readability. A palette of colors, along with wireframing and visual examples of page layout, are all available to view in the "DeveloperVerse_Mock_A1.jpg" file.

## Best Practices

A Universal.css stylesheet will be implemented. This can be imported into every page and component, allowing the assignment of colors and basic styling programatically using HTML classNames. Developers should review the classes provided by Universal.css and use them when styling new elements wherever possible. This is most important for the color - if we want to make changes later on, it will be essential that we be able to change, for example, a single color value, and have all elements update seamlessly. Note that a class that applies "background: none" will be provided as well.

## Colors

#### Site Background - #0D0D0D "Black"

#### Header Background - #201A26 "Purple"

#### Element Background - #323033 "Medium Gray"

#### Headings - #B0B0B0 "Light Gray"

#### Paragraph - #D9D9D9 "White"

#### Title, Accents - #F2CE18 "Yellow"

## Elements

#### Flexboxes and Grids

All "container" elements should be transparent. The only rendered blocks should be either elements that contain content directly - buttons, text boxes, etcetera - or major components such as the site Header and Sidebar. The result will be that all elements are rendered against the black main background, producing a single visual layer and allowing the user to easily navigate the site. It is important to retain this "objects separated by black" convention because of the overall dark theme. Refer to the mock for a specific example of this technique.

#### Buttons

When applied as part of a Component that will render against the black site background, buttons should use the standard Element Background color ("medium gray", #323033). However, when a button is rendered against the site Header, or any other element that provides a different background color, the button should have a transparent background so as to match that color.

Buttons utilize a border in 2px "Light Gray" with a Border Radius of 7px.

When highlighted, the button's border becomes 4px solid "Yellow", and its text also becomes "Yellow".

#### Text Containers and Other Rectangles

These should use the same border settings as Buttons - 2px "Light Gray" with a border radius of 7px.
