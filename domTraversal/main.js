// Traverse The DOM

// Parent Node Traversal

const ul = document.querySelector("ul");

console.log(ul.parentNode);
console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);
console.log(ul.parentNode.parentNode);

// Child Node Traversal

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Sibling Node Traversal

const div = document.querySelector("div");
console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
