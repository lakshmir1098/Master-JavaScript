document.addEventListener('DOMContentLoaded', function() {
    var arrays = `
<span class = "sub-sub-head">&#128640; Declaring an array / Creating an empty array </span>
<div class = "code" >
    var age =[];
</div>
<span class = "sub-sub-head">&#128640; creating Array </span>
<div class="code">
    years = Array(1998, 1999,2010, 2020,2024);
    console.log(years);
    console.log(years.length);
</div>
<span class = "sub-head">Ways of working with Array in JS </span>

<span class = "sub-sub-head">&#128640; replacing elements </span>
<div class= "code">
    years[2] = 2030;
    console.log(years);
</div>
<span class = "sub-sub-head">&#128640; inserting variable values into Array </span>
<div class= "code">
    const firstName = "Lakshmi"
    const birthyear = 1998
    const profile = [firstName, "Ramachandran", 2024-birthyear, years]
    console.log(profile);
</div>
<span class = "sub-sub-head">&#128640;Destructuring Array </span>
    Assigning array elements as value to the variable
<div class = 'code'> 
    const arr = [2,3,4];
    const [x,y,z] =  arr;
    console.log(x,y,z); // 2 3 4

    const arr = [2,3,4];
    const [x,,y] =  arr; // skip middle element
    console.log(x,y); // 2 4
</div> We can do swapping by this.
<div class ='code'>
    const arr = [3,4];
    let [x, y] = arr;
    [x,y] = [y,x];
    console.log(x,y); // 4 3
</div> We can use this on nested array
<div class='code'>
    const nested = [21,54, [86,98]];
    const[i, , [j,]] = nested;
    console.log(i, j);
</div>
<span class = "sub-head">Spread Operator </span>
Used to include an array elements as part of another array or string or objects.
<div class = 'code'>
    const arr1=[7,8,9];
    const newarr = [4,5,6, ...arr1];
    //see the difference
    console.log(newarr); // [4, 5, 6, 7, 8, 9]
    console.log(...newarr) // 4 5 6 7 8 9
</div>Join 2 arrays
<div class='code'>
    const arr1=[7,8,9];
    const arr2 = [1,2,3];
    console.log(...arr1,...arr2); 7 8 9 1 2 3
</div>With strings
<div class = 'code'>
    const names = 'Lakshmi';
    console.log([...names]);
    console.log([...names, '.','R']);
    console.log(...names);
</div>
<span class = "sub-head">Rest Operator </span>
The opp. of spread operator with same ...
SPREAD op. works on right side of = while REST works on left side of =.
<div class= 'code'>
    const [a,b,...c] = [1,2,3,4,5,6,7];
    console.log(a,b,c); //1 2 [ 3, 4, 5, 6, 7 ]
</div>
<span class = 'sub-head' >set and array </span>
We know set is used to remove duplicate elements in any iterables.
Creating new set:
<div class = 'code'>
    const ar = [1,5,6,7,5,8,6,9];
    const un = new Set(ar);
    console.log(un); //Set(6) { 1, 5, 6, 7, 8, 9 }
</div>
Length of set is get through method <span class = 'code-word'> size() </span>

<span class ='sub-sub-head'>&#128640;converting set into array </span> as we can't index set.
<div  class = 'code'>
    const ar = [1,5,6,7,5,8,6,9];
    const un = new Set(ar);
    console.log([...un]); //[ 1, 5, 6, 7, 8, 9 ]
</div>
<span class = "sub-head">Operations / Methods used in Array </span> </i>
<i>Reference :</i> <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array> Array built-in methods </a>
<ul><li><b>push(element)</b> - takes input - to add elements to the end of the array - returns lenght of the array </li>
<li><b>unshift(element)</b> - takes input - to add elements in the beginning of the array - returns lenght of the array</li>
<li><b>pop()</b> - opp of push() - no input required - remove last element from array - returns removed element</li>
<li><b>shit()</b> - opp of unshift() - no input required - removes first element from the array - return removed element </li>
<li><b>indexOf(element)</b> - takes input - returns index of an elelment if present else returns -1 </li>
<li><b>includes(element)</b> - takes input - returns true of false based on element present or not. </li>
<li><b> Slice </b> - Method uses  positive and negative index to return only the elements within the boundry mentioned. This does not affect the original array itself.
<ul> <li>Slice with 1 param is starting boundry
<li>slice with 2 param is starting and ending index boundry </li></ul>
<i> Example</i> 
<div class = 'code'> 
Lets take let arra = ['a', 'b', 'c', 'd', 'e'];
console.log("arra.slice(2)",arra.slice(2));     // [ 'c', 'd', 'e' ]
console.log("arr after arra.slice(2)",arra);    // [ 'a', 'b', 'c', 'd', 'e' ]
console.log("arra.slice(-2)",arra.slice(-2));   // [ 'd', 'e' ]
console.log("arr after arra.slice(-2)",arra);   // [ 'a', 'b', 'c', 'd', 'e' ]
console.log("arra.slice(2,4)",arra.slice(2, 4));     // [ 'c', 'd' ]
</div></li>
<li><b>splice</b> - this method is same as slice but this affects the original array. When an index is mentioned then the splice deletes the the elements after the boundry from original array itself.
<ul>
<li>Slice with 1 param is starting boundry
<li>slice with 2 param is starting index boundry and no.of elements</li></ul>
<i> Example</i> 
<div class = 'code'> 
console.log("arra.splice(2,1)",arra.splice(2,1));  //['c']
console.log("arra.splice(2)",arra.splice(2));   // [ 'd', 'e' ]
console.log(" arr after arra.splice(2)",arra);  // [ 'a', 'b' ]
console.log("arra.slice(-2)",arra.splice(-2));  // [ 'a', 'b' ]
console.log(" arr after arra.splice(-2)",arra); // []
</div></li>
<li><b>reverse</b> - reverse the elements in the array and this impacts the original array itself
<i> Example</i> 
<div class = 'code'> 
let a2 = [1,2,3,4,5];
console.log("a2.reverse()", a2.reverse())
console. log( "a2 after reverse ", a2)
</div></li>
<li><b>concat</b> - 2 merge 2 arrays 
<i> Example</i> 
<div class = 'code'>
let a3  = [10,20,30]
let a2 = [5,4,3,2,1];
let c1 = a3.concat(a2);
console.log("concat",c1); //[10, 20, 30, 5, 4,  3,  2, 1]

//the other way
console.log(...a3,...a2); //10 20 30 5 4 3 2 1
</div></li>
<li><b> join </b> - joins array elements into a string using some character or space
<i> Example</i> 
<div class = 'code'>
console.log(c1.join('|'))   //10|20|30|1|2|3|4|5
</div>
<li><b>at</b> - returns element at the mentioned index .This method replaces basic <span class = 'code-word'>a[0]</span> to <span class = 'code-word'>a.at(0)</span> and is very useful in getting last array element. This method is used in string as well. 
<div class = 'code'>
//previously we use
console.log(c1[c1.length-1]);
console.log(c1.slice(-1)[0]);

// now using at method
console.log(c1.at(-1))
</div></li>
<li><b>map</b> - map method takes an array,loops over that array and in each alteration, it applies a covic function that we specify on our code to the current array element and creates a new array</span>
<li><b>filter</b> - used to filter for elements in the original array which satisfy a certain condition and will make it into a new filtered array.
<li><b>reduce</b> - this method boil down all the elements of the original array into one single value.An example of this can be to add all the elements of an array together
<li><b>find</b> - used to retrive first element of an array that meets a specified condition.
<li><b>findIndex</b> - used to retrive the index of the first element of an array that meets a specified condition.
<li><b>some</b> - return true or false for the elements of an array based on the condition set inside some method. This method is basically used to check for the presence of true condition on the elements of an array 
<i>Example </i>
<div class = 'code'>
const ages = [3, 10, 18, 20];
console.log(ages.some(a => a >= 18)); //true
</div></li>
<li><b>every</b> - returns true only if all the elements in the array pass the given condition as true.
<i> Example </i>
<div class = 'code'>
const ages = [3, 10, 18, 20];
console.log(ages.every(a => a >= 18)); //false
</div></li>
<li><b>flat</b> - a method used in nested arrays/ multi deimensional array to mak into less/single dimensional array.
This take how much deep the array has to be flatten as input param
<i> Example </i>
<div class = 'code'>
const nar = [[1,2],3,[[4,5],6],7,8];
console.log("1",nar.flat()); //1 [ 1, 2, 3, [ 4, 5 ], 6, 7, 8 ]
console.log("2",nar.flat(2)) // 2 [1, 2, 3, 4, 5, 6, 7, 8]
</div></li>
<li><b>flatMap</b> - it s  a combination of flat and map methods with flat going deep only to 1 level by default. We cant go down to 2 levels or more as in flat.
<i> Example </i>
<div class = 'code'>
const ar1 = [1, 2, 1];
const result = ar1.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result);// [1, 2, 2, 1]
</div></li>
<li><b>sort</b> - used to sort array elements.
<i> Example </i>
<div class = 'code'>
const ag = [2,4,6,5,7,3,0,8]
// default asc order
console.log("ag",ag.sort()) // ag [ 0, 2, 3, 4, 5, 6, 7, 8 ]
// asc order
console.log("ag1", ag.sort((a,b) => a-b)); // ag1 [ 0, 2, 3, 4, 5, 6, 7, 8 ]
//desc
console.log("ag2", ag.sort((a,b) => b-a)); // ag2 [ 8, 7, 6, 5, 4, 3, 2, 0 ]
</div></li></ul>

<span class = "sub-head">Creating Array programatically</span>
<i> Example </i>
<div class = 'code'>
console.log("New array a:",Array.from({length:7}, (_, i) => i+1)) 
// New array a: [1, 2, 3, 4, 5, 6, 7 ]

console.log("New array b:", Array.from({length:4}, () => 4))  
//New array b: [ 4, 4, 4, 4 ]

console.log("New array c:",Array.from({length:7}, (_, i) => Math.trunc(Math.random()*100)+1)) 
//New array c: [21, 64, 52, 11, 95, 69, 49 ]
</div>
`;
    document.getElementById("arrays").innerHTML = arrays;
});

//# sourceMappingURL=index.2f3fc22b.js.map
