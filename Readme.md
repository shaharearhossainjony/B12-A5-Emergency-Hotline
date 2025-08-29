# Answer of the Section No 06  

## Answer of Question No 1: 
a. getElementById means we can get an unique element by id because ids are unique in a single html file .

b. getElementsByClassName we can get a collection of all elements by this classname because one or more elements may have same classname in a html file.

c. querySelector('') selects the first element that match CSS selector like #id, .class , div>p 

d. querySelectorAll('') returns all the elements that matches the CSS selector. It returns a NodeList.

---

## Answer of Question No 2:
If we want to create a new element into the DOM at firsts we have to create element by document.createElement("tag-name"). the tag-name will be which element we want to create like p, div etc. Then we have to set  attributes or content by element.textContent, element.classList.add(). And last insert the element into DOM by appendChild(),prepend(), insertBefore() or by append().

---

## Answer of Question No 3:
Event bubbling means that if we make an event like click, mouseover, keyup,keydown to an element then it first runs the event on that element, and then bubbles up to this element parent,also to the ancestor elements all the way up to document. 

---

## Answer of Question No 4:
Event delegation is almost the same as event bubbling . To avoid the  use of multiple event listeners instead of using multiple event listener to each child elements of a parent element.

a.It uses fewer listeners and give beter performance.  
b. Makes the code more cleaner and Works with dynamically added elements.  

---

## Answer of Question No 5:

preventDefault() uses to Stops the default behavior of browser .  
stopPropagation() uses to Stops event from bubbling to parents.
