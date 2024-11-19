document.addEventListener('DOMContentLoaded', function() {
var objects =  
`
Objects are in key-value pairs.
<div class = "code">
    var lak ={
        firstName : "Lakshmi",
        lastName : "Ramachandran",
        occupation : "Programmer",
        Hobbies : ["singing", "dancing", "coding"]
    }
</div>

<span class = "sub-head">Accessing elements in objects </span>
<div class="code"> 
    console.log(lak.firstName); //dot-notation 
                or
    console.log(lak['firstName']); //bracket-notation
</div>

The difference between dot and bracket notation is, in bracket notation we can use expression.

<span class="sub-sub-head">Example</span>
<div class="code"> 
    const name_calling = 'Name';
    console.log(lak['first' + name_calling]);
    //output - Lakshmi;
</div>

Other  case scenario is, if the key of an object is given via another variable from user, then dot notation cannot find that 
variable name as key of an object and thus results in <span class = "code-word">undefined</span>. Here we have to use bracket-notation.

<span class="sub-sub-head">Example</span>
<div class="code"> 
    const what_you_need_about_me = prompt('hey, what you want to know about me - firstName. lastName, occupation,hobbies ?');
    console.log(lak.what_you_need_about_me); //return undefined
    console.log(lak[what_you_need_about_me]); 
    //return the value for the key enter by the user in the prompt 
    
    outputs:
    //lastName -> Ramachandran
    //hobbies -> undefined --> case-sensitive
    //Hobbies -> array of hobbies defined 
</div>
<span class = "sub-head">Adding elements into objects </span>
<div class = "code">
    lak.location = "TamilNadu";
    lak["mail_id"] = "lakshmichandran1010@gmail.com"
    console.log(lak);
    
    //output : lak object will not include  location and mail_id element
</div>
<span class = "sub-head">Function inside object </span>

We can use function for calculation inside the objects.
<div class ="code">
    var  about_me = {
        firstName: 'Lakshmi',
        lastName: 'Ramachandran',
        occupation: 'Programmer',
        birthYear : 1998,
        Hobbies: [ 'singing', 'dancing', 'coding' ],
        location: 'TamilNadu',
        mail_id: 'lakshmichandran1010@gmail.com',
        age : (birthYear) => 2024 - birthYear, // used arrow function    
    }
    console.log(about_me.age(lak['birthYear'])); // is not working - return Nan
    console.log(about_me.age(1998)); //works
</div>
<div class = "code">
    var  about_me = {
        firstName: 'Lakshmi',
        lastName: 'Ramachandran',
        occupation: 'Programmer',
        birthYear : 1998,
        Hobbies: [ 'singing', 'dancing', 'coding' ],
        location: 'TamilNadu',
        mail_id: 'lakshmichandran1010@gmail.com',
        age : function() { return 2024 - this.birthYear},
    }
    
    //All these way of accessing age inside objects works
    console.log("a",about_me.age(lak['birthYear'])); //works
    console.log("b",about_me.age(lak.birthYear)); // works
    console.log("c",about_me.age(1998)); //works
    console.log("d",about_me['age'](lak.birthYear)); //works 
    console.log("e",about_me.age()); //works
</div>
<span class = "sub-head">Destructuring object </span>
<div class = 'code'>
    const { 
        firstName:my_name, 
        mail_id:mail = ' ', //setting default if not present
        fav_food = [],
    } = about_me_2;
    console.log(my_name, mail);
</div>
<span class = "sub-head">Spread Operator </span>
<div class = 'code'>
    const new_me = {...about_me_2,Profession:'developer'};
    console.log(new_me);
</div>
<span class = "sub-head">Optional chaining </span>

To check if the property you are calling from an object is present in the object or not. We use "?." instead of just "." for acessing object properties now.
This will prevent us from errors of undefined <span class = 'code-word'> 'Cannot read property of undefined'</span> and just return <span class = 'code-word'> undefined </span> when the property is not present.

<span class = 'sub-sub-head'>Example </span>
<div class = 'code'>
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
    orders(ing1,ing2){
        return \`Pizza is ready with \${ing1} and \${ing2} \`;
    },

    }
    console.log(resturant.openingHours?.sat);   
</div>
`
document.getElementById("objects").innerHTML = objects;
})