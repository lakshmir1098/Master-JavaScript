const cart = [];
let sum = [];

export let addToCart = (item, quan, cost) => {
  let price = quan * cost;

  cart.push({ item, quan, price }); // multi dimensional array
  sum.push(price);
  console.log(` ${quan} ${item}  added to the cart`);
};

const num1 = 10;
const num2 = 20;

export { num1 as a, num2, cart, sum }; // naming the exported object

// export default with no name ad so on import module we can call it whatever we want
// only one default export per module is allowed
export default function (item, quan, cost) {
  let price = quan * cost;
  cart.push({ item, quan, price });
  sum.push(price);
  console.log(` ${quan} ${item}  added to the cart`);
}

console.log("Module Script Code 1 is executed");
