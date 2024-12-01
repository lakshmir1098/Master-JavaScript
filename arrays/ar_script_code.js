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

let arra = ['a', 'b', 'c', 'd', 'e'];
console.log("arra.slice(2)",arra.slice(2));  // [ 'c', 'd', 'e' ]
console.log("arra.slice(2,4)",arra.slice(2, 4));     // [ 'c', 'd' ]
console.log("arr after arra.slice(2)",arra);    // [ 'a', 'b', 'c', 'd', 'e' ]
console.log("arra.slice(-2)",arra.slice(-2));   // [ 'd', 'e' ]
console.log("arr after arra.slice(-2)",arra);   // [ 'a', 'b', 'c', 'd', 'e' ]
console.log("arra.splice(2,1)",arra.splice(2,1));  //['c']
console.log("arra.splice(2)",arra.splice(2));   // [ 'd', 'e' ]
console.log(" arr after arra.splice(2)",arra);  // [ 'a', 'b' ]
console.log("arra.slice(-2)",arra.splice(-2));  // [ 'a', 'b' ]
console.log(" arr after arra.splice(-2)",arra); // []


let a2 = [1,2,3,4,5];
console.log("a2.reverse()", a2.reverse())
console. log( "a2 after reverse ", a2)

a3  = [10,20,30]
a2 = a2.reverse();
let c1 = a3.concat(a2);
console.log("concat",c1); //[10, 20, 30, 5, 4,  3,  2, 1]

//the other way
console.log(...a3,...a2); //10 20 30 5 4 3 2 1


s = c1.join('|') //10|20|30|1|2|3|4|5
console.log( typeof(s));

console.log(c1.at(1));
console.log(c1[c1.length-1]);
console.log(c1.slice(-1)[0])
console.log(c1.at(-1))

const nar = [[1,2],3,[[4,5],6],7,8];
console.log("1",nar.flat());
console.log("2",nar.flat(2))

const ages = [3, 10, 18, 20];
console.log(ages.some(a => a >= 18));

console.log(ages.every(a => a >=18))

const ar1 = [1, 2, 1];
const result = ar1.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result);// [1, 2, 2, 1]


const ag = [2,4,6,5,7,3,0,8]
// default asc order
console.log("ag",ag.sort()) // ag [ 0, 2, 3, 4, 5, 6, 7, 8 ]
// asc order
console.log("ag1", ag.sort((a,b) => a-b)); // ag1 [ 0, 2, 3, 4, 5, 6, 7, 8 ]
//desc
console.log("ag2", ag.sort((a,b) => b-a)); // ag2 [ 8, 7, 6, 5, 4, 3, 2, 0 ]


console.log("New array a:",Array.from({length:7}, (_, i) => i+1)) // New array a: [1, 2, 3, 4, 5, 6, 7 ]
console.log("New array b:", Array.from({length:4}, () => 4))  //New array b: [ 4, 4, 4, 4 ]
console.log("New array c:",Array.from({length:7}, (_, i) => Math.trunc(Math.random()*100)+1)) 
//New array c: [21, 64, 52, 11, 95, 69, 49 ]
