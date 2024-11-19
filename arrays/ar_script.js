document.addEventListener('DOMContentLoaded', function() {
    var arrays = 
`
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
</div>
We can do swapping by this.
<div class ='code'>
    const arr = [3,4];
    let [x, y] = arr;
    [x,y] = [y,x];
    console.log(x,y); // 4 3
</div>
We can use this on nested array
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
</div>
Join 2 arrays
<div class='code'>
    const arr1=[7,8,9];
    const arr2 = [1,2,3];
    console.log(...arr1,...arr2); 7 8 9 1 2 3
</div>
With strings
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

Creating new set
<div class = 'code'>
    const ar = [1,5,6,7,5,8,6,9];
    const un = new Set(ar);
    console.log(un); //Set(6) { 1, 5, 6, 7, 8, 9 }
</div>
Length of set is get through method <span class = 'code-word'> size() </span>

<span class ='sub-sub-head'>&#128640;converting set into array </span>

as we can't index set.
<div  class = 'code'>
    const ar = [1,5,6,7,5,8,6,9];
    const un = new Set(ar);
    console.log([...un]); //[ 1, 5, 6, 7, 8, 9 ]
</div>
<span class = "sub-head">Operations in Array </span>
<ul><li><b>push(element)</b> - takes input - to add elements to the end of the array - returns lenght of the array </li>

<li><b>unshift(element)</b> - takes input - to add elements in the beginning of the array - returns lenght of the array</li>

<li><b>pop()</b> - opp of push() - no input required - remove last element from array - returns removed element</li>

<li><b>shit()</b> - opp of unshift() - no input required - removes first element from the array - return removed element </li>

<li><b>indexOf(element)</b> - takes input - returns index of an elelment if present else returns -1 </li>

<li><b>includes(element)</b> - takes input - returns true of false based on element present or not. </li>

    `
    document.getElementById("arrays").innerHTML = arrays;
});