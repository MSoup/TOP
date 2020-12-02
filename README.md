# TOP
The Odin Project

Nov 22 - Nov 28 - Project: Google Homepage
--
- HTML, CSS review
- Replicate Google using only HTML/CSS
- Add GET functionality using only HTML to create search, image search, advanced search
- Learned about "Hoisting" in JS. 
- Due to "hoisting," it is possible to use a function before it's defined. Hoisting only works with functions and variable declarations, but not initializations.

Nov 29 - Project: Rock Paper Scissors
--
- Reviewed JS
- Finished first implementation of RPS logic 
- require('./filename') is the equivalent of import in Python

Finished All Assigned Exercises: 
- helloWorld
- repeatString
- reverseString
- removeFromArray
- sumAll
- leapYears
- tempConversion

Nov 30: First new topic-manipulating the DOM
--

Notes:
Query Selectors
---
Learned about:
element.querySelector(selector) returns reference to the FIRST match of selector

element.querySelector(selectors) returns a "nodelist" containing references to all the matches of the selectors.

The difference between nodelist and array? 
Several array methods are missing from nodelists. You can use the spread operator to turn it into an actual array (...).

Objects themselves are not iterable, but they become iterable when used in an Array, or with iterating functions such as map(), reduce(), and assign()

```
let obj = {'key1': 'value1'};
let array = [...obj]; // TypeError: obj is not iterable
```

document.createElement(tagName[, options]) creates a new element of tag type tagName. (In memory, not on the DOM yet)

```
const div = document.createElement('div');
```

This is so that you can manipulate the element (by adding styles, classes, ids, text etc.) before placing it on the page.

Appending Elements:
parentNode.appendChild(childNode) appends childNode as the last child of parentNode

parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode

Removing Elements:
parentNode.removeChild(child) removes child from parentNode on the DOM and returns reference to child

Altering Elements:
When you have a reference to an element, you can use that reference to alter the element's own properties. This allows you do:
- add attributes
- remove attributes
- change classes
- adding inline style information
- etc

Ex:
```
const div = document.createElement('div');
// Create a new div referenced in the variable 'div'
```

Let's try adding inline style:
```
div.style.color = 'blue';
// adds indicated style rule

div.style.cssText = 'color: blue; background: white';
// adds several style rules

div.setAttribute('style', 'color: blue; background: white');
// adds several more style rules
```

Sidenote: If a CSS rule is kebab-cased, I have to use camelcase or bracket notation instead of dot notation.

Ex:
```
div.style.background-color // doesn't work
div.style.backgroundColor // Accesses div bg color style
div.style['background-color'] // ok
div.style.cssText = "background-color: white" // ok
```

Editing attributes
```
div.setAttribute('id', 'theDiv');
// if id exists update it to 'theDiv' else create an id
// with value 'theDiv'

div.getAttribute('id');
// returns the value of a specified attribute. In this case
// it returns 'theDiv'

div.removeAttribute('id');
// removes the id attribute from the div.
```

Working with classes
--
```
div.classList.add('new');
// adds class 'new' to your new div

div.classList.remove('new');
// self explanatory

div.classList.toggle('active');
// if div doesnt have class 'active' then add it
// if it does, then remove it
// this is like a switch!
```
It's standard and more clean to toggle CSS styles rather than adding and removing inline CSS.

Adding text content
```
div.textContent = 'Hello World!'
// creates text node containing Hello World! and inserts it
// in a div
```
Adding html content
```
div.innerHTML = '<span>Hello World!</span>';
// renders the html inside div

Note: textContent is preferable for adding text and innerHTML should be used sparingly cause it can be a security risk if misused. 
```

IMPORTANT
--
Your JavaScript, for the most part, is run whenever the JS file is run, or when the script tag is encountered in the HTML. If you are including your JavaScript at the top of your file, many of these DOM manipulation methods will not work because the JS code is being run before the nodes are created in the DOM. The simplest way to fix this is to include your JavaScript at the bottom of your HTML file so that it gets run after the DOM nodes are parsed and created.

Dec 2:
- changed buttons to grid squares (perhaps a regrettable design choice?)
- attempting to get rps layout on css grid 
- learned a lot about scope and closures. Still not comfortable but that's okay. 
- momentum slowed down as I grind through positioning things on the DOM
- how do I disable buttons after conditions have been met? 
- lastly, I need to decide whether I should just keep moving forward for projects or if I should absolutely go until I've finished rps. Maybe I'll give rps another few days.
- I'm sacrificing gym time for this, I better make it quality study time
