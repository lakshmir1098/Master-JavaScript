const years = Array(1998, 1999,2010, 2020,2024);
console.log(years);
console.log(years.length);

years[2] = 2030;
console.log(years);


const firstName = "Lakshmi"
const birthyear = 1998
const profile = [firstName, "Ramachandran", 2024-birthyear, years]
console.log(profile);


const friends = ['a','b','c','d'];
const pushed = friends.push('e');
console.log(pushed); // return lenght of the array
console.log(friends); //returns array

const unshifted = friends.unshift('0');
console.log(unshifted);  // return lenght of the array
console.log(friends);   // returns array

const popped = friends.pop();
console.log(popped); // returns last removed element
console.log(friends); // returns array

const shifted = friends.shift();
console.log(shifted); // returns first removed element
console.log(friends); // returns array


console.log(friends.indexOf('c'));

console.log(friends.includes('d'));

console.log(friends.includes('f'));

