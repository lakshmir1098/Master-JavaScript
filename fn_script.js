document.addEventListener('DOMContentLoaded', function() {
    
    var logfun = `
<span class="sub-head"> Function declaration </span>
    <span class="code"> 
        function logger(a,b){
            console.log(a, b);
            let s = \`I am having \${a} and \${b} in my hand \';
            return s;
        }
        console.log(logger('apples', 'oranges'));
        // return will not return a value unless it is console.log
    </span>
    <span class="code"> 
        function logg(a,b){
            console.log(a, b);
            let s = \`I am having \${a} and \${b} in my hand \`;
            return s;
        }
        var cal = logg("apple", "orange");
        console.log(cal); 
    </span>
<span class="sub-head">Function expression</span>
    <span class="code"> 
    var calc = function (year){ //ananonymous fucntion - a fn without a name 
        return 2024 - year;
    }
    console.log(calc(1998));
    </span>

The difference between function delaration and function expression way of calling the function is, 
we can call the function before defining it, in the function definition way but not in function expresion. 
Doing so in finction expression will "Cannot access before intialization" error.

<span class = "sub-head"> Arrow Function </span>
    <span class = "code">

    </span>
`

document.getElementById("coding-part").innerHTML = logfun;

})

// Function declaration
function logger(a,b){
    console.log(a, b);
    let s = `I am having ${a} and ${b} in my hand`;
    return s;
        }

    console.log(logger('apples', 'oranges')); 
// return will not return a value unless it is console.log

//Function Expression
var calc = function (year){ //ananonymous fucntion - a fn wothout a name 
    return 2024 - year;
}

console.log(calc(1998));


function logg(a,b){
    console.log(a, b);
    let s = `I am having ${a} and ${b} in my hand`;
        return s;
    }

var cal = logg("apple", "orange");
console.log(cal); 