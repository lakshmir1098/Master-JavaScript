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


const arr = [3,4,5,6,7];
        let [x, y,p,q,r] = arr;
        [x,y,p,q,r] = [r,q,p,y,x];
        console.log(x,y,p,q,r) // 4 3

const nested = [21,54, [86,98]];
const[i, , [j,]] = nested;
console.log(i, j);

const arr1=[7,8,9];
const newarr = [4,5,6, ...arr1];
//see the diiference
console.log(newarr);
console.log(...newarr);
const arr2 = [1,2,3];
console.log(...arr1,...arr2);

const names = 'Lakshmi';
console.log([...names]);
console.log(...names);
console.log([...names, '.','R']);


const [a,b,...c] = [1,2,3,4,5,6,7];
console.log(a,b,c); //1 2 [ 3, 4, 5, 6, 7 ]


const ar = [1,5,6,7,5,8,6,9];
const un = new Set(ar);
console.log(un);
console.log([...un]);