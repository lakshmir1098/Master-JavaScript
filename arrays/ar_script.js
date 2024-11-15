document.addEventListener('DOMContentLoaded', function() {
    var arrays = 
`
<span class = "sub-sub-head">Declaring an array / Creating an empty array </span>
    <div class = "code" >
    var age =[];
    </div>
<span class = "sub-sub-head">creating Array </span>
    <div class="code">
    years = Array(1998, 1999,2010, 2020,2024);
    console.log(years);
    console.log(years.length);
    </div>

<span class = "sub-head"> Ways of working with Array in JS </span>

<span class = "sub-sub-head">replacing elements </span>
    <div class= "code">
    years[2] = 2030;
    console.log(years);

</div>
<span class = "sub-sub-head">inserting variable values into Array </span>
    <div class= "code">
    const firstName = "Lakshmi"
    const birthyear = 1998
    const profile = [firstName, "Ramachandran", 2024-birthyear, years]
    console.log(profile);

</div>

<span class = "sub-head"> Operations in Array </span>
<ul><li><b>push(element)</b> - takes input - to add elements to the end of the array - returns lenght of the array </li>

<li><b>unshift(element)</b> - takes input - to add elements in the beginning of the array - returns lenght of the array</li>

<li><b>pop()</b> - opp of push() - no input required - remove last element from array - returns removed element</li>

<li><b>shit()</b> - opp of unshift() - no input required - removes first element from the array - return removed element </li>

<li><b>indexOf(element)</b> - takes input - returns index of an elelment if present else returns -1 </li>

<li><b>includes(element)</b> - takes input - returns true of false based on element present or not. </li>

    `
    document.getElementById("arrays").innerHTML = arrays;
});