"use strict";
document.addEventListener("DOMContentLoaded", function() {
    function tcandtc() {
        var tcandtc = `    Number to String ==> String(23)
    String to Number ==> Number(23)
    Like this we can use the into datatype(variable) to do type conversion.

    For eg. '1' + 1 //11 ==> here concatination is performed
    but '10' - 1 //9 ==> here arithmetci sub operation is performed

    So, except for + other arthm operation like -,*,/ will perform mathematical operation on string `;
        document.getElementById("tcandtc").innerHTML = tcandtc;
    }
    function torf() {
        var torf = `    There are only 6 falsy values in JS. They are: 
            * 0
            * empty string ' '
            * undefined
            * null
            * Nan
            * False
            
        All othe values are true`;
        document.getElementById("torf").innerHTML = torf;
    }
    function nullish() {
        var nullish = ` 
    Nullish values are null and undefined.
    <i>Example </i>
<div class = 'code'>
    const a = 0;
    const num1 = a || 10;
    console.log(num1); // 10 as 0 is falsy value
    //But 

    const num2 =  a ?? 10;
    console.log(num2); //0 as 0 is not nullish number
</div>`;
        document.getElementById("nullish").innerHTML = nullish;
    }
    function math_methods() {
        var math_methods = `<ul><li><b>Math.random()</b> -> generates decimal number between 0 and 1.</li>
    <li><b>Math.random() * 20 </b>-> generates decimal number between 0 and 19.999 </li>
    <li><b>Math.trunc(Math.random()*20) </b> -> cuts the decimal and rounds the number between 0 and 19 </li>
    <li><b>Math.trunc(Math.random()*20) + 1 </b>-> generates whole number between 1 and 20 </li></ul>`;
        document.getElementById("math_methods").innerHTML = math_methods;
    }
    function forof() {
        var forof = `<div class = 'code'>
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
    add(5,6,7,7); </div>`;
        document.getElementById("forof").innerHTML = forof;
    }
    function maps() {
        var maps = `    Map is an key value pair datastructue.
<span class ='sub-sub-head'>&#128640; Creating map </span>
<div class = 'code'>
    const maps = new Map([
        ["a",[1,2,3]],
        [1, ['a','b','c']]
    ]);

    maps
        .set(true, 'You are allowed')
        .set(false, 'you are not allowed')

    console.log(maps);
</div>
<span class ='sub-sub-head'>&#128640; Accessing elements in map </span>
<div class = 'code'>
    const maps = new Map();

    maps
        .set ("a",[1,2,3])
        .set(1, ['a','b','c'])
        .set(true, 'You are allowed')
        .set(false, 'you are not allowed')
        .set ('lt', 10)
        .set ('gt', 1)

    console.log( maps.get(1));  //['a','b','c']

    const t = 4;
    console.log(maps.get( t < maps.get('lt') && t > maps.get('gt'))); // You are allowed
</div>map's length can be found by<span class = "code-word"> maps.size </span>
map has <span class = "code-word">has</span> property to check if the key is present to return the vaulues.

<span class ='sub-sub-head'>&#128640; Converting objects into Map </span>
<div class ='code'>
    const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
    const resturant = {
        openingHours : {
            [days[0]] : { //enhanced object literal
                open : 5,
                close : 5
            },
            [days[1]] : {
                open :10 ,
                close :5
            },
            [days[2]] : {
                open :13,
                close :6
            },
            [days[3]]:{
                open :6,
                close:10
            }
        },
    }
    const maps = new Map (Object.entries(resturant.openingHours))
    console.log(maps);
</div>
<span class ='sub-sub-head'>&#128640; Converting Map into array </span>
<div class ='code'>
    console.log([...maps.get('a')]);
</div>
<span class ='sub-sub-head'>&#128640; Accessing Maps </span>
    Using <span class ='code-word'> keys, values, entries </span> properties
<div class ='code'>
    console.log(maps.entries());
    console.log(maps.keys());
    console.log(maps.values())
</div>
`;
        document.getElementById("maps").innerHTML = maps;
    }
    function dates() {
        var dates = `<div class = 'code'>
    const now = new Date();
    console.log(now);
    //Tue Dec 03 2024 18:32:55 GMT+0530 (India Standard Time)

    console.log(new Date ('May 13, 2024'))
    // 4 Mon May 13 2024 00:00:00 GMT+0530 (India Standard Time)


    console.log(new Date(2024,9,10,6,37,54));  // year , month starts at 0 , Date starts at 1, hours, min, sec
    // Thu Oct 10 2024 06:37:00 GMT+0530 (India Standard Time)

    const date = new Date (2024,11,15,11,30);
    console.log("a",date.getFullYear());  //2024
    console.log("b",date.getMonth()); //11
    console.log("c",date.getDate()); //15
    console.log("d",date.getDay()); //0  => as it is Sunday
    console.log("e",date.getHours()); //11
    console.log("f",date.getMinutes()); //30
    console.log("g",date.getSeconds()); //0
    console.log("h",date.getUTCSeconds()); //0
    console.log("i",date.toString());  // Sun Dec 15 2024 11:30:00 GMT+0530 (India Standard Time)
    console.log("j",date.toISOString()); //2024-12-15T06:00:00.000Z
    console.log("k",date.toUTCString()); //Sun, 15 Dec 2024 06:00:00 GMT
    console.log("l",date.toDateString()); //Sun Dec 15 2024
    console.log("m",date.toLocaleDateString()); //15/12/2024
    console.log("n",date.toLocaleString()); //15/12/2024, 11:30:00 am
    console.log("o",date.toTimeString()); //11:30:00 GMT+0530 (India Standard Time)
    console.log("p",date.toLocaleTimeString()); //11:30:00 am

    const time_set = date.getTime()
    console.log("q",time_set); // to set a timeset which can be further used to get the exact date //1734242400000
    console.log("r",new Date (time_set)); //2024-12-15T06:00:00.000Z
    console.log("s",Date.now()) //1733328886925
</div>
<span class ='sub-sub-head'>   Internalization of Dates </span>
<div class = 'code'>
    const now1 = new Date();
    const options = { // without this Intl.DateTimeFormat will only show date and this gives us lot of options on how to display
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    weekday: 'short',
    };

    console.log(new Intl.DateTimeFormat(
    'en-IN',
    options
    ).format(now1));

    // this is to get local machine time,but works only on browser side not on vs code. 
    //try in dev tool console
    const locale = navigator.language; 
    console.log("locale",locale);
</div>`;
        document.getElementById("dates").innerHTML = dates;
    }
    function da() {
        var da = `<div><img src="assests/defer_async.png" alt="regular vs differ vs async" ></div>`;
        document.getElementById("da").innerHTML = da;
    }
    function timers() {
        var timers = `  There are 2 timers method:
        1.  setTimeOut - run once
        clearTimeOut
        2.  setInterval - keeps running until we stop it
        clearInterval`;
        document.getElementById("timers").innerHTML = timers;
    }
    function bundelling() {
        var bundle = ` Bundelling is a process of combining multiple files into a single file. This is done to reduce the number of requests made to the server and to reduce the size of the file.
        The bundeled folder with the name  "dist" is created and can be used as production ready by running <span class = 'code-one-line'>npx parcel index.html</span> or equivalent as per package.json to run a server .
        
        Pre-requisite:
        1. Install node.js
        2. Install npm
        3. Install parcel - <span class = 'code-one-line'>npm i parcel</span>

Run parcel on project folder on index.html file. <span class = 'code-one-line'>npx parcel index.html</span>
We can later change the running command in package.json file as added in our project. So the command we use now to bundle in this project is <span class = 'code-one-line'>npm run start</span>`;
        document.getElementById("bundelling").innerHTML = bundle;
    }
    function polyfill() {
        var polyfill = `A polyfill in JavaScript is a script that adds modern features to older browsers that do not natively support them. For example, Promises introduced in ES6 and so old browser dont support them.
For that we have to install core-js <span class = 'code-one-line' >npm i code-js </span>
Yet pollyfilling is not applied to async function. So polyfill asyc function we have to install regenerator-runtime <span class = 'code-one-line' >npm i regenerator-runtime </span>
    `;
        document.getElementById("polyfill").innerHTML = polyfill;
    }
    tcandtc();
    torf();
    nullish();
    math_methods();
    forof();
    maps();
    dates();
    da();
    timers();
    bundelling();
    polyfill();
});

//# sourceMappingURL=index.f3d3a4e8.js.map
