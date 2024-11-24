
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


const sum = function (a=1, b=1){
    return a + b;
}

console.log(sum());


function oneWord (s) {
    return s.replace(/ /g, '').toLowerCase();
};
function transform (str, fn){
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by : ${fn.name}`);
}
transform("I'm learning JS", oneWord);


function greet (gr){
    return function (name){
        console.log(`${gr}, ${name}`);
    }
}
const greetss = greet('Hey');
greetss('Lakshmi');
greet('Hello')('Lakshmi');


const greets = gr => n => console.log(`${gr}, ${n}`) ;
greets('Hi')('Lakshmi');


travellingme ={
    fcode: 'LH',
    bookings :[],
    book (flight, num, fname = 'Lakshmi'){
        console.log(`Hey, ${fname} is travelling on ${flight}
            flight ${this.fcode}${num}`)
        //this.bookings.push (`${this.fcode}${num}`, fname)    --->  bookings: [ 'LH234', 'Lakshmi', 'LH446', 'Lakshmi' ],
        this.bookings.push({flight :`${this.fcode}${num}`, fname}) 
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



const bookOther = book.bind(travellingOther); 
bookOther('ABC', 778, 'Steve');
console.log("other",travellingOther);

const bookOther78 = book.bind(travellingOther,'ABC' ,778);
bookOther78( 'Martha');
bookOther78('Sara'); // with bind we can use bookOther78 multimple times


(function(){
    console.log("Private Immediately Invoked Function Expressions (IIFE)")
})();

(() => console.log("Private Immediately Invoked Function Expressions (IIFE)  for Arrow FUnction"))();
