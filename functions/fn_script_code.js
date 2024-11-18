
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

// Function  declaration
function logg(a,b){
    console.log(a, b);
    let s = `I am having ${a} and ${b} in my hand`;
        return s;
    }

var cal = logg("apple", "orange");
console.log(cal); 

//Arrow function
var age = byear => 2024 - byear;
console.log(age(1998));

var yearsUntilRetirement = byear => {
    let age = 2024 - byear;
    let years = 60 - age;
    return years;
}
console.log(yearsUntilRetirement(1998));


// Function calling other function
function piece(n){
    return n * 5;
}
function fruitProcess(a,b){
    let applePiece =  piece(a);
    let orangePiece = piece(b);
    let s = `I am having ${applePiece} pieces of apple and ${orangePiece} pieces of orange in my hand`;
    return s;
        }

console.log(fruitProcess(2, 3)); 


const add = function(...num){
    let sum = 0;
 for(const i of num){
    sum = sum + i;
 }
 console.log(sum);
}

const x = [3,5,6];
add(2,3);
add(5,6,7,7);
add(765,4444,666,33,2,1,4,9);
add(...x);