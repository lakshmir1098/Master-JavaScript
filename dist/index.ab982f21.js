document.addEventListener('DOMContentLoaded', function() {
    var logfun = `
<span class="sub-head">Function declaration </span>
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
Doing so in finction expression will <span class = "code-word">"Cannot access before intialization"</span> error.

<span class = "sub-head">Arrow Function </span>
<div class = "code">
    var age = byear => 2024 - byear;
    console.log(age(1998));
</div>
Arrow function doesn't need code block{} and no return statement(for one line code) as it is implicitily done. 
lets say we have to find <span class = "code-word">yearsUntilRetirement</span> then 1st we have to find age and then <span class = "code-word">retirement_age - age</span>. 
In this case we have to use {} and return statement even if it is arrow function

Unlike regular function, Arrow functions doesnot have its own <span class="code-word">this</span> keyword. 
Meaning if,<span class="code-word"> this</span> keyword is used in arrow function it actually inherits the parent object - either an function inside which it is used or global <span class="code-word">DOM window</span> object.
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
<span class = "sub-head">REST Operator in functions</span>
<div class = 'code'>
    const add = function(...num){
    let sum = 0;
    for(let i in num){
        sum = sum + num[i];
    }
    console.log(sum);
    }

    const x = [3,5,6]
    add(2,3); // 5
    add(5,6,7,7); //25
    add(765,4444,666,33,2,1,4,9); //5924
    add(...x); //14
</div>
<span class = "sub-head">Default parameter</span>
We can provide default values for  the params passed to teh function in case if they are not defined on function call.
This feature is introduces from ES6 version
How can we do that? Here is an example
<div class ='code'>
    const sum = function (a=1, b=1){
        return a + b;
    }
    console.log(sum());
</div>
<span class = 'sub-head'>Call back Function </span>
Function calling another fucntion is callled callback function. The calling function is called Higher-order function.
<div class =  'code'>
    function oneWord (s) {
        return s.replace(/ /g, '').toLowerCase();
    };

    function transform (str, fn){
        console.log(\`Transformed string: \${fn(str)}\`);
        console.log(\`Transformed by : \${fn.name}\`); \\returns the function name being passed here 
    }

    transform("I'm learning JS", oneWord);
</div>
<span class = 'sub-head'>Function returning functions </span>
<div class = 'code'>
    function greet (gr){
        return function (name){
            console.log(\`\${gr}, \${name}\`);
        }
    }
    const greets = greet('Hey');
    greets('Lakshmi');                --->Method 1

    greet('Hello')('Lakshmi');     --->Method 2
</div> 
For arrow function
<div class = 'code'>
    const greets = gr => n => console.log(\`\${gr}, \${n}\`) ;
    greets('Hi')('Lakshmi');
</div>
<span class = 'sub-head'>Methods to borrow functions inside an object by another object </span>

<span class = 'sub-sub-head'>&#128640; CALL method </span>
Call method for a fucntion is udef when we have more then one function calling the same method 
for different purpose and that method has <span class = 'code-word'> this </span> keyword to refer to the paramenters.

In this case, while we have multiple function call a method, <span class = 'code-word'> this </span> keyword dont know which function to point and result in error.

To avoid this we use call method on the method.
<div class = 'code'>
    travellingme ={
        fcode: 'LH',
        bookings :[],
        book (flight, num, fname = 'Lakshmi'){
            console.log(\`Hey, \${fname} is travelling on \${flight}
                flight \${this.fcode}\${num}\`)
            //this.bookings.push (\`\${this.fcode}\${num}\`, fname)    --->  bookings: [ 'LH234', 'Lakshmi', 'LH446', 'Lakshmi' ],
            this.bookings.push({flight :\`\${this.fcode}\${num}\`, fname}) 
                                                                // ---> bookings: [
                                                                //{ flight: 'LH234', name: 'Lakshmi' },
                                                                //{ flight: 'LH678', name: 'Lakshmi' }
                                                                // ],
        }
    }
    travellingme.book('Air Asia', 234,);
    travellingOther = {
        fcode : 'AB',
        bookings : [],

    }
    const book = travellingme.book;
    book.call(travellingOther, 'Lufth', 777, 'John');
    book.call(travellingme, 'ESA', 446 );
    console.log("me",travellingme); 
    console.log("other",travellingOther);
</div>  
<span class = 'sub-sub-head'>&#128640; BIND method</span>
Other way of defining for this keyword  is .BIND() . This method allows you to explicitly set 2nd object to the calling method in 1st object.
<div class = 'code'>
    travellingme ={
        fcode: 'LH',
        bookings :[],
        book (flight, num, fname = 'Lakshmi'){
            console.log(\`Hey, \${fname} is travelling on \${flight}
                flight \${this.fcode}\${num}\`)
            //this.bookings.push (\`\${this.fcode}\${num}\`, fname)    --->  bookings: [ 'LH234', 'Lakshmi', 'LH446', 'Lakshmi' ],
            this.bookings.push({flight :\`\${this.fcode}\${num}\`, fname}) 
                                                                // ---> bookings: [
                                                                //{ flight: 'LH234', name: 'Lakshmi' },
                                                                //{ flight: 'LH678', name: 'Lakshmi' }
                                                                // ],
        }
    }
    
    travellingOther = {
        fcode : 'AB',
        bookings : [],

    }

    const bookOther = travellingme.book.bind(travellingOther);  // here this keyword will always point to travellingOther object
    bookOther('ABC', 778, 'Steve');
    console.log("other",travellingOther);
    
    const bookOther78 = book.bind(travellingOther,'ABC' ,778);
    bookOther78( 'Martha');
    bookOther78('Sara'); // with bind we can use bookOther78 multimple times 
    //like here for different user on same flight
</div>
    <i>Another example for <b> call/apply/bind method </b> </i>
<ul><li>call attaches this into function and executes the function immediately:
<div class = 'code'>
    var person = {  
    name: "James Smith",
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
        }
    }
    person.hello("world");  // output: "James Smith says hello world"
    person.hello.call({ name: "Jim Smith" }, "world"); // output: "Jim Smith says hello world"
</div></li>
<li>bind attaches this into function and it needs to be invoked separately like this:
<div class = 'code'>
var person = {  
  name: "James Smith",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

person.hello("world");  // output: "James Smith says hello world"
var helloFunc = person.hello.bind({ name: "Jim Smith" });
helloFunc("world");  // output: Jim Smith says hello world"

or like this:
    
var helloFunc = person.hello.bind({ name: "Jim Smith" }, "world");
helloFunc();  // output: Jim Smith says hello world"
</div></li>
<li>apply is similar to call except that it takes an array-like object instead of listing the arguments out one at a time:
<div class = 'code'>
function personContainer() {
  var person = {  
     name: "James Smith",
     hello: function() {
       console.log(this.name + " says hello " + arguments[1]);
     }
  }
  person.hello.apply(person, arguments);
}
personContainer("world", "mars"); // output: "James Smith says hello mars", note: arguments[0] = "world" , arguments[1] = "mars" 
</div></li></ul>
<span class = 'sub-head'>Immediately Invoked Function Expressions (IIFE) </span>
Functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.
They are used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function.
<div class = 'code'>
    (function(){
        console.log("Private Immediately Invoked Function Expressions (IIFE)")
    })();

    //Arrow function IIFE
    (() => console.log("Private Immediately Invoked Function Expressions (IIFE)  for Arrow FUnction"))();
</div>`;
    document.getElementById("functions").innerHTML = logfun;
});

//# sourceMappingURL=index.ab982f21.js.map
