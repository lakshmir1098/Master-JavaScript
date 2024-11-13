document.addEventListener('DOMContentLoaded', function() {
var objects =  
`
Objects are in key-value pairs.

<span class="sub-sub-head">Example</span>
    <div class = "code">
    var lak ={
        firstName : "Lakshmi",
        lastName : "Ramachandran",
        occupation : "Programmer",
        Hobbies : ["singing", "dancing", "coding"]
    }
    </div>

<span class = "sub-head"> Accessing elements in objects </span>
    <div class="code"> 
    console.log(lak.firstName); //dot-notation 
                or
    console.log(lak['firstName']); //bracket-notation
    </div>
<span>The difference between dot and bracket notation is, in bracket notation we can use expression.</spN>

<span class="sub-sub-head">Example</span>
    <div class="code"> 
    const name_calling = 'Name';
    console.log(lak['first' + name_calling]);
    //output - Lakshmi;
    </div>

<span>Other  case scenario is, if the key of an object is given via another variable from user, then dot notation cannot find that 
variable name as key of an object aand thus results in 'undefined'. Here we have to use bracket-notation. </span>

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

<span class = "sub-head"> Adding elements into objects </span>
    <div class = "code">
    lak.location = "TamilNadu";
    lak["mail_id"] = "lakshmichandran1010@gmail.com"
    console.log(lak);
    
    //output : lak object will not include  location and mail_id element
    </div>
<span class = "sub-head"> Function inside object </span>
    
<span> We can use function for calculation inside the objects.</span>
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
`


document.getElementById("objects").innerHTML = objects;
})