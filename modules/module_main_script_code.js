import "./module_script_code_1.js";

// Way 1: Importing necessary object
import {
  addToCart,
  a,
  num2 as b,
  sum as sum1,
} from "./module_script_code_1.js"; // naming after import

addToCart("Shoes", 1, 200);
addToCart("Shirt", 3, 100);

console.log(
  "Now the total cart value is ",
  sum1.reduce((a, b) => a + b)
);
console.log(a * b);

// way 2: importing all the exported items as an object
import * as cartAddings from "./module_script_code_1.js";
cartAddings.addToCart("Apple", 1, 50);
cartAddings.addToCart("Banana", 3, 10);
console.log(
  "Now the total cart value is ",
  cartAddings.sum.reduce((a, b) => a + b)
);
console.log(cartAddings.a * cartAddings.num2);

// way 3 : importing default export -  no naming is required
import addCart, { cart, sum as sum2 } from "./module_script_code_1.js";
addCart("Mango", 1, 10);
addCart("Orange", 3, 10);

console.log("cart", cart);
console.log(
  "Now the total cart value is ",
  sum2.reduce((a, b) => a + b)
);

// Top level await
const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // fake rest api
const data = await response.json();
console.log(data);

// without async this has to wait for response to complete
console.log("Top level await executed without async function");

// Top level await with async function
const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // fake rest api
  const data = await response.json();
  console.log(data);
};
getData();
console.log("Top level await executed with async function");

// return from aync
const getLastPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // fake rest api
  const data = await response.json();
  return { data: data.at(`-1`) };
};
console.log("Only last post", await getLastPost());
