const title = document.querySelector("#main-heading");
title.style.color = "red";

const listItems = document.querySelectorAll(".list-items");

for (const listItem of listItems) {
  listItem.style.fontSize = "2rem";
}

// create elements
const ul = document.querySelector("ul");
const li = document.createElement("li");

ul.append(li);

// Modifying Text
li.innerHTML = "X-Men";

// Modifying Attribute
li.setAttribute("id", "main-heading");
li.removeAttribute("id");

console.log(title.getAttribute("id"));

// modify classes

li.classList.add("list-items");

// remove element
li.remove();
