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
const domb = document.body; // where the element to be placed
domb.prepend(msg); // at the begining of the element mentioned (here, body)
domb.append(msg); // at the end of the element mentioned (here, body)

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
    console.log( window.scrollX, window.scrollY)
  });
});

msg.style.height = "10px";
console.log(msg.style.height);
//The computed style is the style used on the element after all styling sources have been applied
console.log(getComputedStyle(msg).height); // to know when style is not defined by us e.g.,height

msg.style.height = Number.parseFloat(getComputedStyle(msg).height) + 16 + "px"; // can be used to change the style
console.log(getComputedStyle(msg).height);
console.log(msg.style.height);

msg.style.setProperty("color", "rgb(55, 247, 247)");


// Returns a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width.
// The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels.
// Note: top = y and left = x
console.log(msg.getBoundingClientRect());

/** OUPUT:
{
    "x": 20,
    "y": 871.9896240234375,
    "width": 531.6666870117188,
    "height": 26,
    "top": 871.9896240234375,
    "right": 551.6666870117188,
    "bottom": 897.9896240234375,
    "left": 20
}
 */


// current scroll position

document.querySelectorAll(".select").forEach((i) => {
    i.addEventListener("click", () => {
      console.log( window.scrollX, window.scrollY);
      // 0 36918.66796875
    });
});
// OUTPUT
// 0 36760


// srollTo
document.querySelectorAll(".select").forEach((i) => {
    i.addEventListener("click", () => {
      window.scrollTo(0, 500);
    });
});

const dom =  document.querySelector('#dom');
console.log(dom.getBoundingClientRect());
console.log(dom.clientHeight); 

document.querySelectorAll(".select").forEach((i) => {
    i.addEventListener("click", () => {
        window.scrollTo({
            left:0, 
            top: 22870,
            behavior: "smooth", // [options : auto, instant, smooth]
        });
    });

});


/** To know the difference you have to understand the box model, but basically:

clientHeight:
returns the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin

offsetHeight:
is a measurement which includes the element borders, the element vertical padding, the element horizontal scrollbar (if present, if rendered) and the element CSS height.

scrollHeight:
is a measurement of the height of an element's content including content not visible on the screen due to overflow 
*/

document.querySelectorAll(".select").forEach((i) => {
    i.addEventListener("click", () => {
      console.log(document.documentElement.clientHeight);  //561
      console.log(document.documentElement.clientWidth); //353
      console.log(document.documentElement.scrollHeight); // 37479
      
    });
});