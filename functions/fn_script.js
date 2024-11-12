document.addEventListener('DOMContentLoaded', function() {
    
    var logfun = `
<span class="sub-head"> Function declaration </span>
    <div class="code"> 
    function logger(a,b){
        console.log(a, b);
        let s = \`I am having \${a} and \${b} in my hand \';
        return s;
    }
    console.log(logger('apples', 'oranges'));
    // return will not return a value unless it is console.log
    </div>
    <div class="code"> 
    function logg(a,b){
        console.log(a, b);
        let s = \`I am having \${a} and \${b} in my hand \`;
        return s;
    }
    var cal = logg("apple", "orange");
    console.log(cal); 
    </div>
<span class="sub-head">Function expression</span>
    <div class="code"> 
    var calc = function (year){ 
    //ananonymous fucntion - a fn without a name 
        return 2024 - year;
    }
    console.log(calc(1998));
    </div>

The difference between function delaration and function expression way of calling the function is, 
we can call the function before defining it, in the function definition way but not in function expresion. 
Doing so in finction expression will "Cannot access before intialization" error.

<span class = "sub-head"> Arrow Function </span>
    <div class = "code">
    var age = byear => 2024 - byear;
    console.log(age(1998));
    </div>
Arrow function doesn't need code block{} and no return statement as it is implicitily done. 
The above is applicable only for simple problems.
lets say we have to find yearsUntilRetirement then 1st we have to find age and then retirement_age - age. 
In this case we have to use {} and return statement even if it is arrow function

    <div class = "code">
    var yearsUntilRetirement = byear => {
    let age = 2024 - byear;
    let years = 60 - age;
    return years;
    }
    console.log(yearsUntilRetirement(1998));
    </div>

<span class="sub-head">Function calling other function</span>
    <div class = "code"> 
    function piece(n){
    return n * 5;
    }
    function fruitProcess(a,b){
        let applePiece =  piece(a);
        let orangePiece = piece(b);
        let s = \`I am having \${applePiece} pieces of apple and \${orangePiece} pieces of orange in my hand\`;
        return s;
    }
    console.log(fruitProcess(2, 3)); 
    </div>
`

document.getElementById("functions").innerHTML = logfun;

})
