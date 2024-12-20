// selecting Elements
console.log(document.documentElement); // brings entire HTMl elements of the page

console.log(document.head); // return the header elm of the document

console.log(document.body); // return body elm of the document

console.log(document.querySelector(".subs").innerHTML); // returns 1st found class of the given name

console.log(document.querySelectorAll(".subs")); // return NodeList of all the class found for the givne class name

const subs = document.querySelectorAll(".subs");
subs.forEach((e) => console.log(e.innerHTML)); // returns list of all the class found for the given class name

console.log(document.getElementsByTagName("div")); // Returns HTML Collections of all the tags

console.log(document.getElementsByClassName("sub-sub-head")); // Return HTML Colletion of all the class

console.log(document.getElementsByName("div")); // Returns node list when the name attr is given for input tag

// creating elements

const msg = document.createElement("div"); // create div element
msg.classList.add("cookie-msg"); // providing class name for the element
msg.innerHTML = "We use cookies 🍪🤣. Please Agreee! "; // text and other child elements as innnerHTML
const dom = document.body; // where the element to be placed
dom.prepend(msg); // at the begining of the element mentioned (here, body)
dom.append(msg); // at the end of the element mentioned (here, body)

const msg1 = document.createElement("div");
msg1.classList.add("cookie-btn");
msg1.innerHTML =
  "<button class = 'select'> Accept </button> <button class = 'select'> Ignore </button>";
msg.insertAdjacentElement("afterend", msg1);

// deleting element from DOM
// document.querySelector(".accept").addEventListener("click", function () {
//   msg.remove(); // Remove the message
//   msg1.remove(); // Remove the buttons
// });

// document.querySelector(".ignore").addEventListener("click", function () {
//   msg.remove();
//   msg1.remove();
// });

document.querySelectorAll(".select").forEach((i) => {
  i.addEventListener("click", () => {
    msg.remove(); // Remove the message
    msg1.remove(); // Remove the buttons
  });
});
