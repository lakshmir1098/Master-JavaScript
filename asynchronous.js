/** Here we going to see about even loop  or call stack  or ececution order bertween
 * normal console log, Promises and setTiemeout
 */

console.log("Start");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);
Promise.resolve("Promise").then((res) => console.log(res));

Promise.resolve("Promise3").then((res) => {
  for (let i = 0; i < 1000000000; i++) {
    // do nothing
  }
  console.log(res);
});
console.log("End");

/**
 * Output:
 *
 * Start
 * End
 * Promise
 * Promise3
 */
