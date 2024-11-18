'use strict';
document.addEventListener('DOMContentLoaded', function() {
    function tcandtc (){
        var tcandtc = `
    Number to String ==> String(23)
    String to Number ==> Number(23)
    Like this we can use the into datatype(variable) to do type conversion.

    For eg. '1' + 1 //11 ==> here concatination is performed
    but '10' - 1 //9 ==> here arithmetci sub operation is performed

    So, except for + other arthm operation like -,*,/ will perform mathematical operation on string `;
    
        document.getElementById("tcandtc").innerHTML = tcandtc;
    }

    function torf(){
        var torf = `
    There are only 6 falsy values in JS. They are: 
        * 0
        * empty string ' '
        * undefined
        * null
        * Nan
        * False
        
    All othe values are true`;

        document.getElementById("torf").innerHTML =  torf;
    }

    function nullish(){
        var nullish = ` 
    Nullish values are null and undefined.
    
    <span class ='sub-sub-head'>Example </span>
    <div class = 'code'>
        const a = 0;
        const num1 = a || 10;
        console.log(num1); // 10 as 0 is falsy value
        //But 

        const num2 =  a ?? 10;
        console.log(num2); //0 as 0 is not nullish number
    </div>`
        document.getElementById("nullish").innerHTML = nullish;
    }

    function math_methods(){
        var math_methods = `<ul><li><b>Math.random()</b> -> generates decimal number between 0 and 1.</li>
    <li><b>Math.random() * 20 </b>-> generates decimal number between 0 and 19.999 </li>
    <li><b>Math.trunc(Math.random()*20) </b> -> cuts the decimal and rounds the number between 0 and 19 </li>
    <li><b>Math.trunc(Math.random()*20) + 1 </b>-> generates whole number between 1 and 20 </li></ul>`
        document.getElementById("math_methods").innerHTML =  math_methods;

    }

    function forof(){
        var forof = 
    `
<div class = 'code'>
        const add = function(...num){
        let sum = 0;
        for(const i of num){ //uses of instead of in
            sum = sum + i;
        }
        console.log(sum);
        }

        //When in is used
        //for(const i in num){ 
        //    sum = sum + num[i];
        //}
        add(2,3);
        add(5,6,7,7); 
    </div>
`
document.getElementById ('forof').innerHTML = forof;
    }

    tcandtc();
    torf();
    nullish();
    math_methods();
    forof();

})

