let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list.childNodes; // nodes list

val = list.children; // html elements
val = list.children[1];
list.children[1].textContent = "Hello";
val = list.children[3].children;

val = list.firstChild; // give text and html
val = list.firstElementChild; // give html
val = list.lastChild;
val = list.lastElementChild;

//get parent
val = listItem.parentNode;
val = listItem.parentElement;

val = listItem.nextElementSibling;
console.log(val);

// Creating new element for JS

const li = document.createElement('li');
// Add ClassName
li.className = 'collection-item';
// Add attribute
li.setAttribute('title', 'New Item');
// Add text
li.textContent = 'New List Items';

// Add linking element
const link = document.createElement('a');
link.setAttribute('href','#');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link
li.appendChild(link);

//Appen li as child of ul
const ul = document.querySelector('ul.collection');
ul.appendChild(li);

console.log(link);
console.log(li);