document.addEventListener("DOMContentLoaded", function() {
    var oop = `<b> 1. How OOP works in JavaScript? </b>
- JavaScript is a prototype-based language. Meaning, objects are linked to a prototype object.
- So, the objects linked can inherit properties and methods from the prototype object. This is called prototypal inheritance/ Delegation.

<b> 2. 3 ways of implementing Prototypal inheritance </b> 
- <b><i>Constructor functions</i></b>
    - Constructor functions are used to create multiple objects with the same properties and methods from a function.
    - Constructor functions are like classes in other languages.
    - The new keyword is used to create objects.
    - The 'this' keyword is used to refer to the current object.
    - This is how built-in Arrays, Maps or Sets are implemented
<div class = "code">
const Person = function (firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;

    // we always do this to reate a method
    // this is a bad approach,
    // as it will create a new copy of the function for each object
    // this.calcAge = function () {
    //     return 2025 - this.birthYear;
    // }
}

//instead do this for Prototypal inheritance
Person.prototype.calcAge = function () {
    return 2025 - this.birthYear;
}

const laks = new Person('Lakshmi', 'Ramachandran', 1998);
console.log(laks, laks.calcAge());
// Here, the laks object itself does not have the calcAge method,
// but it is inherited from the prototype object
</div>
- <b><i>Object.create() method</i></b>
    - Easiest and cleanest way to create objects with a prototype.
    - Object.create() method creates a new object with a prototype object.
<div class = "code">
const PersonProto = {
    calcAge() {
        return 2025 - this.birthYear;
    },

    init(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
}

const lak2 = Object.create(PersonProto);
// lak2.firstName = 'Lakshmi';
// lak2.lastName = 'Ramachandran';
// lak2.birthYear = 1998;
lak2.init('Lakshmi', 'Ramachandran', 1998);
lak2.calcAge();

console.log(lak2.__proto__);

console.log("laks using object.create()", lak2, "age : ", lak2.calcAge());
</div>
- <b><i>ES6 classes</i></b>
    - Morden way of implementing classes in JavaScript.
    - ES6 classes are syntactic sugar for constructor functions.
    - Note that, ES6 classes does not behave like classes in other languages. It is still prototype-based and works exactly like constructor function. 
1. class Expression <span class = "code-one-line">const Person = class {} </span>
2. class Declaration <span class = "code-one-line">class Person {} </span>
<div class = "code">
class PersonCl {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    // thisis still inside prototype object
    calcAge() {
        console.log(2025 - this.birthYear);
    }
}

// this will also work
PersonCl.prototype.greet = function () {
    console.log(\`Hey $\{this.firstName}\`);
}

const lak1 = new PersonCl('Lakshmi', 'Ramachandran', 1998);
console.log("lak1", lak1);
lak1.calcAge();
lak1.greet();</div>
<i><b>Checking for prototype object in instance object</b></i>
console.log(lak1.__proto__);
console.log(lak1.__proto__ === PersonCl.prototype); //true

<div><i><b>NOTE:</b> 
* Classes are not hoisted. So, we need to declare the class before using it.
* Classes are first-class citizens in JavaScript. Meaning, we can pass them as arguments, return them from functions, and assign them to variables.
* Classes are executed in strict mode. </i>

<span class = sub-head> Class Summary </span>
<img src = "assests/class_summary.png" alt = "Class Summary" class = "img-center">
</div>`;
    document.getElementById("oop").innerHTML = oop;
});

//# sourceMappingURL=index.3868be92.js.map
