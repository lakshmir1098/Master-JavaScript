var lak ={
    firstName : "Lakshmi",
    lastName : "Ramachandran",
    occupation : "Programmer",
    Hobbies : ["singing", "dancing", "coding"]
}
console.log(lak);
console.log (lak.firstName);
console.log(lak['occupation']);

const name_calling = 'Name';
//console.log(lak['first' + name_calling]);

// const what_you_need_about_me = prompt('hey, what you want to knwo bout lakshmi - firstName. lastName, occupation,hobbies ?');
// console.log(lak.what_you_need_about_me); //return undefined
// console.log(lak[what_you_need_about_me]); 
//retrun the value for the key enter bY user in the prompt 
//lastName -> Ramachandran
//hobbies -> undefined --> case-sensitive
//Hobbies -> array of hobbies defined 

lak.location = "TamilNadu";
lak["mail_id"] = "lakshmichandran1010@gmail.com"
console.log(lak);

const hobbies_length =  lak.Hobbies.length;
const best_hobby =  lak.Hobbies[0];
// you can pass these params or write as below 
console.log(lak.firstName + " has " + lak.Hobbies.length +" hobbies and her favourite one is "+ lak.Hobbies[0]);
console.log(`${lak.firstName} has ${lak.Hobbies.length} hobbies and her favourite one is ${lak.Hobbies[0]}`);

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
console.log("a",about_me.age(lak['birthYear'])); //works
console.log("b",about_me.age(lak.birthYear)); // works
console.log("c",about_me.age(1998)); //works
console.log("d",about_me['age'](lak.birthYear)); //works 
console.log("e",about_me.age()); //works


var  about_me_2 = {
    firstName: 'Lakshmi',
    lastName: 'Ramachandran',
    occupation: 'Programmer',
    birthYear : 1998,
    Hobbies: [ 'singing', 'dancing', 'coding' ],
    location: 'TamilNadu',
    mail_id: 'lakshmichandran1010@gmail.com',
    calAge : function() { 
        this.age =  2024 - this.birthYear;
        return this.age;
    },
  };
console.log("age:" , about_me_2.calAge);

