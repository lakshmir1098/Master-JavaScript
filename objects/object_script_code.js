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
console.log(lak['first' + name_calling]);

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
    age2 : () => 2024 - this.birthYear,
  }
console.log("a",about_me.age(lak['birthYear'])); //works
console.log("b",about_me.age(lak.birthYear)); // works
console.log("c",about_me.age(1998)); //works
console.log("d",about_me['age'](lak.birthYear)); //works 
console.log("e",about_me.age()); //works

console.log("a",about_me.age2(lak['birthYear'])); //not works
console.log("b",about_me.age2(lak.birthYear)); // not works
console.log("c",about_me.age2(1998)); //not works
console.log("d",about_me['age2'](lak.birthYear)); //not works 
console.log("e",about_me.age2()); //not works

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
console.log("age:" , about_me_2.calAge());
console.log("about_me_2: ",about_me_2);

console.log(about_me_2.age); // work

const { 
  firstName:my_name, 
  mail_id:mail = ' ', //setting default if not present
  fav_food = [],

} = about_me_2;
console.log(my_name, mail);

const new_me = {...about_me_2,Profession:'developer'}; 

console.log(new_me);

// optional chaining ?.
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
    return `Pizza is ready with ${ing1} and ${ing2}`;
  },
  owner : {
  },
}
console.log(resturant.openingHours?.sat); 

const me1 = Object.keys(about_me_2);
const me2 = Object.values(about_me_2);
const me3 = Object.entries(about_me_2);
const me4 = Object.assign(resturant.owner, about_me_2);
const me5 = Object.entries(resturant);

console.log('resturant :')
for( const i of me5){
 
  console.log(i);
}
console.log(me5);

const me6 = Object.entries(resturant.openingHours);
for ( const [key, {open, close}] of me6) {
  console.log(`On ${key} we are open for ${open} and closed for ${close}`);
}

const maps = new Map (Object.entries(resturant.openingHours))
console.log(maps);


